import React from 'react'

const LoadingSkeleton = (props) => {
  const { type } = props;

  if(type === 'comment'){
    return (
      <div className="skeleton comment">
        <div className="skeleton__title comment"></div>
        <div className="skeleton__description comment"></div>
      </div>
    );
  } else {
    return (
      <div className="skeleton">
        <div className="skeleton__title"></div>
        <div className="skeleton__description"></div>
      </div>
    )
  }
}

export default LoadingSkeleton
