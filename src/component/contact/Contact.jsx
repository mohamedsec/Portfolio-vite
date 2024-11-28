import React from "react";
import  "./contact.css";

function Contact(){

    return (
        <section className="contact">

             <h1 className='bx bx-message-square-minus'> Contact us</h1>
             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt placeat, odit reprehenderit et eius unde quo perferendis tempora accusantium totam.</p>
       <div className="formaimate">
        <form>
            <div className="one">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="example@gmail.com" required/>
            </div>
            <div className="one">
<label htmlFor="text">Your Comment</label>
<textarea  id="text" required/>
</div>

<button>Submit</button>
        </form>
        <div className="animate"><img src="/user1.png" alt="" /></div>
       </div>
       
        </section>
    )
}


export default Contact;