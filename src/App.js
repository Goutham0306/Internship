import React from "react";
import MainBody from "./components/MainBody";
import Cards from "./components/Cards";
import Form from "./components/Form";
import AboutIntrigd from "./components/AboutIntrigd";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Screenshots from "./components/Screenshots";
//import img1 from "./Images/Card-first-img.png";
import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
const App = ()=>{

  return(<>

  {/* Navigation bar */}
 
    {/* main body comes here */}

    <MainBody/>

    {/* this is AboutIntrigd section */}
    <AboutIntrigd image_path={image4}/>
    {/* cards section */}
    <div className="container-fluid" style={{backgroundColor: "#29B9F2"}}>
      <h3 className="text text-center text-white my-5">OUR APP FEATURES</h3>
      <div className="row" style={{backgroundColor: "#29B9F2"}}>
        <Cards header="Selection" image={image1} content="Cut out the clutter with curated content handpicked especially for you."/>
        <Cards header="Aggregation" image={image2} content="Differing opinions aggregated in an easy-to-consume fashion."/>
        <Cards header="Simplification" image={image3} content="Diverse range of complex topics simplified for you."/>

      </div>
    </div>

    {/* screenshots */}
    <Screenshots/>
    {/* Downloading section */}
   
    {/* this is form section */}

    <Form/>
    {/* footer section comes here */}
    <Footer/>
  </>)
}

export default App;