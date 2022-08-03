import iconFood from "../../../assets/list-icon-food.svg";
import iconTransport from "../../../assets/icon02-transport.svg";
import iconHealth from "../../../assets/list-icon-health.svg";
import iconProducts from "../../../assets/list-icon-product.svg";

const alert = (
  <div
    className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-2 inline-block"
    role="alert"
  >
    <p className="font-bold text-sm">Warning</p>
  </div>
);

const DataList = ({ data }) => {
  const getLogo = (id) => {
    if (id === "1") {
      return iconFood;
    } else if (id === "2") {
      return iconTransport;
    } else if (id === "3") {
      return iconHealth;
    } else if (id === "4") {
      return iconProducts;
    }
  };

  return (
    <section aria-labelledby="data-title" className="">
      <div className="bg-white  sm:rounded-lg sm:overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 id="data-title" className="text-2xl font-medium">
            Latest recalls and safety alerts
          </h2>
        </div>
        <div className="px-4 py-6 sm:px-6">
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
                      <a
                        href="/"
                        className="font-medium text-[#294161] hover:text-[#7934BB]"
                      >
                        {data?.title}
                      </a>
                    </div>
                    <div className="mt-1 text-sm text-gray-700">
                      {/* <p>{comment.body}</p> */}
                    </div>
                    <div className="mt-2 text-sm space-x-2">
                      <span className="text-gray-500">{alert}</span>{" "}
                      <span className="text-gray-500">
                        Health professional risk communication | 2022-07-29
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
