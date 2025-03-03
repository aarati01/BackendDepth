import { useState } from "react";
import "./App.css";

function App() {
  const [jokes, setjokes] = useState([]);

  return (
    <>
      <p>WElcome to the full-stack Development.</p>
      <p>JOKES:{jokes.length}</p>
    </>
  );
}

export default App;
