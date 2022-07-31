import Header from "./header";
// import SymbolCards from "./mainContainer/symbolsCards";
import SearchBox from "./searchbox";

const Components = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <SearchBox />
      {/* <SymbolCards /> */}
    </div>
  );
};

export default Components;
