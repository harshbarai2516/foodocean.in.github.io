import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';
import Test from "./Test.js";


function About() {
    return (
        <div>
            <Test />
            <div className="wrapper">
                <center>
                    <h1>About US</h1>
                    <p>This is the Beta version of the upcoming venture in Nagpur. The soul purpose of creating this prototype is to cover the initial stages of its idea for most important early users of the website.  </p>
                </center>
                    <Link to="/readmore">
                      <button className="btn">Read More</button>
                    </Link>
            </div>
        </div>
    )
}

export default About
