import React from "react";
import "./contact.css";


function Contact() {



    return (
        <div className="contactContent">
            <div className="contactDiv">
                <h2 className="contactTitle">Contact Us!</h2>
                <div className="inputDiv">
                    <div>
                        <h4>First Name:</h4>
                        <input type="text" className="contactInput" />
                    </div>
                    <div>
                        <h4>Last Name:</h4>
                        <input type="text" className="contactInput" />
                    </div>
                    <div>
                        <h4>Email:</h4>
                        <input type="text" className="contactInput" />
                    </div>
                    <div>
                        <h4>Message:</h4>
                        <textarea className="contactTextArea" />
                    </div>
                    <div>
                        <button className="contactButton">Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;