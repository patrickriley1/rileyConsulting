import "./index.css";
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAlt, setIsOpenAlt] = useState(false);

  return (
    <div className="content">
      <div className="headerRibbon">
        <div className="title"><h1>Riley Consulting</h1></div>
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
          <button className="optionButton">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default App;