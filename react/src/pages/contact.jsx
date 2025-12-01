import React from "react";
import "./contact.css";


function Contact() {



    return (
        <div className="contactContent">
            <div className="contactDiv">
                <h2 className="contactTitle">Contact Us!</h2>
                <h4 className="companyName">Riley Mortgage Consulting Services, LLC</h4>
                <h4>13430 Parker Commons Blvd. Unit 104</h4>
                <h4>Fort Myers, FL 33912</h4>
                <div className="linkedinDiv">
                    <img src="linkedin.png" alt="" className="linkedinLogo" onClick={() => window.open("https://www.linkedin.com/in/scott-riley-61b3925/", "_blank")} />
                    <h4 onClick={() => window.open("https://www.linkedin.com/in/scott-riley-61b3925/", "_blank")} className="linkedinText">Connect on Linkedin!</h4>
                </div>
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