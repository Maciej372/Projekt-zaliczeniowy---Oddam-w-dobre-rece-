import "/src/scss/styles/_Pagination.scss";

const Pagination = ({
  totalFoundations,
  foundationsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const pages = [
    ...Array(Math.ceil(totalFoundations / foundationsPerPage)).keys(),
  ].map((num) => num + 1);

  return (
    <div className="paginationBox">
      {pages.map((page) => (
        <button
          className={currentPage === page ? "active" : ""}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
