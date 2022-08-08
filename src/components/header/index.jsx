import { Link } from "react-router-dom";
import Logo from "../../assets/gov-logo.png";
import "./header.css";

export default function Header({ dataLang, setDataLang }) {
  return (
    <>
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between h-16 px-6">
          <div className="flex">
            <div className="flex items-center">
              <Link to="/">
                <img
                  className="block lg:hidden h-6 w-auto"
                  src={Logo}
                  alt="Workflow"
                />
              </Link>
              <Link to="/">
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={Logo}
                  alt="Workflow"
                />
              </Link>
            </div>
          </div>
          <div className="mt-4 flex md:ml-4">
            <button
              type="button"
              onClick={() => setDataLang(dataLang === "en" ? "fr" : "en")}
              className="hidden lg:block items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-0"
            >
              {dataLang === "en" ? "Français" : "English"}
            </button>
            <button
              type="button"
              onClick={() => setDataLang(dataLang === "en" ? "fr" : "en")}
              className="block lg:hidden items-center px-2 sm:px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-0"
            >
              {dataLang === "en" ? "FR" : "EN"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full title-bg mt-3 h-24">
        <div className="flex-1 min-w-0 max-w-7xl mx-auto px-6">
          <h2 className="text-2xl leading-7 text-white sm:truncate">
            {dataLang === "en"
              ? "Recalls and Safety Alert"
              : "Rappels et avis de sécurité"}
          </h2>
        </div>
      </div>
    </>
  );
}
