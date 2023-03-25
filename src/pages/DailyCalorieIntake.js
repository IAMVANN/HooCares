import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";

const DailyCalorieIntake = () => {
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
      <p>DailyCalorieIntake</p>
    </>
  );
  };
  
export default DailyCalorieIntake;