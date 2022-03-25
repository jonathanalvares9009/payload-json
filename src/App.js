import React, { useState } from "react";
import utilities from "./utilities";
import "./index.css";


var i =1;
function App() {

  // ATTEMPT AT HAVING COMMON STATE TO RESOLVE BUG WHERE CONVERTED FORMAT IS ONE CHARACTER BEHIND THE PAYLOAD
  // const [state,setState] = useState([localStorage.getItem('payloadData'), localStorage.getItem('converted')])
  const [payload, setPayload] = useState(()=>{
    let data = localStorage.getItem('payloadData')
    return data;
  });
  const [converted, setConverted] = useState(()=>{
    let data = localStorage.getItem('converted')
    return data;
  });
  
  // console.log(payload)

  React.useEffect(()=>{//solves json delay bug 
    let convertedData = utilities.convertToJson(payload)
      // console.log("setting converted"+converted)
      setConverted(convertedData)
      console.log("converteddata: "+convertedData)
      localStorage.setItem('converted',convertedData)
  },[payload])
  
  function handleChange(event){

    // ATTEMPT AT HAVING COMMON STATE TO RESOLVE BUG WHERE CONVERTED FORMAT IS ONE CHARACTER BEHIND THE PAYLOAD
    // let conv = utilities.convertToJson(state[0])
    //   console.log("setting converted1"+conv)
    //   // setState(conv)
    //   console.log("set converted")
    //   localStorage.setItem('converted',conv)

    //   localStorage.setItem('payloadData',event.target.value)
    // setState(prev=>[event.target.value,conv])


    //CODE THAT CONVERTS PAYLOAD TO LIVE JSON
    console.log("payload: "+payload)
      
      // console.log("finished setting converted state"+(++i))
      //modification ends here  
      localStorage.setItem('payloadData',event.target.value)
    setPayload(event.target.value)
    // console.log("finished setting payload state"+(++i))
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
        // value={state[0]} //for common state approach
        value={payload}
      />
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
        // value={state[1]} // for common state approach
        value={converted}
        readOnly
        placeholder="To JSON format"
      />
    </div>
  );
}

export default App;
