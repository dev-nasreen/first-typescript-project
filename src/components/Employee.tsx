import React from 'react';
interface IProps{
    user:{
        name:string,
        email:string,
        address?: string
    }
    
 }
const Employee = ({user}: IProps) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <p>
                    <strong>Name:</strong> {user.name}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <p>
                <strong>Address: </strong> {user.address}  
                </p>
            </div>
        </div>

       
    );
};

export default Employee;