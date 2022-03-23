import { useState } from "react";

function App() {
  const [payload, setPayload] = useState("");

  return (
    <div className="App">
      <textarea
        className="App-textarea"
        rows="10"
        cols="50"
        onChange={(event) => setPayload(event.target.value)}
      />
      <button onClick={() => console.log(payload)}>Convert</button>
      <p>{payload}</p>
    </div>
  );
}

export default App;
