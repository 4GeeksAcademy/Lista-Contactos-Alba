import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import {AddContact} from "./addContacts";
import {ContactCard} from "../component/ContactCard";
import { contact } from "./contact";


export const Home = () => (
	<>
	
		<h6>welcome to contacts</h6>
		<link to = "/contact">
		<button className="btn btn-primary"></button>
		</link>
		<h6>Add new contact</h6>
		<link to = "/addContact">
		<button className="btn btn-primary"></button>
		</link>
	</>
);
