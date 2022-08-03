import { useEffect, useState } from "react";
import DataToDisplay from "./dataToDisplay";
import SearchBox from "./searchbox";
import dataListService from "../services/fetchedDataList";

const MainContainer = () => {
  const [listData, setListData] = useState([]);
  const [category, setCategory] = useState("");

  const [searchedData, setSearchedData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dataListService
      .getAll()
      .then((res) => {
        if (category === "FOOD") {
          setLoading(true);
          setListData(res.results.FOOD);
          setCurrentPage(1);
          setLoading(false);
        } else if (category === "VEHICLE") {
          setLoading(true);
          setListData(res.results.VEHICLE);
          setCurrentPage(1);
          setLoading(false);
        } else if (category === "CPS") {
          setLoading(true);
          setListData(res.results.CPS);
          setCurrentPage(1);
          setLoading(false);
        } else if (category === "HEALTH") {
          setLoading(true);
          setListData(res.results.HEALTH);
          setCurrentPage(1);
          setLoading(false);
        } else {
          setLoading(true);
          setListData(res.results.ALL);
          setCurrentPage(1);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }, [category]);

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
      />
      <DataToDisplay
        listData={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        loading={loading}
      />
    </>
  );
};

export default MainContainer;
