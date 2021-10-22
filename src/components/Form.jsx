import React from 'react';
import Download from './Download';
import "../Styles/Forms.css";
const Form = ()=> {
    return (
        <>
        <div className="card" style={{background:"rgba(0, 0, 0, 0) linear-gradient(to bottom, #29B9F2 0%, #c1eafa 100%) repeat scroll 0 0"}}>
            <div className="card-body">
                <Download/>
          <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            {/* form left side */}
                        <div className="col-lg-5">
                            <h3 className="text text-start ml-5">
                                CONTACT US
                            </h3>
                            <div className="d-flex align-items-start flex-column form-icons">
                            <ul>
                                <li>
                                    <i className="fa fa-phone"></i>
                                    <span className="pl-3" id="contact_info">+91-8025043077</span>
                                </li>
                                <li>
                                    <i className="fa fa-envelope"></i>
                                    <span className="pl-3" id="contact_info">info@intrigd.co</span>
                                </li>
                            </ul>
                            </div>
                        </div>


                        {/* form input fields */}

                        <div className="col-lg-7 py-5">
                        <div className="form-group my-3">
                            <div className="col-lg-11">
                                <input type="text" className="form-control" placeholder="Name"/>
                            </div>
                        </div>
                       
                        <div className="form-group my-3">
                            <div className="col-lg-11">
                                <input type="text" className="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group my-3">
                            <div className="col-lg-11">
                                <input type="text" className="form-control" placeholder="Subject"/>
                            </div>
                        </div>
                        <div className="form-group my-3">
                            <div className="col-lg-11">
                                <textarea name="msg" id="" cols="30" rows="4" className="form-control" placeholder="Message"></textarea>
                            </div>
                        </div>

                        <button className="btn btn-dark btn-md mt-3">Submit</button>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            </div>  
        </>
    )
}

export default Form
