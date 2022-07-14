import React, { useState } from "react";
import Orderbook from "./Books/Orderbook";
import Positionbook from "./Books/Positionbook";
import Spreadbook from "./Books/Spreadbook";
import Tradebook from "./Books/Tradebook";

function Tabs() {
  const [ToggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const getActiveClass = (index, className) =>
    ToggleState === index ? className : "";

  return (
    <>
      <div className="container-fluid">
        <div class="card shadow mb-4">
          <div class="card-body">
            <ul className="tab-list">
              <li
                className={`tabs ${getActiveClass(1, "active-tabs")}`}
                onClick={() => toggleTab(1)}
              >
                Order Book
              </li>
              <li
                className={`tabs ${getActiveClass(2, "active-tabs")}`}
                onClick={() => toggleTab(2)}
              >
                Trade Book
              </li>
              <li
                className={`tabs ${getActiveClass(3, "active-tabs")}`}
                onClick={() => toggleTab(3)}
              >
                Position Book
              </li>
              <li
                className={`tabs ${getActiveClass(4, "active-tabs")}`}
                onClick={() => toggleTab(4)}
              >
                Spread Book
              </li>
            </ul>

            <div className="content-container">
              {
                ("content",
                getActiveClass(1, "active-content") ? <Orderbook /> : null)
              }
              {
                ("content",
                getActiveClass(2, "active-content") ? <Tradebook /> : null)
              }
              {
                ("content",
                getActiveClass(3, "active-content") ? <Positionbook /> : null)
              }
              {
                ("content",
                getActiveClass(4, "active-content") ? <Spreadbook /> : null)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabs;
