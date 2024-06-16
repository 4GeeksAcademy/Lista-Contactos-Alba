import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {AddContact} from "./addContacts";
import {ContactCard} from "../component/ContactCard";
import { contact } from "./contact";


export const Home = () => (
	<>
	//por ahora vemos un contacto, luego sera la views de contact
		<ContactCard />
		
	</>
);
