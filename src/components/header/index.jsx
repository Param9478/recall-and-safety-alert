import Logo from "../../assets/gov-logo.png";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-4 w-auto"
                src={Logo}
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src={Logo}
                alt="Workflow"
              />
            </div>
          </div>
          <div className="mt-4 flex md:ml-4">
            <button
              type="button"
              className="hidden lg:block items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-0"
            >
              Français
            </button>
            <button
              type="button"
              className="block lg:hidden items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-0"
            >
              FR
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-between my-5 title-bg p-5 rounded-xl">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl  leading-7 text-white sm:truncate ">
            Recall and Safety Alert
          </h2>
        </div>
      </div>
    </>
  );
}
