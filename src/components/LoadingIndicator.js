import React from 'react';
import './LoadingIndicator.css';

const LoadingIndicator = () => {
  return (
    <div className="loadingContainer"> 
      <div className="seeThrough-1"></div>
      <div className="seeThrough-2"></div>
      <div className="seeThrough-3"></div>
      <div className="seeThrough-4"></div>
    </div>
  );
};

export default LoadingIndicator;