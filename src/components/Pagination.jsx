const Pagination = ({previewPage, currentPage, totalPages, setCurrentPage, nextPage}) => {
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 0 ? "disabled" : ""}`}>
          <button
            className={`page-link ${
              currentPage === 0
                ? "link-secondary focus-ring focus-ring-secondary"
                : "link-dark bg-warning focus-ring focus-ring-warning"
            }`}
            onClick={previewPage}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            key={index}
            className={`page-item ${index === currentPage ? "active" : ""}`}
          >
            <button
              className={`page-link ${
                index === currentPage
                  ? "bg-warning link-light border border-light focus-ring focus-ring-warning"
                  : "link-dark"
              }`}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages - 1 ? "disabled" : ""
          }`}
        >
          <button
            className={`page-link ${
              currentPage === totalPages - 1
                ? "link-secondary focus-ring focus-ring-secondary"
                : "link-dark bg-warning focus-ring focus-ring-warning"
            }`}
            onClick={nextPage}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
