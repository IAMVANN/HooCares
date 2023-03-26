import ReactDOM from 'react-dom/client';
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

const Kids = () => {
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
      <header className="header2">
        <img
        src= "https://media.tenor.com/QuFZLnGCOLcAAAAd/dinosaur-dinosaur-game.gif"
        alternate="Dinosaur running gif" height="50"/>
        <p className="cheesename">Kids</p>
      </header>
      <main className="bodytext">
        <h1>READY TO GET FIT!!!</h1>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LHjpGCj0PuM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br /><br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/0cddsEaYMqg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br /><br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/oc4QS2USKmk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br /><br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FB5-7tIiX-I"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br /><br/>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/POF8fjvq-Ns"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br /><br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c7v0T91bhhg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br /><br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/imyBFfGiyb0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <br /><br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/R-ZmdHoEjxA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </main>
      <footer className="footer">
            <div className="information">
            Gif can be found {" "}
              <a href="https://media.tenor.com/QuFZLnGCOLcAAAAd/dinosaur-dinosaur-game.gif">here</a>
            </div>
        </footer>
      </>
    );
  };
  
export default Kids;