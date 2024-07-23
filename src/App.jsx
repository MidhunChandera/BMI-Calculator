
import { useState } from 'react'
import './App.css'


function App() {

const [height,setheight]=useState("")
const [Weight,setweight]=useState("")
const[bmi,setbmi]=useState(null)
const[bmistatus,setbmistatus]=useState("")

const calculatebmi=()=>{
  if(height&&Weight){
    const heightinmeters=height/100;
    const bmivalue=Weight/(heightinmeters*heightinmeters);
    setbmi(bmivalue.toFixed(2));
    if(bmivalue<18.5){
      setbmistatus("underweight");
    }else if(bmivalue>=18.5 && bmivalue<=24.9){
      setbmistatus("Normalweight");
    }else if(bmivalue>=25 && bmivalue<=29.9){
      setbmistatus("overweight");
    }
    else{
      setbmistatus("obese")
    }
  }else{
    setbmi(null);
    setbmistatus("");
  }
}
const reset=()=>{
setheight(" ")
setweight("")
}
return (
    <>
<div className="bmicalculator">
  <div className="box">
    <div className="data">
      <h1 className='text-center mb-4 text-primary'>BMI CALCULATOR</h1>
      <div className="inputcontainer">
        <label htmlFor="">Height in cm</label>
        <input type="text" value={height} id='height' onChange={(e)=>setheight(e.target.value)} />
        <label htmlFor="">Weight in kg</label>
        <input type="text" value={Weight} id='weight' onChange={(e)=>setweight(e.target.value)}  />
      </div>
    <div className='d-flex mt-3 '> 
       <button onClick={calculatebmi} className='btn1'>Calculate</button>
      <button className='btn2' onClick={reset}>Reset</button></div>
   {bmi!==null&&(   <div className="result">
        <p className='text-center mt-3 fs-5'>Your BMI IS:{bmi}</p>
        <p className='text-center fs-3'>status:{bmistatus}</p>
      </div>)}

   
    </div>
  </div>
</div>
   
    </>
  )
}

export default App
