import { name } from "file-loader";
import { stringify } from "query-string";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: []	
				
			
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
			createContact : async () => {
				const datos = {
					name : '',
					phone : '',
					email : '',
					address : ''
				}
				try {
				const response = await fetch ('https://playground.4geeks.com/contact/agendas/Alba/contacts',{
					method: "POST",
					headers:{
						"accept": "application/json",
						"Content-Type": "application/json"
					},

				})
				body:JSON.stringify(datos)
				const data = await response.json()
				setStore({contact:data.contact})	
				} catch (error) {
					console.log(error)
				}
			},
			getAgenda : async () =>{
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Alba',{
						method: GET,
						headers:{
							"accept": "application/json"
						}
					})
					const data = await response.json()
					setStore({contacts:data.contacts})
					
					
				} catch (error) {
					console.log(error)
					if(error === 404){
						createContact()
					}
				}
			}

			// Use getActions to call a function within a fuction
			
			
			// exampleFunction: () => {
				// 	getActions().changeColor(0, "green");
				// },
				
				

				

				
					
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
