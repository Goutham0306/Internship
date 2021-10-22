import React from 'react';
import "../Styles/Download.css";
const Download = ()=> {
    return (
        <>
          <div className="container mt-5">
              <div className="row">
                <div className="col-lg-7 ml-auto mr-auto">
                    <h2 className="text text-center my-5">
                        DOWNLOAD OUR APP
                    </h2>

                    <ul id="horizontal_btn">
                    <li>
                            <button className="btn btn-white">
                                <i className="fa fa-apple mr-2"></i>
                                APPLE STORE
                            </button>
                        </li>

                        <li>
                            <button className="btn btn-white">
                                <i className="fa fa-android mr-2"></i>
                                PLAY STORE
                            </button>
                        </li>
                    </ul>

                </div>
              </div>
            </div>  
        </>
    )
}

export default Download
