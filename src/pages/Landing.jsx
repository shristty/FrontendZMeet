import React from "react";
import {Link} from "react-router-dom";
import "../App.css";
function Landing() {
  return (
    <div className="landingPageContainer">

      <nav>
        <div className="navHeader">
          <h1>Apna Video Call</h1>
        </div>
        <div className="navList">
          <Link to={"/auth"} style={{color:"white"}}>Join for free</Link>
            <Link to={"/auth"} style={{color:"white"}}>Register</Link>
          <div role="button">
                 <Link to={"/auth"} style={{color:"white"}}>Login</Link>
          </div>
        </div>
      </nav>

      <div className="landingMainCharacter">
<div className="left">

<h1><span style={{color:"#ff9839"}}>Connect</span> With Your Loved Ones</h1>
<p>cover a distance by apna video call</p>
<div role="button" style={{fontSize:"1.5rem",marginTop:"2rem"}} >
<Link to={"/auth"} style={{color:"white",backgroundColor:"orange",borderRadius:"20px",padding:".5rem",}} >Get Started</Link>
</div>
</div>

<div className="right">
<img src="./mobile.png" alt="mobile"/>
</div>

      </div>
    </div>
  );
}

export default Landing;
