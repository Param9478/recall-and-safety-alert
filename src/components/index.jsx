import { useState } from "react";
import Header from "./header";
import MainContainer from "./mainContainer";
import { Routes, Route, useMatch } from "react-router-dom";
import DataDescription from "./mainContainer/dataToDisplay/dataDescription";

const Components = () => {
  const [dataLang, setDataLang] = useState("en");

  const match = useMatch("/data/:id");

  const selectedDataId = match ? Number(match.params.id) : null;
  console.log(selectedDataId);

  return (
    <div className=" mx-auto lg:px-0">
      <Header dataLang={dataLang} setDataLang={setDataLang} />
      <Routes>
        <Route path="/" element={<MainContainer dataLang={dataLang} />} />
        <Route
          path="data/:id"
          element={
            <DataDescription
              selectedDataId={selectedDataId}
              dataLang={dataLang}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default Components;
