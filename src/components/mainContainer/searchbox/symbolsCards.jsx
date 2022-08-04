import iconFood from "../../../assets/icon01-food.svg";
import iconTransport from "../../../assets/icon02-transport.svg";
import iconHealth from "../../../assets/icon04-health.svg";
import iconProducts from "../../../assets/icon03-products.svg";

const projects = [
  {
    name: "FOOD",
    icon: iconFood,
    category: 1,
    logoColor: "bg-red-600",
  },
  {
    name: "VEHICLE",
    icon: iconTransport,
    category: 2,
    logoColor: "bg-purple-600",
  },
  {
    name: "CPS",
    icon: iconProducts,
    category: 4,
    logoColor: "bg-blue-500",
  },
  {
    name: "HEALTH",
    icon: iconHealth,
    category: 3,
    logoColor: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SymbolCards({ setCategory }) {
  return (
    <ul className="w-52 lg:w-40 grid grid-cols-4 lg:grid-cols-2">
      {projects.map((data) => (
        <li key={data.name}>
          <div
            className={classNames(
              data.logoColor,
              " text-white lg:w-20 lg:h-20 w-12 h-12 lg:mt-0 sm:mt-0 rounded-full"
            )}
          >
            <button type="button" onClick={() => setCategory(data.name)}>
              <img className="cover " src={data.icon} alt="food" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
