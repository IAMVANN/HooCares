import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";

const Contact = () => {
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
      <div class="contact">
        <h1>Contact information:</h1>
        <hr></hr>
        <p>Timi Sanni: timisanni10@gmail.com</p>
        <p>Alaa Hayajneh: alaahayajneh1000@gmail.com</p>
        <p>Conroy Lee: clee274@gmail.com</p>
        <p>Ivan Zheng: izheng012@gmail.com</p>
        <p></p>
      </div>
    </>
  );
  };
  
export default Contact;