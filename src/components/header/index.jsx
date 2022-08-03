import Logo from "../../assets/gov-logo.png";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between h-16 px-6">
          <div className="flex">
            <div className="flex items-center">
              <img
                className="block lg:hidden h-6 w-auto"
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
              className="block lg:hidden items-center px-2 sm:px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-0"
            >
              FR
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full title-bg p-5 mt-3 h-24">
        <div className="flex-1 min-w-0 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl leading-7 text-white sm:truncate">
            Recalls and Safety Alert
          </h2>
        </div>
      </div>
    </>
  );
}
