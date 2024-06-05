import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Extra from "./Components/Extra/Extra";
import Residencies from "./Components/Residencies/Residencies";
import Companies from "./Components/Companies/Companies";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div>
          <Header />
          <Extra />
        </div>
        <Companies />
        <Residencies />
        <Value />
        <Contact />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
