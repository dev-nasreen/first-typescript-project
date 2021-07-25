import React, { useState } from 'react';
import Employee from './Employee';

interface IContact{
    name: string,
    email: string,
    address?: string
}

const EmployeeList = () => {
    const [contact, setContact] = useState<IContact>({} as IContact)
    const [contactList, setContactList] = useState<IContact[]>([])
    //console.log('Contact', contact);
const onClick = () =>{
    setContactList([...contactList, contact ]);
    setContact({} as IContact)
}
const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setContact({...contact, [e.target.name]: e.target.value})
}
   
    return (
        <div className=" container">
            <div className="row ">

            <div className="box">
            <h2>Record Employee Details</h2>
            <div className="form">
                <input 
                onChange={onChange}
                type="text" 
                name="name"
                placeholder="Employee name"
                />
                <input 
                onChange={onChange}
                type="email" 
                name="email"
                placeholder="Email ID"
                />
                <input 
                onChange={onChange}
                type="text" 
                name="address"
                placeholder="Address"
                />
                
                <button onClick={onClick}>Add</button>
            </div>
            <div className="container">
                <div className="row">
                {
                    contactList.map((cDetail, i)=><Employee key={i} user={cDetail}/>)
                }
                </div>
            </div>
           
            
            </div>
           
            </div>
            
        </div>
    );
};

export default EmployeeList;