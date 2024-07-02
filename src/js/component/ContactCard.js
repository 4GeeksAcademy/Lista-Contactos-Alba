import React, { useState } from "react";
import { Link } from "react-router-dom";



//muestra solo un contacto

export const ContactCard = ({name,address,phone,email,id}) => {

    // const [editContacts, setEditContacts] = useState('');

   const editContacts = (e) =>{
    e.preventDefault()
    actions.editContactsPut()
   }
    

    return (
        <div className="container mt-3 d-flex justify-content-center" >
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col">
                        <img src='https://st3.depositphotos.com/8230070/14467/v/950/depositphotos_144676115-stock-illustration-beautiful-cartoon-character-cheerful-smiling.jpg' style={{width: "18rem", borderRadius: "100%"}}  className="img-fluid rounded-start" alt="cont1" />
                    </div>
                    <div className="col d-flex">
                        <div className="card-body">
                            <h6 className="name"><i className="fa-solid fa-location-dot">{name}</i></h6>
                            <p className="location"><i className="fa-solid fa-location-dot">{address}</i></p>  
                            <p className="phonet"><i className="fa-solid fa-phone"></i>{phone}</p>
                            <p className="mail"><i className="fa-solid fa-envelope"></i>{email}</p>
                            <p className="id">{id}</p>
                        </div>
                        <div className="col">
                            <div className="card-body">
                               
                                <div className="icons d-flex">
                                    <i className="fa-solid fa-pencil btn-lg" onChange={(e)=>editContacts(e)} ></i>
                                    <i className="fa-solid fa-trash-can btn-lg" onClick={''} ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};
