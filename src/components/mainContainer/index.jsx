import { useEffect, useState } from "react";
import DataToDisplay from "./dataToDisplay";
import SearchBox from "./searchbox";
import dataListService from "../services/fetchedDataList";

const MainContainer = () => {
  const [listData, setListData] = useState([]);

  const [searchedData, setSearchedData] = useState("");

  console.log(searchedData);

  useEffect(() => {
    dataListService
      .getAll()
      .then((res) => {
        setListData(res.results.ALL);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }, []);

  const filteredData = listData.filter((data) => {
    if (searchedData === "") {
      return listData;
    } else {
      return data.title.toLowerCase().includes(searchedData);
    }
  });
  console.log(filteredData);
  return (
    <>
      <SearchBox setSearchedData={setSearchedData} />
      <DataToDisplay listData={filteredData} />
    </>
  );
};

export default MainContainer;
