import { Link } from "react-router-dom";
import { getCategory, getDate, getLogo } from "./getCategory";

const DataList = ({ data }) => {
  return (
    <section aria-labelledby="data-title" className="">
      <div className="bg-white  sm:rounded-lg sm:overflow-hidden">
        <div className="px-4 py-3 sm:px-6">
          <h2 id="data-title" className="text-2xl font-medium">
            Latest recalls and safety alerts
          </h2>
        </div>
        <div className="px-4 py-2 sm:px-6">
          <ul className="space-y-8">
            {data?.map((data) => (
              <li key={data?.recallId}>
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 cover"
                      src={getLogo(data?.category[0])}
                      // src={logo(Number(data?.category[0]))}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="text-2xl">
                      <Link
                        to={`/data/${data.recallId}`}
                        className="font-medium text-[#294161] hover:text-[#7934BB]"
                      >
                        {data?.title}
                      </Link>
                    </div>
                    <div className="mt-1 text-sm text-gray-700">
                      {/* <p>{comment.body}</p> */}
                    </div>
                    <div className="mt-2 text-sm space-x-2">
                      <span className="text-gray-500">
                        <div
                          className="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-2 inline-block"
                          role="alert"
                        >
                          <p className="font-bold text-sm">
                            {getCategory(data?.category[0])}
                          </p>
                        </div>
                      </span>{" "}
                      <span className="text-gray-500">
                        {getCategory(data?.category[0])} professional risk
                        communication | {getDate(data?.date_published)}
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DataList;
