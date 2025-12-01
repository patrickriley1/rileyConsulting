import "./index.css";
import "./App.css";
import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/contact.jsx";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlt, setIsOpenAlt] = useState(false);

  return (
    <div className="content">
      <div className="headerRibbon">
        <div className="title"><Link to="/" className="titleLink">Riley Consulting</Link></div>
        <div className="verticalLine"></div>
        <div className="headerItem"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}>
            <button className="optionButton">Services</button>
            {isOpen && (
              <ul className="dropdownMenu">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            )}
        </div>
        <div className="headerItem"
          onMouseEnter={() => setIsOpenAlt(true)}
          onMouseLeave={() => setIsOpenAlt(false)}>
            <button className="optionButton">Consulting</button>
            {isOpenAlt && (
              <ul className="dropdownMenu">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
              </ul>
            )}
        </div>
        <div className="headerItem">
          <Link to="/contact" className="optionButton">Contact</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<div>Services Page</div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {

  return (
    <div className="homeContent">
      <h2 className="homeTitle">Which Services Can we Help You With?</h2>
      <div className="homeOptions">
        <div className="homeOption">
          <h3>Service 1</h3>
        </div>
        <div className="homeOption">
          <h3>Service 2</h3>
        </div>
        <div className="homeOption">
          <h3>Service 3</h3>
        </div>
        <div className="homeOption">
          <h3>Service 4</h3>
        </div>
      </div>
      <div className="homeOptions">
        <div className="homeOption">
          <h3>Service 5</h3>
        </div>
        <div className="homeOption">
          <h3>Service 6</h3>
        </div>
        <div className="homeOption">
          <h3>Service 7</h3>
        </div>
        <div className="homeOption">
          <h3>Service 8</h3>
        </div>
      </div>
      <div className="homeOptions">
        <div className="homeOption">
          <h3>Service 9</h3>
        </div>
        <div className="homeOption">
          <h3>Service 10</h3>
        </div>
        <div className="homeOption">
          <h3>Service 11</h3>
        </div>
        <div className="homeOption">
          <h3>Service 12</h3>
        </div>
      </div>

    </div>
  );
}

export default App;