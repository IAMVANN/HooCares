import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";


const Bmi = () => {
  const [weight, setWeight] = useState(0); 
  const [height, setHeight] = useState(0); 
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0); 
  const [bmi,  setBmi] = useState(0);
  const [bmr, setBmr] = useState(0);
  const generate = () => {
    
    if(gender.length > 0 && weight > 0 && height > 0){
      let h = true; //True is male, false is female (biologically ofc)
      if(gender.charAt(0) == 'F'){
        h = false; 
      }
      setBmi(parseFloat((parseFloat((weight)  / [parseFloat(height)*parseFloat(height)] * 703))).toFixed(2)); 

      if(h){
        setBmr(parseFloat( 66.47 + (13.75 * .4535 * parseFloat(weight)) + (5.003 * 2.54 * parseFloat(height)) - (6.755 * parseFloat(age))).toFixed(2)); 
      } else {
        setBmr(parseFloat(((655.1 + (9.563 * .4535 * parseFloat(weight)) + (1.850 * 2.54 * parseFloat(height)) - (4.676 * parseFloat(age) )))).toFixed(2)); 
      }
    }
  }
    return (
      <>
      <header className="header">
            <img src="https://th.bing.com/th/id/OIP._kf8BfjbuXwsblkQlXkNAgHaHa?pid=ImgDet&rs=1"  alt="Hoohacks logo" height="70"/>
            <div className="paragraphs">
              <p><Link to ="/">Home</Link></p>
              <p><Link to ="/about">About</Link></p>
              <p><Link to ="/kids">Kids</Link></p>
              <p><Link to ="/contact">Contact</Link></p>
            </div>
      </header>
      <div className="bmi-calculator">
        <h1>BMI and DCI Calculator</h1>
        <hr></hr>
        <p>
          Please input the numeric value corresponding to your weight in pounds:
        </p>
        <input type="number" placeHolder="Weight in Pounds" value = {weight} onChange = {(e) => setWeight(e.target.value)}/><br />
        <p>
          Please input the numeric value corresponding to your height in inches:
        </p>
        <input type="number" placeHolder="Height in Inches" value = {height} onChange = {(e) => setHeight(e.target.value)}/><br />
        <p>Please indicate your gender by typing either "M" or "F":</p>
        <input type="text" placeHolder="Sex (M/F)" value = {gender} onChange = {(e) => setGender(e.target.value)}/><br />
        <p>Please provide your current age:</p>
        <input type="text" placeHolder="Age (in Years))" value = {age} onChange = {(e) => setAge(e.target.value)}/><br />
        <hr ></hr>
        <button onClick={() => generate()}>Calculate my BMI</button>
        <p>BMI : {bmi}</p>
        <p>Recommended Amount Of Calories Per Day: {bmr}</p>
      </div>
      <footer className="footer">
            <div className="information">
                BMR calculator - Harris-Benedict formula
            </div>
        </footer>
      </>
    );
  };
  
export default Bmi;