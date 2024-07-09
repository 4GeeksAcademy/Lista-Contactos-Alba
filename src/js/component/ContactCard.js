
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";



//muestra solo un contacto

export const ContactCard = ({ name, address, phone, email, id }) => {
    console.log({ name, phone, email, address, id })

    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState(store.contact)
    const navigate = useNavigate();



    const editContacts = () => {

        actions.editContactsPut()

        navigate("/addcontact/");

    };



    const deleteContactos = (id) => {

        actions.deleteContacts(id)

    };


    return (
        <div className="container mt-5 d-flex justify-content-center aling-item-center" >
            <div className="card mb-3 w-75 border-warning ">
                <div className="row g-0">
                    <div className="col-sm-4">
                        <img src='https://st3.depositphotos.com/8230070/14467/v/950/depositphotos_144676115-stock-illustration-beautiful-cartoon-character-cheerful-smiling.jpg' style={{ width: "18rem", borderRadius: "100%" }} className="img-fluid rounded-start" alt="cont1" />
                    </div>
                    <div className="col-sm-6 d-flex">
                        <div className="card-body">
                            <h6 className="name"><i className="fa-solid fa-location-dot me-1"></i>{name}</h6>
                            <p className="location"><i className="fa-solid fa-location-dot me-1"></i>{address}</p>
                            <p className="phonet"><i className="fa-solid fa-phone me-1"></i>{phone}</p>
                            <p className="mail"><i className="fa-solid fa-envelope me-1"></i>{email}</p>

                        </div>
                    </div>
                    <div className="col-sm d-flex">
                            <div className="card-body">

                                <div className="icons d-flex ms-3">
                                    <i className="fa-solid fa-pencil btn-lg" onClick={() => {
                                        actions.salvarContacto(name, phone, email, address, id)
                                        navigate('/editar_contact')
                                    }} ></i>
                                    <i className="fa-solid fa-trash-can btn-lg" onClick={() => { deleteContactos(id) }} ></i>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
};
