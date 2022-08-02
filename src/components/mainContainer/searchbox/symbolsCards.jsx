import iconFood from "../../../assets/icon01-food.svg";
import iconTransport from "../../../assets/icon02-transport.svg";
import iconHealth from "../../../assets/icon04-health.svg";
import iconProducts from "../../../assets/icon03-products.svg";

const projects = [
  {
    name: "FOOD",
    icon: iconFood,
    category: 1,
    href: "#",
    logoColor: "bg-red-600",
    bgColor: "bg-red-400",
    ctColor: "bg-red-100",
    txtColor: "bg-red-800",
  },
  {
    name: "VEHICLE",
    icon: iconTransport,
    category: 2,
    href: "#",
    logoColor: "bg-purple-600",
    bgColor: "bg-purple-400",
    ctColor: "bg-purple-100",
    txtColor: "bg-purple-800",
  },
  {
    name: "CPS",
    icon: iconProducts,
    category: 4,
    href: "#",
    logoColor: "bg-blue-500",
    bgColor: "bg-blue-400",
    ctColor: "bg-blue-100",
    txtColor: "bg-blue-800",
  },
  {
    name: "HEALTH",
    icon: iconHealth,
    category: 3,
    href: "#",
    logoColor: "bg-green-500",
    bgColor: "bg-green-400",
    ctColor: "bg-green-100",
    txtColor: "bg-green-800",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SymbolCards() {
  return (
    <ul className="w-52 lg:w-40 grid grid-cols-4 lg:grid-cols-2">
      {projects.map((person) => (
        <li key={person.name}>
          <div
            className={classNames(
              person.logoColor,
              " text-white lg:w-20 lg:h-20 w-12 h-12 lg:mt-0 mt-3 rounded-full"
            )}
          >
            <img className="cover " src={person.icon} alt="food" />
          </div>
        </li>
      ))}
    </ul>
  );
}
