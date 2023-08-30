import React, {useState} from "react";
import "./styles.css"

function App() {

const [minVal,setMinVal]=useState();
const [maxVal,setMaxVal]=useState();
const [randomnumber,setRandomnumber]=useState();
const giveRandomNumber=()=>{
  setRandomnumber(Math.floor(Math.random()*(maxVal-minVal+1)+minVal))
}

  return (
    <div className="App">
     <div className="container">
      <div className="randomnumber">
      <p>Rastgele Sayı:<span>{randomnumber}</span></p>
      </div>
      <div className="numcontainer">
        <div>
          <p>Minimum</p>
          <input type="text"
           value={minVal}
           onChange={e=>setMinVal(+e.target.value)}/>
          
        </div>
        <div>
          <p>Maximum</p>
          <input type="text"
           value={maxVal}
           onChange={e=>setMaxVal(+e.target.value)}/>
        </div>
      </div>
      <button onClick={giveRandomNumber}>Rastgele sayı getir</button>
     </div>
    </div>
  );
}

export default App;
