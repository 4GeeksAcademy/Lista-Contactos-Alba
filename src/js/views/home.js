import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { AddContact } from "./addContacts";
import { Contact } from "./contact";


export const Home = () => (
	
	<div>

		<div className="ml-auto">welcome to contacts

			<link to = "/contact">
				<button className="btn btn-primary"></button>
			</link>
		</div>

		<div className="ml-auto">Add new contact

			<link to = "/addContact">
				<button className="btn btn-primary"></button>
			</link>
		</div>

	</div>
	
	
);
