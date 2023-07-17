import React from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
const data = [
    {
        severity: "danger",
        recommendations: [
            // JSON.parse(localStorage.getItem('Data'))?.worst_features_backward[0],
            JSON.parse(localStorage.getItem('Data'))?.worst_features_backward[1],
            JSON.parse(localStorage.getItem('Data'))?.worst_features_backward[2],
            JSON.parse(localStorage.getItem('Data'))?.worst_features_backward[3],
            JSON.parse(localStorage.getItem('Data'))?.worst_features_backward[4],
            
        ],
    },
    {
        severity: "safe",
        recommendations: [
            JSON.parse(localStorage.getItem('Data'))?.selected_k_best[0],
            JSON.parse(localStorage.getItem('Data'))?.selected_k_best[1],
            JSON.parse(localStorage.getItem('Data'))?.selected_k_best[2],
            JSON.parse(localStorage.getItem('Data'))?.selected_k_best[3],
            JSON.parse(localStorage.getItem('Data'))?.selected_k_best[4],
            
        ],
    },
    

];

const Alertrec = () => {
    return (
        <div className='container my-5'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                {data.map((ele, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`panelsStayOpen-heading-${index}`}>
                            <button
                                className={`accordion-button ${ele.severity === "danger" ? "bg-danger text-white" : ele.severity === "warning" ? "bg-warning text-dark" : "bg-success text-white"}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#panelsStayOpen-collapse-${index}`}
                                aria-expanded="true"
                                aria-controls={`panelsStayOpen-collapse-${index}`}
                            >
                                {ele.severity === "danger" ? (
                                    <>
                                        <FaTimesCircle className="me-2" />
                                        Less Engaging factors
                                    </>
                                ) : ele.severity === "warning" ? (
                                    <>
                                        <FaExclamationTriangle className="me-2" />
                                        More Engaging factors
                                    </>
                                ) : (
                                    <>
                                        <FaCheckCircle className="me-2" />
                                        More Engaging factors
                                    </>
                                )}
                            </button>
                        </h2>
                        <div
                            id={`panelsStayOpen-collapse-${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                            aria-labelledby={`panelsStayOpen-heading-${index}`}
                        >
                            <div className="accordion-body">
                                {ele.recommendations.map((rec, recIndex) => (
                                    <p key={recIndex}>{rec}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Alertrec;
