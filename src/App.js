import React, { useState } from "react";
import utilities from "./utilities";
import "./index.css";


var i =1;
function App() {


  const [payload, setPayload] = useState(()=>{
    let data = localStorage.getItem('payloadData')
    return data;
  });
  const [converted, setConverted] = useState(()=>{
    let data = localStorage.getItem('converted')
    return data;
  });
  


  React.useEffect(()=>{
    let convertedData = utilities.convertToJson(payload)

      setConverted(convertedData)
      console.log("converteddata: "+convertedData)
      localStorage.setItem('converted',convertedData)
  },[payload])
  
  function handleChange(event){

    //CODE THAT CONVERTS PAYLOAD TO LIVE JSON
    console.log("payload: "+payload)
  
      localStorage.setItem('payloadData',event.target.value)
    setPayload(event.target.value)

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
      {/* prev code */}
      {/* <button
        className="convert hover:bg-yellow rounded-none hover:rounded-none "
        // CODE BEFORE TRYING TO CONVERT PAYLOAD TO JSON LIVE
        // onClick={() => {
        //   let converted = utilities.convertToJson(payload)
        //   setConverted(converted)
        //   localStorage.setItem('converted',converted)

        // }}
      >
        Convert
      </button> */}
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
