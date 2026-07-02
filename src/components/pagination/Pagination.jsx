function Pagination({
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
  totalUsers,
}) {
  const totalPages = Math.ceil(totalUsers / pageSize);

  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-white p-4 shadow md:flex-row">
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>

        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="rounded border px-3 py-1"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;