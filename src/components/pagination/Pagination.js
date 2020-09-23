import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
  const { storyPerPage, totalStories, paginate, currentPage, windowSize } = props;

  const pageNumbers = [];
  
  const pages = Math.floor(totalStories / storyPerPage);
  let maxLeft = (currentPage - Math.floor(windowSize / 2))
  let maxRight = (currentPage + Math.floor(windowSize / 2))

  if (maxLeft < 1) {
    maxLeft = 1
    maxRight = windowSize
  }

  if (maxRight > pages) {
    maxLeft = pages - (windowSize - 1)

    if (maxLeft < 1) {
      maxLeft = 1
    }
    maxRight = pages
  }

  for (let i = maxLeft; i <= maxRight; i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <ul className="pagination">
        {currentPage !== 1 ? 
          <li className="page-item" onClick={() => paginate(1)}>
            <Link to="/">{'<<'} First</Link>
          </li> : ''}
        {currentPage > 1 ? 
          <li className="page-item" onClick={() => paginate(currentPage - 1)}>
            <Link to="/">{'<'} Prev</Link>
          </li> : ''}
        {pageNumbers.map(number => (
          <li className={`page-item ${currentPage === number ? 'active-page' : ''}`}
            key={number}
            onClick={() => paginate(number)}
          >
            <Link to='/' className="page-link"> {number} </Link>
          </li>
        ))}
        {currentPage < pages ? 
          <li className="page-item" onClick={() => paginate(currentPage + 1)}>
            <Link to="/">Next {'>'}</Link>
          </li> : ''}
        {currentPage !== pages ? 
          <li className="page-item" onClick={() => paginate(pages)}>
            <Link to="/">Last {'>>'}</Link>
          </li> : ''}
      </ul>

      <ul className="pagination mobile-view">
        {currentPage > 1 ? 
          <li className="page-item" onClick={() => paginate(currentPage - 1)}>
            <Link to="/">{'<'} Prev</Link>
          </li> : ''}
        <li className="page" >
          {currentPage} of {pages}
        </li>
        {currentPage < pages ? 
          <li className="page-item" onClick={() => paginate(currentPage + 1)}>
            <Link to="/"> Next {'>'}</Link>
          </li> : ''}
      </ul>
    </>
  )
}

export default Pagination
