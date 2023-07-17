import React, { useState, useEffect } from 'react';

const FundTrackingComponent = () => {
  const [targetAmount, setTargetAmount] = useState(10000);
  const [currentAmount, setCurrentAmount] = useState(5000);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatedProgress = (currentAmount / targetAmount) * 100;
    setProgress(calculatedProgress);
  }, [currentAmount, targetAmount]);

  return (
    <div className="fund-tracking">
      <h2 className="fund-tracking__title">Fund Tracking</h2>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="fund-tracking__details">
        <p>
          Raised: ${currentAmount} / ${targetAmount}
        </p>
        <p>Progress: {progress}%</p>
      </div>
    </div>
  );
};

export default FundTrackingComponent;
