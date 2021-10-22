import React from "react";

const Cards = (props)=>{

    return (<>

        <div className="col-lg-4 my-5">
            <div className="card py-3" style={{backgroundColor:"#29B9F2", color:"white"}}>
                <div className="card-body">
                    <div className="card-text text-center py-3">
                        <img src={props.image} alt="img-1" className="py-3"/>
                        <h3 className="card-text py-3">{props.header}</h3>

                        <p className="card-text text-center py-3">
                            {props.content}
                        </p>
                    </div>
                </div>
            </div>
            </div>       

    </>)
}

export default Cards;