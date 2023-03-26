import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import '../styles.css'
const Home = () => {
    return (
      <>
      <body>
        <header class="header">
            <img src="https://th.bing.com/th/id/OIP._kf8BfjbuXwsblkQlXkNAgHaHa?pid=ImgDet&rs=1"  alt="Hoohacks logo" height="70"/>
            <div class="paragraphs">
              <p><Link to ="/">Home</Link></p>
              <p><Link to ="/about">about</Link></p>
              <p><Link to ="/kids">kids</Link></p>
              <p><Link to ="/contact">Contact</Link></p>
            </div>
        </header>
        <main>
            <div class="intro">
                <h1>HooCares</h1>
                <p>Our all-in-one website offers tools for calculating BMI, determining daily calorie intake, and tracking calorie consumption to help you achieve your health and fitness goals.</p>
            </div>

            <hr></hr>

            <div class="apps">
            
                <div class="tools">
                    <i class="bmi-image"></i>
                    <p class="tools-header">BMI and DCI Calculator</p>
                    <p class="tools-text">
                      Track and improve your health effortlessly with this application that accurately computes your Body Mass Index (BMI) and daily calorie intake based on your height and weight.
                    </p>
                    <Link to ="/bmi"><button>Begin</button></Link>
                </div>
            
                <div class="tools">
                    <i class="dci-image"></i>
                    <p class="tools-header">Calorie Tracker</p>
                    <p class="tools-text">
                        This application takes in information about a user's daily dietary habits and provides a comprehensive analysis of their adherence to the recommended 2000 daily calorie intake.
                    </p>
                    <Link to ="/CalorieTracker"><button>Begin</button></Link>
                </div>
                
            </div>
            <hr></hr>
        </main>
        <footer class="footer">
            <div class="information">
                Created by: Ivan Zheng, Timi Sanni, Alaa Hayajneh, and Conroy Lee
            </div>
        </footer>
    </body>
        <p><Link to ="/bmi">Bmi Calculator</Link></p>
        <p><Link to ="/CalorieTracker">CalorieTracker</Link></p>
        <p><Link to ="/DailyCalorieIntake">Daily Calorie Intake</Link></p>
      </>
    );
  };
  
export default Home;