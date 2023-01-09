// import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

// import your own components
import Contador from "./component/contador.jsx";

// render your react application
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

setInterval(function() { // Acá se empieza a contar con el inicio de la función

        console.log(num1 + " " + num2 + " " + num3 + " " + num4 + " " + num5 + " " + num6)
        num1++;
        // Este si anidado lo que permite es ir contando simultáneamente tantas veces lo necesitemos dependiendo del if anterior
        if (num1 > 9) {
            num1 = 0
            num2++
            // Este si depende del anterior y empieza a contar una vez que el si anterior llega a 9
            if (num2 > 9) {
                num2 = 0
                num3++
                if (num3 > 9) {
                    num3 = 0
                    num4++
                    if (num4 > 9) {
                        num4 = 0
                        num5++
                        if (num5 > 9) {
                            num5 = 0
                            num6++
                            if (num6 > 9) {
                                num6 = 0

                            }
                        }
                    }
                }
            }
        }

        // render your react application
        ReactDOM.render( <
            >
            <
            Contador numero1 = {
                num1
            }
            numero2 = {
                num2
            }
            numero3 = {
                num3
            }
            numero4 = {
                num4
            }
            nuemro5 = {
                num5
            }
            numero6 = {
                num6
            }
            /> < /
            > , document.querySelector("#app"));
    },
    1000
)