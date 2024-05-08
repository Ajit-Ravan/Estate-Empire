import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Extra from "./Components/Extra/Extra";
import Container from "./Components/Container/Container";
import Residencies from "./Components/Residencies/Residencies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div>
          <Header />
          <Extra />
        </div>
        <Container />
        <Residencies />
      </div>
    </>
  );
}

export default App;
