import React from 'react'
import img1 from "../Images/slide_img1.jpg";
import img2 from "../Images/slide_img2.jpg";

import img3 from "../Images/slide_img3.jpg";

import img4 from "../Images/slide_img4.jpg";

import img5 from "../Images/image1.png";
import img6 from "../Images/image2.png";
import img7 from "../Images/image3.png";
import "../Styles/Screenshots.css";
const ImageStyling = {
  width:"300px",
  height:"auto"
}
const Screenshots=()=> {
  return (
    <>
      <div className="container-fluid py-5">
   
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    
    <ol className="carousel-indicators mt-5" id="styling_dots" style={{marginBottom:"-50px"}}>
      <li data-target="#myCarousel" data-slide-to="0" className="active" style={{color:"blue",backgroundColor:"green",marginBottom:"-350px"}}></li>
      <li data-target="#myCarousel" data-slide-to="1" style={{color:"blue",backgroundColor:"green",marginBottom:"-350px"}}></li>
      <li data-target="#myCarousel" data-slide-to="2" style={{color:"blue",backgroundColor:"green",marginBottom:"-350px"}}></li>
    </ol>

   
    <div className="carousel-inner">
      <div className="item active">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={img1} alt="Los Angeles" style={{width:"100%;"}}/>
        
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={img2} alt="Los Angeles" style={{width:"100%;"}}/>
        
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={img3} alt="Los Angeles" style={{width:"100%;"}}/>

          </div>
        </div>

      </div>

      <div className="item">
      <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={img4} alt="Los Angeles" style={{width:"100%;"}}/>
        
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={img1} alt="Los Angeles" style={{width:"100%;"}}/>
        
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={img2} alt="Los Angeles" style={{width:"100%;"}}/>

          </div>
        </div>
      </div>
    
      <div className="item">
      <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={img1} alt="Los Angeles" style={{width:"100%;"}}/>
        
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={img2} alt="Los Angeles" style={{width:"100%;"}}/>
        
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
          <img src={img3} alt="Los Angeles" style={{width:"100%;"}}/>

          </div>
        </div>
      </div>
    </div>

    
    
  </div>
</div>
    </>
  )
}

export default Screenshots
