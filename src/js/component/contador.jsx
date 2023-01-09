
import React from "react";


const Contador = (props) => {
    return (
        <div className="container bg-dark" style={
            {
                height: "150px",
            }
    }>
            <div className="row text-center text-light">
                <h1>Simple Counter</h1>
            </div>
            <div className="row d-flex justify-content-center">
                <div id="cajita1" className="m-2 bg-secondary d-flex justify-content-center align-items-center"
                    style={
                        {
                            height: "50px",
                            width: "60px",
                            color:"white",
                            fontSize:"30px",
                        }
                }>🕥</div>
                <div id="cajita2" className="m-2 bg-secondary d-flex justify-content-center align-items-center"
                    style={
                        {
                            height: "50px",
                            width: "50px",
                            color:"white",
                            fontSize:"30px",
                        }
                }>{props.numero6}</div>
                <div id="cajita3" className="m-2 bg-secondary d-flex justify-content-center align-items-center"
                    style={
                        {
                            height: "50px",
                            width: "50px",
                            color:"white",
                            fontSize:"30px",
                        }
                }>{props.numero5}</div>
                <div id="cajita4" className="m-2 bg-secondary d-flex justify-content-center align-items-center"
                    style={
                        {
                            height: "50px",
                            width: "50px",
                            color:"white",
                            fontSize:"30px",
                        }
                }>{props.numero4}</div>
                <div id="cajita5" className="m-2 bg-secondary d-flex justify-content-center align-items-center"
                    style={
                        {
                            height: "50px",
                            width: "50px",
                            color:"white",
                            fontSize:"30px",
                        }
                }>{props.numero3}</div>
                <div id="cajita6" className="m-2 bg-secondary d-flex justify-content-center align-items-center"
                    style={
                        {
                            height: "50px",
                            width: "50px",
                            color:"white",
                            fontSize:"30px",
                        }
                }>{props.numero2}</div>
                <div id="cajita7" className="m-2 bg-secondary d-flex justify-content-center align-items-center"
                    style={
                        {
                            height: "50px",
                            width: "50px",
                            color:"white",
                            fontSize:"30px",
                        }
                }>{props.numero1}</div>
            </div>
        </div>
    );
};