import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


//formulario para crear o actualizar contactos

export const AddContact = () => {
    const {store, actions} = useContext(Context);
    const [contacts, setContacts] = useState(
        {
        name: "",
        address: "",
        phone: "",
        mail:""
    });


   
    

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
                    onChange={(e) => setContacts(e.target.value)}
                    type="text"
                    name="name" 
                    className="w-100 htmlForm-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" 
                    value={contacts.name}
                    placeholder="Full Name" />
                

                </div>
                <div className="mb-3">
                    <h6>Email</h6>
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label"></label>
                    <input 
                    onChange={store.contact.email}
                    type="email"
                    name="email" 
                    className="w-100 htmlForm-control" 
                    id="exampleInputPassword1" 
                    aria-describedby="emailHelp"
                    value={name.mail} 
                    placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <h6>Phone</h6>
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label"></label>
                    <input 
                    onChange={store.contact.phone}
                    type="text" 
                    name="phone"
                    className="w-100 htmlForm-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    value={name.phone}
                    placeholder="Entre phone" />

                </div>
                <div className="mb-3">
                    <h6>Address</h6>
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label"></label>
                    <input
                    onChange={store.contact.address}
                    type="text"
                    name="address" 
                    className="w-100 htmlForm-control" 
                    id="exampleInputPassword1" 
                    value={name.address}
                    placeholder="Enter address" />
                </div>
                {contacts.map(contact =>{
                     return  <button type="submit" className="btn btn-outline-info w-100 lg" onClick={contact}>Submit</button> 
                                })}
            </div>

            //link para volver a agenda (contact)
            <Link to="/Contact">
                <span className="mb-2">Or get back to contacts </span>
            </Link> 
        </htmlForm>
    )
};
