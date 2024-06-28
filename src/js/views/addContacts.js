import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


//formulario para crear o actualizar contactos

 const AddContact = () => {
    
    const {store, actions} = useContext(Context);
    const [name, setName] = useState ('');
    const [address, setAddress] = useState ('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const contacts=
        {
        name: name,
        address: address,
        phone: phone,
        email:email
    };


   
    

    return (
        <htmlForm
        onSubmit={actions.createContact}
        >
                
            <div className="container">
                <h1 className="d-flex justify-content-center">Add a new contact</h1>
                <div className="mb-3">
                    <h6>Full Name</h6>
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label"></label>
                    <input 
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name" 
                    className="w-100 htmlForm-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" 
                    value={name}
                    placeholder="Full Name" />
                

                </div>
                <div className="mb-3">
                    <h6>Email</h6>
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label"></label>
                    <input 
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email" 
                    className="w-100 htmlForm-control" 
                    id="exampleInputPassword1" 
                    aria-describedby="emailHelp"
                    value={email} 
                    placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <h6>Phone</h6>
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label"></label>
                    <input 
                    onChange={(e) => setPhone(e.target.value)}
                    type="text" 
                    name="phone"
                    className="w-100 htmlForm-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    value={phone}
                    placeholder="Entre phone" />

                </div>
                <div className="mb-3">
                    <h6>Address</h6>
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label"></label>
                    <input
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    name="address" 
                    className="w-100 htmlForm-control" 
                    id="exampleInputPassword1" 
                    value={address}
                    placeholder="Enter address" />
                </div>
                <button className="btn btn-primary" onClick={(e) => createContact}></button>
                
            </div>

            
            {/* <Link to="/contact">
                <span className="mb-2">Or get back to contacts </span>
            </Link>  */}
        </htmlForm>
    )
};
export default AddContact