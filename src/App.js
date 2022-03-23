import { useState } from "react";
import utilities from "./utilities";
import "./index.css";

function App() {
  const [payload, setPayload] = useState("");
  const [converted, setConverted] = useState("");

  return (
    <div className="App bg-teal">
      <h1 className="header">Convert payload data to JSON format</h1>
      <textarea
        className="from resize-none rounded-md"
        rows="10"
        cols="100"
        onChange={(event) => setPayload(event.target.value)}
      />
      <button
        className="convert hover:bg-yellow rounded-none hover:rounded-none"
        onClick={() => setConverted(utilities.convertToJson(payload))}
      >
        Convert
      </button>
      <textarea
        className="to resize-none rounded-md"
        rows="10"
        cols="100"
        value={converted}
        readOnly
      />
    </div>
  );
}

export default App;
