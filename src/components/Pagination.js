import React from 'react';

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const previousPage = () => {
    onPrevious();
  };

  const nextPage = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={previousPage}>
              Prev
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
