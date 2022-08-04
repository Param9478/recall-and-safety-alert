import "./App.css";
import Components from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Components />
      </BrowserRouter>
    </>
  );
}

export default App;
