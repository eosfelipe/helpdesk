const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            <span className="font-medium">{totalRows}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {pageNumbers.map((number, id) => (
              <a
                href={`#q=${number}`}
                aria-current="page"
                className={`z-10 bg-indigo-50 ${
                  number === id ? 'border-indigo-500' : ''
                } text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
