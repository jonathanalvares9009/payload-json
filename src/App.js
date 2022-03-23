import { useState } from "react";
import utilities from "./utilities";

function App() {
  const [payload, setPayload] = useState("");

  return (
    <div className="App">
      <textarea
        className="App-textarea"
        rows="10"
        cols="100"
        onChange={(event) => setPayload(event.target.value)}
      />
      <button onClick={() => setPayload(utilities.convertToJson(payload))}>
        Convert
      </button>
      <textarea className="App-textarea" rows="10" cols="100" value={payload} />
    </div>
  );
}

export default App;
