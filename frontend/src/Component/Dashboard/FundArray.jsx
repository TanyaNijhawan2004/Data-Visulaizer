import React from 'react';

const FundArray = () => {
  const funds = [
    { id: 1, source: 'Mobile', amount: 2349 },
    { id: 2, source: 'Website', amount: 4203 },
    { id: 3, source: 'Tablet', amount: 1069 },
  ];

  const totalFunds = funds.reduce((acc, fund) => acc + fund.amount, 0);

  return (
    <div className="fund-raise">
      <h2 className="fund-raise__title">User per source</h2>
      <h3 className="fund-raise__total">Total User from different website: {totalFunds}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Source</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {funds.map((fund) => (
            <tr key={fund.id}>
              <td>{fund.source}</td>
              <td>{fund.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FundArray;
