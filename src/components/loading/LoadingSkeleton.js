import React from 'react'
import PropTypes from 'prop-types'

const LoadingSkeleton = (props) => {
  const { type } = props;

  if(type === 'comment'){
    return (
      <div className="skeleton comment">
        <div className="skeleton__title comment" />
        <div className="skeleton__description comment" />
      </div>
    );
  } else {
    return (
      <div className="skeleton">
        <div className="skeleton__title" />
        <div className="skeleton__description" />
      </div>
    )
  }
}

LoadingSkeleton.propTypes ={
  type: PropTypes.string,
}

export default LoadingSkeleton
