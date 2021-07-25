import React, { useState } from 'react';
import Banner from './Banner';

interface IContact{
    name: string,
    email: string,
    age: number
}

const HomeBanner = () => {
    const [contact, setContact] = useState<IContact>({} as IContact)
    const [contactList, setContactList] = useState<IContact[]>([])
    console.log('Contact', contact);
const onClick = () =>{
    setContactList([...contactList, contact ]);
    setContact({} as IContact)
}
const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setContact({...contact, [e.target.name]: e.target.value})
}
    const user ={
        name:"Nasreen",
        email:"nas@gmail.com"
    }
    return (
        <div className=" container">
            <div className="row ">

            <div className="box">
            <h2>Form Title</h2>
            <div className="form">
                <input 
                onChange={onChange}
                type="text" 
                name="name"
                placeholder="Cantact name"
                />
                <input 
                onChange={onChange}
                type="text" 
                name="age"
                placeholder="Your age"
                />
                <input 
                onChange={onChange}
                type="email" 
                name="email"
                placeholder="Email ID"
                />
                <button onClick={onClick}>Add</button>
            </div>
           {
               contactList.map((cDetail)=><Banner key={cDetail.name} user={cDetail}/>)
           }
            
            </div>
           
            </div>
            
        </div>
    );
};

export default HomeBanner;