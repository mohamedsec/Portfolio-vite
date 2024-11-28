import React from "react";
import  "./footer.css";

function Footer(){

    return (
        <footer>

       <nav className="navbar">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">BLOGS</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
       </nav>

       <div className="term"><p>Designing and Developed by Mohamed Osman @copyright 2024 last November</p></div>
       <div></div>
        </footer>
    )
}


export default Footer;