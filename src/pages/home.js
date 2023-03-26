import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import '../styles.css'
const Home = () => {
  document.body.style.backgroundColor = "white";

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
        <main>
            <div className="intro">
                <h1>HooCares</h1>
                <p>Our all-in-one website offers tools for calculating BMI, determining daily calorie intake, and tracking calorie consumption to help you achieve your health and fitness goals.</p>
            </div>

            <hr></hr>

            <div className="apps">
            
                <div className="tools">
                    <i className="bmi-image"></i>
                    <p className="tools-header">BMI and BMR Calculator</p>
                    <p className="tools-text">
                      Track and improve your health effortlessly with this application that accurately computes your Body Mass Index (BMI) and suggested daily calorie intake (BMR) based on your height, weight, and age.
                    </p>
                    <Link to ="/bmi"><button>Begin</button></Link>
                </div>
            
                <div className="tools">
                    <i className="dci-image"></i>
                    <p className="tools-header">Calorie Tracker</p>
                    <p className="tools-text">
                        This application takes in information about a user's daily dietary habits and tracks the amount of calories consumed. 
                    </p>
                    <Link to ="/CalorieTracker"><button>Begin</button></Link>
                </div>
                
            </div>
            <hr></hr>
        </main>
        <footer className="footer">
            <div className="information">
                Created by: Ivan Zheng, Timi Sanni, Alaa Hayajneh, and Conroy Lee
            </div>
            <div className="information">
            Image can be found {" "}
              <a href="https://th.bing.com/th/id/OIP._kf8BfjbuXwsblkQlXkNAgHaHa?pid=ImgDet&rs=1">here</a>
            </div>
        </footer>
      </>
    );
  };
  
export default Home;