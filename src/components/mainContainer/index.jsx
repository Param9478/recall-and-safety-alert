import { useEffect, useState } from "react";
import DataToDisplay from "./dataToDisplay";
import SearchBox from "./searchbox";
import dataListService from "../services/fetchedDataList";

const MainContainer = () => {
  const [listData, setListData] = useState([]);
  const [category, setCategory] = useState("");

  const [searchedData, setSearchedData] = useState("");

  useEffect(() => {
    dataListService
      .getAll()
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
  }, [category]);

  const filteredData = listData?.filter((data) => {
    if (searchedData === "") {
      return data;
    } else {
      return data.title.toLowerCase().includes(searchedData);
    }
  });
  return (
    <>
      <SearchBox setSearchedData={setSearchedData} setCategory={setCategory} />
      <DataToDisplay listData={filteredData} />
    </>
  );
};

export default MainContainer;
