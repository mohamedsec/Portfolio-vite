import React from "react";
import { useState } from "react";
import  "./header.css";

function Header(){
const [showModal, setshowModal] = useState(false)
    return (
        <header>
            <button className="list bx bx-list-ul" onClick={() => {
                setshowModal(true)
            }}></button>
        <div></div>
       <nav className="navbar">
        <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">BLOGS</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
       </nav>
       <button className="mode bx bxs-sun"></button>



{showModal && (    <div className="menuCont">
       <ul className="menu">
        
            <i className='bx bx-x close' onClick={() => {
            setshowModal(false)
        }}></i>
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">BLOGS</a></li>
            <li><a href="#">SERVICES</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
       </div>)}

        </header>
    )
}


export default Header;