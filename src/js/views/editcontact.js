import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/demo.css";
import { element } from "prop-types";


//formulario para crear o actualizar contactos

 export const Edictcontact = () => {
    const navigate = useNavigate();
    
    const {store, actions} = useContext(Context);
  const [contact,setContact] = useState(store.contact)

  console.log(store.contact);
   const handleSubmit = (e) => {
    e.preventDefault()
    actions.editContactsPut(contact,navigate)
    }

    const handleChange = (e) => {
        setContact({...contact,[e.target.name]:e.target.value})
    }

    
    // const updatecontact = store.contacts.find((contact) => contact.id == params.id)
   


    return (
        <form
        onSubmit={handleSubmit}
        >
                
            <div className="container">
                <h1 className="d-flex justify-content-center">Edict contact</h1>
                <div className="mb-3">
                    <h6>Full Name</h6>
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label"></label>
                    <input 
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="name" 
                    className="w-100 htmlForm-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" 
                    value={contact.name}
                    placeholder="Full Name" />
                

                </div>
                <div className="mb-3">
                    <h6>Email</h6>
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label"></label>
                    <input 
                    onChange={(e) => handleChange(e)}
                    type="email"
                    name="email" 
                    className="w-100 htmlForm-control" 
                    id="exampleInputPassword1" 
                    aria-describedby="emailHelp"
                    value={contact.email} 
                    placeholder="Enter email" />
                </div>
                <div className="mb-3">
                    <h6>Phone</h6>
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label"></label>
                    <input 
                    onChange={(e) => handleChange(e)}
                    type="text" 
                    name="phone"
                    className="w-100 htmlForm-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    value={contact.phone}
                    placeholder="Entre phone" />

                </div>
                <div className="mb-3">
                    <h6>Address</h6>
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label"></label>
                    <input
                    onChange={(e) => handleChange(e)}
                    type="text"
                    name="address" 
                    className="w-100 htmlForm-control" 
                    id="exampleInputPassword1" 
                    value={contact.address}
                    placeholder="Enter address" />
                </div>
                <button className="btn btn-primary" type="submit">Editar</button>
                
            </div>

            
            <Link to="/contact">
                <span className="mb-2">Or get back to contacts </span>
            </Link>  
        </form>
    )
};
