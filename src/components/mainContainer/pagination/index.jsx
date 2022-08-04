import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  paginateFront,
  paginateBack,
  indexOfLastPost,
  dataLang,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const disableNext = indexOfLastPost >= totalPosts;
  return (
    <>
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => paginateBack()}
            disabled={currentPage === 1}
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={() => paginateFront()}
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              {dataLang === "en" ? "Showing" : "Affichage de"}
              <span className="font-medium">
                {" "}
                {currentPage === 1 ? 1 : currentPage * postsPerPage - 3}{" "}
              </span>
              {dataLang === "en" ? "to" : "à"}
              <span className="font-medium">
                {" "}
                {currentPage * postsPerPage}{" "}
              </span>
              {dataLang === "en" ? "of" : "àsur"}

              <span className="font-medium"> {totalPosts} </span>
              {dataLang === "en" ? "results" : "résultats"}
            </p>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={() => paginateBack()}
                disabled={currentPage === 1}
                className={
                  currentPage === 1
                    ? "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-300 text-sm font-medium text-gray-500"
                    : "relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                }
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
              <ul className="flex pl-0 rounded list-none flex-wrap">
                <li>
                  {pageNumbers.map((number) => (
                    <button
                      onClick={() => {
                        paginate(number);
                      }}
                      key={number}
                      className={
                        currentPage === number
                          ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                          : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      }
                    >
                      {number}
                    </button>
                  ))}
                </li>
                <li>
                  <button
                    onClick={() => paginateFront()}
                    disabled={disableNext}
                    className={
                      disableNext
                        ? "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-300 text-sm font-medium text-gray-500"
                        : "relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    }
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
