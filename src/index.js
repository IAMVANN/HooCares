import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Bmi from "./pages/bmi"
import CalorieTracker from "./pages/CalorieTracker" 
import Contact from "./pages/contact"
import DailyCalorieIntake from "./pages/DailyCalorieIntake"
import Kids from "./pages/kids"
import Home from "./pages/home"
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function App(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="kids" element={<Kids />} />
                    <Route path="bmi" element={<Bmi />} />
                    <Route path="CalorieTracker" element={<CalorieTracker />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="DailyCalorieIntake" element={<DailyCalorieIntake />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
