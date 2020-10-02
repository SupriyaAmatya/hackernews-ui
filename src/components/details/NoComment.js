import React from 'react'
import { FaComments } from 'react-icons/fa';

const NoComment = () => {
  return (
    <div className="default">
      <div className="default__body">
        <FaComments size={80}/>
        <p>No comments found</p>
      </div>
    </div>
  )
}

export default NoComment
