import React from "react";
import { AddContact } from "./views/addContacts";
import { ContactCard } from "../component/ContactCard";


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