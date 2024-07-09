import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

//contiene la lista de contactos (agenda)




export const Contact = () => {
    
    const { store, actions } = useContext(Context);
    console.log(store.contacts)
    useEffect(()=>{
        actions.getAgenda()
    },[])
    console.log(store.contacts)
    return (
        
        <div>
            <Link to="/addcontact">
                <button className="btn btn-outline-warning mb-3 mt-5 ms-5">Add new contact </button>
            </Link> 
            
            {store.contacts?.map ((contact) =>(

            <ContactCard  name={contact.name} address={contact.address} phone={contact.phone} email={contact.email} id={contact.id} />
           ))}
             
       </div> 
        
    )
}