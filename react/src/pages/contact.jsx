import React from "react";
import { useState } from "react";
import "./contact.css";


function Contact() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState({ state: "idle", msg: "" });

    function updateField(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ state: "loading", msg: "Sending..." });

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data?.error || "Failed to send");

            setStatus({ state: "success", msg: "Sent! Thank you." });
            setForm({ firstName: "", lastName: "", email: "", message: "" });
        } catch (err) {
            setStatus({ state: "error", msg: err.message || "Error sending message" });
        }
    }


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
                <form className="inputDiv" onSubmit={handleSubmit}>
                    <h3>Leave a Message:</h3>
                    <div>
                        <h4>First Name:</h4>
                        <input type="text" className="contactInput" name="firstName" value={form.firstName} onChange={updateField} />
                    </div>
                    <div>
                        <h4>Last Name:</h4>
                        <input type="text" className="contactInput" name="lastName" value={form.lastName} onChange={updateField} />
                    </div>
                    <div>
                        <h4>Email:</h4>
                        <input type="text" className="contactInput" name="email" value={form.email} onChange={updateField} />
                    </div>
                    <div>
                        <h4>Message:</h4>
                        <textarea className="contactTextArea" name="message" value={form.message} onChange={updateField} />
                    </div>
                    <div>
                        <button className="contactButton" type="submit" disabled={status.state === "loading"}>
                            Submit
                        </button>
                    </div>
                </form>
                {status.state !== "idle" && <p>{status.msg}</p>}

            </div>
        </div>
    )
}

export default Contact;