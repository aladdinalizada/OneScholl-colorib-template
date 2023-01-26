import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="row">
          <div className="logo">
            <Link>OneSchool</Link>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Courses</Link>
              </li>
              <li>
                <Link>Programs</Link>
              </li>
              <li>
                <Link>Teachers</Link>
              </li>
            </ul>
          </div>
          <div className="contactUsbtn">
            <button>
              <Link>Contact us</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
