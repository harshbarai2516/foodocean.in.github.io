import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import "./Login.css";

export default function Login() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [islogged, setIslogged] = useState(false);

  const responseGoogle = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setImage(response.profileObj.imageUrl);
    setIslogged(true);
  };

  const logout = () => {
    setIslogged(false);
  };

  if (!islogged) {
    return (
    <div>
      <div className="loginbox">
        <div className="logincontainer">
        <img className="logologin" src='https://i.ibb.co/1fk8Qs8/IMG-20201215-181823.jpg' alt=""/>
            <button className="gbtn">
              <GoogleLogin
              clientId="1019840405205-okrb76hihm0ifsfa3psvmlmnhmujli2p.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              className="gbtnm"
              />
            </button>
            <br />
            <button className="cbtn">
              <Link to="/recipe">
                  <h3 className="">Continue as Guest</h3>
              </Link>
            </button>
          </div>
        </div>
      </div>
  );
  }else {
    return (
      <div>
        <div className="profile-card">
          <div className="card-header">
            <div className="pic">
              <img src={image} alt="" />
            </div>
            <div className="name">{name}</div>
            <div className="desc">Welcome to foodocean.in</div>
            <Link to="/recipe">
              <h2 className="contact-btn">Continue</h2>
            </Link>
          </div>
          <div className="card-footer">
            <div className="numbers">
              <div className="item">
                <span>5000+</span> Recipes
              </div>
              <div className="border"></div>
              <div className="item">
                <span>3000+</span> URL's
                <div className="border"></div>
                <div className="item">
                  <span>Coming Soon In Nagpur</span> 
                </div>
                <div className="border"></div>
                <div className="item">
                  <span>
                  <GoogleLogout
                    clientId="1019840405205-okrb76hihm0ifsfa3psvmlmnhmujli2p.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logout}
                  ></GoogleLogout>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
