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
        <header class="header">
          <p><Link to ="/">HooHacks 2023</Link></p>
          <nav class="nav.items">
            <p><Link to ="/">Home</Link></p>
            <p><Link to ="/about">about</Link></p>
            <p><Link to ="/kids">kids</Link></p>
            <p><Link to ="/contact">Contact</Link></p>
          </nav>
        </header>
        <p>CalorieTracker</p>
        <input type = "text" placeholder="Pizza" value = {item} onChange = {(e) => setItem(e.target.value)} ></input>
        <input type = "text" value = {calories} onChange = {(e) => setCalories(e.target.value)}></input>
        <button onClick={() => create()}>add</button>
        <p>Total Calories : {totalCals} and {id}</p>

        <ul>
      {
        list.map((listItem) => (
          <li key = {listItem.id}>
            {listItem.item}
            {listItem.calories}
            <button onClick = {() => remove(listItem)}>X</button>
          </li>
        ))
      }
    </ul>
      </>

    );
  };
  
export default CalorieTracker;