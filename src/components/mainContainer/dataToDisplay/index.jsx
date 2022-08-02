import { useEffect, useState } from "react";
import dataListService from "../../services/fetchedDataList";
import DataList from "./dataList";
import Pagination from "../pagination";

const DataToDisplay = () => {
  const [listData, setListData] = useState([]);

  const [currentData, setCurrentData] = useState(null);

  const itemsPerPage = 3;

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

  console.log(listData);

  return (
    <div className="max-w-7xl mx-auto">
      <DataList data={currentData} />
      {listData.length ? (
        <Pagination
          setCurrentData={setCurrentData}
          itemsPerPage={itemsPerPage}
          listData={listData}
        />
      ) : null}
    </div>
  );
};

export default DataToDisplay;
