import React from "react";
import "./Readmore.css";

function Readmore() {
  return (
    <div className="readmorecontainer">
         <div className="readmoreh">
             <center>
                <h1>Brought to You By</h1>
             </center>
         </div>
      <div className="readmore">
        <img
          className="readmorep"
          src="https://i.ibb.co/1fk8Qs8/IMG-20201215-181823.jpg"
          alt=""
        />
        <h1>
          founder: <br />
          Harsh Barai <br />
          foodocean.in
        </h1>
      </div>
    </div>
  );
}

export default Readmore;
