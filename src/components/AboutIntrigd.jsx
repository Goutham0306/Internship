import React from 'react';
import "../Styles/AboutIntrigd.css";

const AboutIntrigd = (props)=> {
    return (
        <>
           <div className="jumbotron">
               <div className="container-fluid">
                   <div className="row">
                       {/* this is for the left side pics */}
                       <div className="col-lg-6">
                       <img src={props.image_path} alt="Phone_image" className="img-thumbnail leftside"/>
                       </div>
                       <div className="col-lg-6">
                           
                           <h2 className="text">ABOUT INTRIGD</h2>
                           <div className="info">
                               <p className="text">
                               An opinion aggregator for long format content .
                               </p>
                               
                                   <li>
                                   <i className="fa fa-check mr-2"></i>
                                    <span className="text">
                                       presents unbiased content with a vast coverage across industries and daily events
                                       </span>
                                   </li>

                                   <li>
                                       <i className="fa fa-check mr-2"></i>
                                       
                                           <span className="text">
                                           helps in effortless consumption of opinions through meaningful summaries
                                           </span>
                                    
                                   </li>

                                   <li>
                                       <button className="btn btn-md btn-info download mt-5">Download</button>
                                   </li>
                               
                           </div>
                       </div>
                     </div>
                </div>
            </div> 
        </>
    )
}

export default AboutIntrigd
