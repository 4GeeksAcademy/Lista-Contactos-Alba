import React from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

//contiene la lista de contactos (agenda)




export const Contact = () => {
    return (
        
        <div>
            <Link to="/addContact">
                <button className="mb-2">Add new contact </button>
            </Link>  
           {store.Contacts.map ((contact) =>(

            <ContactCard  name={contact.name} address={contact.address} phone={contact.phone} email={contact.email}/>
           ))}
            
       </div> 
        
    )
}