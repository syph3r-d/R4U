
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/Home";
import Articles from "./components/articles/Articles";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Articles />
    </Fragment>
  );
}

export default App;
