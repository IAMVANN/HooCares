import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const CalorieTracker = () => {
  const [item, setItem] = useState(""); 
  const [list, setList] = useState([]); 
  const [calories, setCalories] = useState(0); 
  const [id, setId] = useState(0); 
  const [totalCals, settotalCals] = useState(0); 
  const create = () => {
    if(item != null && item.length > 0 && calories > 0) {  
      const listItem = {
        id : id, 
        calories : calories,
        item : item,
      }; 
      setList([...list, listItem]);
      setId(id + 1); 
      let k = calories; 
      settotalCals(parseInt(totalCals) + parseInt(calories) );
      setItem("");
      setCalories(0);
      
    }
 

    
  }
    const remove = (e ) => { 
    setList(list.filter(listItem => e.id != listItem.id)); 
    settotalCals(parseInt(totalCals) - parseInt(e.calories) );
    
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
      <div className="calorie-monitor">
        <h1>Calorie Tracker</h1>
        <hr />
        <p>Food Name</p>
        
        <input type = "text" placeholder="Pizza" value = {item} onChange = {(e) => setItem(e.target.value)} ></input>
        <p>Calories</p>
        <input type = "text" value = {calories} onChange = {(e) => setCalories(e.target.value)}></input>
        <br /><br />
        <button onClick={() => create()}>Add</button>
        <p>Total Calories : {totalCals}</p>
        <hr />
      </div>

        <ul className="calorie-tracker">
          {
          list.map((listItem) => (
            <li key = {listItem.id}>
              Food: {listItem.item}{', '}
              Calories: {listItem.calories}{' '}

                <button className="specialbutton" onClick = {() => remove(listItem)}>X</button>
            </li>
          ))
          }
    </ul>
      </>

    );
  };
  
export default CalorieTracker;