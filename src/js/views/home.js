import React, { useContext, useEffect } from "react";

import "../../styles/home.css";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Home = () => {
const{store, actions} = useContext(Context);
useEffect(() =>{
actions.userCreate();
},[])	
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-space-between mb-3 justify-content-center">
                <div className="ml-auto">
                    <Link to="/contact">
                        <button className="btn btn-outline-warning">Welcome to contacts</button>
                    </Link>
                </div>
                <div className="ml-auto ms-4">
                    <Link to="/addcontact">
                        <button className="btn btn-outline-warning">Add new contact</button>
                    </Link>
                </div>
            </div>
            <div className="photo mt-5 d-flex justify-content-center border-warning">
                <img src="https://media.licdn.com/dms/image/D4D16AQG2oCNLfnIWeA/profile-displaybackgroundimage-shrink_350_1400/0/1715270377129?e=1724889600&v=beta&t=kiOfTkRHle-dotEChrWWMiMJ_laITCa-NQq-kP2FG9g" alt="Profile background"></img>
                <a  href="https://www.linkedin.com/in/alba-rodríguez-594910198"></a>
            </div>
        </div>
    );
};







