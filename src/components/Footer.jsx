import React from 'react';
import "../Styles/Footer.css";

const Footer = ()=> {
    return (
        <>
         <div className="container-fluid bg-dark text-white">
             <div className="row">
                 <div className="col-lg-11 my-5" id="footersection">
                        <ul id="footer_links">
                            <li>
                            Copyright © Intrigd.co All Rights Reserved
                            </li>
                            <li>
                            Terms & Conditions
                            </li>
                            <li>
                            Privacy and Policy
                             </li>

                             {/* footer icons */}
                             <li id="footer_icons">
                                 <i className="fa fa-facebook"></i>
                                 <i className="fa fa-twitter"></i>
                                 <i className="fa fa-linkedin"></i>
                                 <i className="fa fa-instagram"></i>
                             </li>
                        </ul>
                </div>
             </div>
        </div>   
        </>
    )
}

export default Footer
