import React from 'react';

interface IProps {
    uInfo: {
        name: string,
        age: number,
        choose: string
    }[]
}
const Child = ({uInfo} : IProps) => {
    return (
        <div>
            {
                uInfo.map((user) => <div style={{backgroundColor:"#fff", padding:"10px 20px", marginTop:"10px"}}>
                <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Age:</strong> {user.age}</p>
            <p><strong>Choice:</strong> {user.choose}</p>
                </div>)
            }
            
        </div>
    );
};

export default Child;