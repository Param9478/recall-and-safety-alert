import { useEffect, useState } from "react";
import fetchedDataListService from "../../../services/fetchedDataList";
import { getCategory, getDate } from "../getCategory";

const DataDescription = ({ selectedDataId, dataLang }) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchedDataListService
      .getById(selectedDataId, dataLang)
      .then((res) => {
        setData(res);
        // console.log(res.category[0]);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }, [dataLang, selectedDataId]);

  const category = data?.category[0];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <section aria-labelledby="data-title" className="">
        <div className="bg-white  sm:rounded-lg sm:overflow-hidden">
          <>
            <div className="pt-7">
              <h2 id="data-title" className="text-3xl font-light text-gray-600">
                {getCategory(category)} product recall
              </h2>
            </div>
            <div className="">
              <ul className="space-y-4 pt-2">
                <li>
                  <div className="flex space-x-3">
                    <div>
                      <div className="text-4xl text-gray-800 font-medium antialiased">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data?.title,
                          }}
                        ></p>
                        <div className="mt-1 w-20 h-2 bg-[#B03C42]" />
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        {/* <p>{comment.body}</p> */}
                      </div>
                      <div className="mt-2 text-sm space-x-2">
                        {/* <span className="text-gray-500">{alert}</span>{" "} */}
                        <span className="font-semibold text-lg text-gray-800">
                          {dataLang === "fr"
                            ? "Dernière mise à jour: "
                            : "Last Updated"}
                        </span>{" "}
                        <span className="text-gray-800 text-lg">
                          {getDate(data?.start_date)}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <ul className="space-y-8 pt-8">
                {data?.panels?.map((panel) => (
                  <li key={panel?.panelName}>
                    <div className=" space-x-3 ">
                      <h2 className="text-3xl font-medium text-gray-800">
                        {panel.title}
                      </h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: panel?.text,
                        }}
                        className="text-lg py-2"
                      ></p>
                      {panel?.data?.map((src) => (
                        <div key={src.fullUrl}>
                          <img src={src.fullUrl} alt="productImg" />
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
          {/* ))} */}
        </div>
      </section>
    </div>
  );
};

export default DataDescription;
