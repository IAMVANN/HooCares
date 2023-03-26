import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import '../styles.css'
const About = () => {
  document.body.style.backgroundColor = "grey";
  
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
      <div className="about" style={{"backgroundColor": "grey"}}>
          <h1>About</h1>
          <p>
            This project was created by Ivan Zheng, Conroy Lee, Timi Sanni, and Alaa
            Hayajneh for the HooHacks 2023 competition. It was created using HTML,
            CSS, Javascript, and react.js.
          </p>
          <img src={require("../ourphoto.jpg")} style={{"textAlign": "center"}} alt="A photo" />
      </div>
    </>
  );
  };
  
export default About;