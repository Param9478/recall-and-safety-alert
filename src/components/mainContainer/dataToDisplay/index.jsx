import { useState } from "react";

import DataList from "./dataList";
import Pagination from "../pagination";

const DataToDisplay = ({ listData }) => {
  const [currentData, setCurrentData] = useState(null);

  return (
    <div className="max-w-7xl mx-auto">
      <DataList data={currentData} />

      <div className="flex justify-center mt-5">
        <Pagination
          setCurrentData={setCurrentData}
          itemsPerPage={4}
          listData={listData}
        />
      </div>
    </div>
  );
};

export default DataToDisplay;
