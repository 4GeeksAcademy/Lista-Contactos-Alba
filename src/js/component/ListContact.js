import React from "react";

export const ListContact = () => {
	return (
		<htmlForm>
                <div className="container">
                    <h1 className="d-flex justify-content-center">Add a new contact</h1>
                <div className="mb-3">
                    <h6>Full Name</h6>
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label"></label>
                    <input type="text" className="w-100 htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name"/>
                
                </div>
                <div className="mb-3">
                    <h6>Email</h6>
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label"></label>
                    <input type="email" className="w-100 htmlForm-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="mb-3">
                    <h6>Phone</h6>
                    <label htmlFor="exampleInputEmail1" className="htmlForm-label"></label>
                    <input type="text" className="w-100 htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entre phone"/>
                
                </div>
                <div className="mb-3">
                <h6>Address</h6>
                    <label htmlFor="exampleInputPassword1" className="htmlForm-label"></label>
                    <input type="text" className="w-100 htmlForm-control" id="exampleInputPassword1" placeholder="Enter address"/>
                </div>
                
                <button type="submit" className="btn btn-outline-info w-100 lg" onClick={''}>Submit</button>
            </div>
	  </htmlForm>
	)
};
