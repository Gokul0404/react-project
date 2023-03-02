import Navbar from "./navbar";
import Footer from "./footer";
import data from "./content";
import TypeWriter from "./typing";
import TypeWriter1 from "./typing1";
import TypeWriter2 from "./typing2";
import App1 from "./slide";
import React from "react";





function Home() {
  return (
    <>
     
      <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>
                 <li></li>

            </ul>

            <Navbar />


            <div className="About">

<div className="home_futher">
<div className="home-contents">
  <h1>Welcome</h1>

  {data.map((data) => {
    return (
      <p>
        {data.message}
        <br></br>
        {data.message1}{" "}
      </p>
    );
  })}
</div>
<div className="img">


  <img
    src={require("file:///C:/Users/Dell/sample/src/component/img/col.png")}
    alt="React Logo"



  />
</div>


</div>
<div className="card">
  <div
    className="card1"
    onClick={() => {
      TypeWriter1();
    }}
  >
    <div className="card0">
      <h1>HTML</h1>
      <p id="demo"></p>
    </div>
  </div>

  <br></br>

  <div
    className="card1"
    onClick={() => {
      TypeWriter();
    }}
  >
    <div className="card0">
      {" "}
      <h1>CSS</h1> <p id="demo1"></p>
    </div>
  </div>

  <br></br>

  <div
    className="card1"
    onClick={() => {
      TypeWriter2();
    }}
  >
    <div className="card0">
      {" "}
      <h1>JS</h1> <p id="demo2"></p>
    </div>
  </div>
</div>


<App1/>
<Footer/>




</div>
    


     

   
    </>
  );
}

export default Home;
