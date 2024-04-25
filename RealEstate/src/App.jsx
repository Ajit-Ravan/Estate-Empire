import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Extra from "./Components/Extra/Extra";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Extra />
    </>
  );
}

export default App;
