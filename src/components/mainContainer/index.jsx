import { useEffect, useState } from "react";
import DataToDisplay from "./dataToDisplay";
import SearchBox from "./searchbox";
import dataListService from "../services/fetchedDataList";

const MainContainer = ({ dataLang, setFetchedData }) => {
  const [listData, setListData] = useState([]);
  const [category, setCategory] = useState("");
  const [searchedData, setSearchedData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dataListService
      .getAll(dataLang)
      .then((res) => {
        if (category === "FOOD") {
          setListData(res.results.FOOD);
        } else if (category === "VEHICLE") {
          setListData(res.results.VEHICLE);
        } else if (category === "CPS") {
          setListData(res.results.CPS);
        } else if (category === "HEALTH") {
          setListData(res.results.HEALTH);
        } else {
          setListData(res.results.ALL);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }, [category, dataLang]);

  useEffect(() => {
    setCurrentPage(1);
  }, [listData]);

  const handleSearchedData = (value) => {
    setSearchedData(value);
    setCurrentPage(1);
  };

  const filteredData = listData?.filter((data) => {
    if (searchedData === "") {
      return data;
    } else {
      return data.title.toLowerCase().includes(searchedData);
    }
  });
  return (
    <>
      <SearchBox
        setSearchedData={handleSearchedData}
        setCategory={setCategory}
        dataLang={dataLang}
      />
      <DataToDisplay
        listData={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        dataLang={dataLang}
      />
    </>
  );
};

export default MainContainer;
