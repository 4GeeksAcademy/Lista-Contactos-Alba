import React, { useState } from "react";



//muestra solo un contacto

export const ContactCard = () => {

    const [editContacts, setEditContacts] = useState('');

   
    

    return (
        <div className="container mt-3 d-flex justify-content-center" >
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col">
                        <img src='https://st3.depositphotos.com/8230070/14467/v/950/depositphotos_144676115-stock-illustration-beautiful-cartoon-character-cheerful-smiling.jpg' style={{width: "18rem", borderRadius: "100%"}}  className="img-fluid rounded-start" alt="cont1" />
                    </div>
                    <div className="col d-flex">
                        <div className="card-body">
                            <h6 className="name"><i className="fa-solid fa-location-dot">a</i></h6>
                            <p className="location"><i className="fa-solid fa-location-dot">a</i></p>  
                            <p className="phonet"><i className="fa-solid fa-phone"></i>b</p>
                            <p className="mail"><i className="fa-solid fa-envelope"></i>c</p>
                        </div>
                        <div className="col">
                            <div className="card-body">
                               
                                <div className="icons d-flex">
                                    <i className="fa-solid fa-pencil btn-lg" onChange={''} ></i>
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
