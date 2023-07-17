import pandas as pd
from flask import Flask, request, jsonify
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.linear_model import LinearRegression
from sklearn.feature_selection import RFE
from sklearn.preprocessing import StandardScaler
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def select_k_best(X, y, k):
    skb = SelectKBest(score_func=f_classif, k=k)
    skb.fit(X, y)
    selected_features = X.columns[skb.get_support()]
    return selected_features

# Your other feature selection functions...

def forward_elimination(X, y, k):
    lr = LinearRegression()
    fe = RFE(estimator=lr, n_features_to_select=k)
    fe.fit(X, y)
    selected_features = X.columns[fe.support_]
    return selected_features


def backward_elimination(X, y, k):
    X_be = X.copy()
    selected_features = []
    worst_features = []
    while X_be.shape[1] > k:
        model = LinearRegression()
        model.fit(X_be, y)
        p_values = pd.Series(model.coef_, index=X_be.columns)
        worst_features.extend(p_values.nsmallest(5).index.tolist())
        worst_feature = p_values.idxmax()
        worst_features.append(worst_feature)
        X_be.drop(worst_feature, axis=1, inplace=True)
        selected_features = X_be.columns
    return selected_features, worst_features

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        # Read the dataset from the CSV file
        csv_file = './user.csv'
        df = pd.read_csv(csv_file)
        df.drop(['User_ID', 'User_Engagement', 'Access_Time'], axis=1, inplace=True)

        # Separate features and target variable
        X = df.drop('User_Interactions', axis=1)
        y = df['User_Interactions']

        # Preprocess categorical columns
        categorical_cols = X.select_dtypes(include=['object']).columns
        X_encoded = pd.get_dummies(X, columns=categorical_cols, drop_first=True)

        # Preprocess numeric columns
        numeric_cols = X_encoded.select_dtypes(include=['int64', 'float64']).columns
        scaler = StandardScaler()
        X_encoded[numeric_cols] = scaler.fit_transform(X_encoded[numeric_cols])

        # Feature selection
        k = 5

        # SelectKBest
        selected_features_skb = select_k_best(X_encoded, y, k)
        selected_features_forward = forward_elimination(X_encoded, y, k)
        selected_features_backward, worst_features_backward = backward_elimination(X_encoded, y, k)

        response_obj = {
            "selected_k_best": selected_features_skb.tolist(),
            "forward_eliminations": selected_features_forward.tolist(),
            "backward_eliminations": selected_features_backward.tolist(),
            "worst_features_backward": worst_features_backward[-5:]
        }

        return jsonify(response_obj)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
