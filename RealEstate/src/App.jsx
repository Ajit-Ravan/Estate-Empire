import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Extra from "./Components/Extra/Extra";
import Residencies from "./Components/Residencies/Residencies";
import Companies from "./Components/Companies/Companies";

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
      </div>
    </>
  );
}

export default App;
