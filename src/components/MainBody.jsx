import React from 'react';
import "../Styles/MainBody.css";
import Navbar from './Navbar';

import image5 from "../Images/inner-1.png";
const MainBody = ()=> {
    return (
        <>

          <div className="container-fluid body py-5">
              <Navbar/>
              <div className="row px-3">
                  <div className="col-lg-7">
                      <div className="left_side_info text text-start ml-auto">
                      <h1 className="text ml-5">
                      Intrigd The Ultimate<br/> Reading App.
                      </h1>
                    </div>

                      <div id="btn_flex">
                          <button className="btn btn-md btn-primary">
                          <i className="fa fa-apple mr-3"></i> <span className="text">
                                   APPLE STORE
                              </span>
                          </button>

                          <button className="btn btn-md btn-primary">
                          <i className="fa fa-android mr-3"></i> <span className="text">
                                    PLAY STORE
                              </span>
                          </button>
                      </div>
                      </div>

                    {/* right side mobile image */}
                    <div className="col-lg-4 ml-auto mr-auto">
                        <img src={image5} alt="mobile" className="img img-fluid mobile_image my-5"/>
                    </div>
               </div>
            </div>  
        </>
    )
}

export default MainBody
