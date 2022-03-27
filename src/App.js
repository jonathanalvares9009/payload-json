import React, { useState } from "react";
import utilities from "./utilities";
import "./index.css";

function App() {
  const [payload, setPayload] = useState(() => {
    let data = "";
    if (localStorage.getItem("payloadData")) {
      data = localStorage.getItem("payloadData");
    } else {
      localStorage.setItem("payloadData", "");
    }
    return data;
  });

  const [converted, setConverted] = useState(() => {
    let data = "";
    if (localStorage.getItem("convertedData")) {
      data = localStorage.getItem("convertedData");
    } else {
      localStorage.setItem("convertedData", "");
    }
    return data;
  });

  React.useEffect(() => {
    let convertedData = utilities.convertToJson(payload);
    setConverted(convertedData);
    localStorage.setItem("convertedData", convertedData);
  }, [payload]);

  function handleChange(event) {
    localStorage.setItem("payloadData", event.target.value);
    setPayload(event.target.value);
  }

  return (
    <div className="App bg-teal">
      <h1 className="header">Convert payload data to JSON format</h1>
      <textarea
        className="from resize-none rounded-md"
        rows="10"
        cols="100"
        onChange={handleChange}
        placeholder="Enter Payload"
        value={payload}
      />

      <textarea
        className="to resize-none rounded-md"
        rows="10"
        cols="100"
        value={converted}
        readOnly
        placeholder="To JSON format"
      />
    </div>
  );
}

export default App;
