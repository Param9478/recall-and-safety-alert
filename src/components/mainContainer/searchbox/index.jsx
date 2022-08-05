import SymbolCards from "./symbolsCards";

const SearchBox = ({ setSearchedData, setCategory, dataLang }) => {
  return (
    <div className="lg:flex lg:items-center lg:space-x-10">
      <div className="lg:rounded-br-[8rem] border-t md:rounded-none overflow-hidden shadow lg:w-3/4 md:h-64 h-48 bg-[#6D6E71]">
        <div className="flex-1 lg:max-w-4xl mx-auto px-6">
          <h2 className="sr-only" id="profile-overview-title">
            Search Box
          </h2>
          <div className="p-6 mt-2">
            <div className=" min-w-0">
              <h2 className="text-2xl lg:text-5xl sm:text-3xl text-white md:text-4xl ">
                {dataLang === "en"
                  ? "Find recalls, advisories and safety alerts."
                  : "Trouvez des rappels, des avis et des avis de sécurité."}
              </h2>
            </div>

            <div className="mt-2">
              <div className="mt-1 relative md:w-full">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="shadow-sm focus:outline-none p-3 sm:p-2 block w-full pr-12 sm:text-sm border-gray-300 rounded-3xl"
                  onChange={(e) =>
                    setSearchedData(e.target.value.toLocaleLowerCase())
                  }
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
                    {dataLang === "en" ? "Search" : "Recherche"}
                  </kbd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 sm:px-8">
        <SymbolCards setCategory={setCategory} />
      </div>

      {/* <Motion /> */}
    </div>
  );
};

export default SearchBox;
