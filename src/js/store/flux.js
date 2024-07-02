import { name } from "file-loader";
import { stringify } from "query-string";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			
				
			
		},
		actions: {

			userCreate: async () =>{
				try {
					const user = await fetch ('https://playground.4geeks.com/contact/agendas/Alba',{
						method:"POST", 
						headers: {
							"accept": "application/json"
						},
						
					})
					const data = await user.json()
					setStore({contacts:data.contacts})
						console.log(data)
				} catch (error) {
					console.log(error)
				}
			},
			createContact : async (name,phone,email,address) => {
				const datos = {
					"name" : name,
					"phone" : phone,
					"email" : email,
					"address" : address,
					"id": id
				}
				try {
				const response = await fetch ('https://playground.4geeks.com/contact/agendas/Alba/contacts',{
					method: "POST",
					headers:{
						"accept": "application/json",
						"Content-Type": "application/json"
					},
					body:JSON.stringify(datos)

				})
				const data = await response.json()
				setStore({contact:data.contact})	
				console.log("contacto creado")
				} catch (error) {
					console.log(error)
				}
			},
			getAgenda : async () =>{
				
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Alba',{
						method: "GET",
						headers:{
							"accept": "application/json",
							
						},
						
						
					})
					const data = await response.json()
					console.log(data, "data")
					setStore({contacts:data.contacts})
					
					
				} catch (error) {
					console.log(error, "error")
					
				}
			},
			editContactsPut : async (name,phone,email,address,id) => {
				const datos = {
					"name": name,
					"phone": phone,
					"email": email,
					"address": address,
					"id": id
				  }
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/Alba/contacts/${id}`,{
						method: "PUT",
						headers:{
							"accept": "application/json",
							"Content-Type": "application/json"
						}, 
						body:JSON.stringify(datos)
					})
					const data = await response.json()
					setStore({contact:data.contact})
					console.log("editar --> prueba");
				} catch (error) {
					console.log(error);
				}
			},

			// Use getActions to call a function within a fuction
			
			
			function: () => {
					getActions().createContact();
					getActions().editContactsPut();
				},
				
				

				

				
					
					/**
					 fetch().then().then(data => setStore({ "foo": data.bar }))
					 */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	
	};



export default getState;
