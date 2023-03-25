import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
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
        <p><Link to ="/bmi">Bmi Calculator</Link></p>
        <p><Link to ="/CalorieTracker">CalorieTracker</Link></p>
        <p><Link to ="/DailyCalorieIntake">Daily Calorie Intake</Link></p>
      </>
    );
  };
  
export default Home;