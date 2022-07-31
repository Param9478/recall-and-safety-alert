import SymbolCards from "./symbolsCards";
import ListboxFilter from "./listboxFilter";

const SearchBox = () => {
  return (
    <div className="lg:flex lg:justify-between lg:items-center">
      <div className="rounded-lg bg-gray overflow-hidden shadow lg:w-3/4 md:rounded-br-3xl h-60 bg-[#6D6E71]">
        <h2 className="sr-only" id="profile-overview-title">
          Search Box
        </h2>
        <div className="p-6 mt-5">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl sm:text-3xl leading-7 text-white md:text-4xl truncate">
                Find recalls, advisories and safety alerts.
              </h2>
            </div>
          </div>

          <div className="mt-5 md:flex md:items-center md:justify-between md:space-x-3">
            <div className="mt-1 relative flex items-center md:w-3/4">
              <input
                type="text"
                name="search"
                id="search"
                className="shadow-sm  focus:outline-none p-2 sm:p-4 block w-full pr-12 sm:text-sm border-gray-300 rounded-3xl"
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd className="hidden sm:inline-flex items-center border border-gray-200 bg-[#6D6E71] focus:ring-0 focus:ring-offset-0 rounded-2xl px-2 text-md font-sans font-medium text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mx-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search
                </kbd>
              </div>
            </div>
            <div className="lg:mt-0 md:mt-0 mt-5">
              <ListboxFilter />
            </div>
          </div>
        </div>
      </div>
      <SymbolCards />
    </div>
  );
};

export default SearchBox;
