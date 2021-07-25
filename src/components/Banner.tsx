import React from 'react';

interface IProps{
   user:{
       name:string,
       email:string,
       age:number
   }
   
}


const Banner = ({user}: IProps) => {
    return (
        <div className="card">
            <p>
                <strong>Name:</strong> {user.name}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Age: </strong> {user.age}  
            </p>
        </div>
    );
};

export default Banner;