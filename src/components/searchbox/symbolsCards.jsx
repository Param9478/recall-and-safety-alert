/* This example requires Tailwind CSS v2.0+ */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCar,
  faCartShopping,
  faBriefcaseMedical,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "FOOD",
    icon: faUtensils,
    category: 1,
    href: "#",
    logoColor: "bg-red-600",
    bgColor: "bg-red-400",
    ctColor: "bg-red-100",
    txtColor: "bg-red-800",
  },
  {
    name: "VEHICLE",
    icon: faCar,
    category: 2,
    href: "#",
    logoColor: "bg-purple-600",
    bgColor: "bg-purple-400",
    ctColor: "bg-purple-100",
    txtColor: "bg-purple-800",
  },
  {
    name: "HEALTH",
    icon: faBriefcaseMedical,
    category: 3,
    href: "#",
    logoColor: "bg-green-500",
    bgColor: "bg-green-400",
    ctColor: "bg-green-100",
    txtColor: "bg-green-800",
  },
  {
    name: "CPS",
    icon: faCartShopping,
    category: 4,
    href: "#",
    logoColor: "bg-blue-500",
    bgColor: "bg-blue-400",
    ctColor: "bg-blue-100",
    txtColor: "bg-blue-800",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SymbolCards() {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 my-5 hover:shadow">
      {projects.map((person) => (
        <li
          key={person.name}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg lg:shadow-none lg:p-6 shadow divide-y divide-gray-200"
        >
          <div className=" flex flex-col ">
            <div
              className={classNames(
                person.logoColor,
                "text-white w-20 h-20 m-auto rounded-full flex justify-center items-center  "
              )}
            >
              <FontAwesomeIcon icon={person.icon} size="2xl" />
            </div>
            <h3 className="mt-6 text-gray-900 text-sm font-medium lg:px-3">
              {person.name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              {/* <dd className="mt-3">
                <span
                  className={classNames(
                    person.ctColor,
                    "px-2 py-1 text-xs font-medium rounded-full"
                  )}
                >
                  Category: {person.category}
                </span>
              </dd> */}
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
}
