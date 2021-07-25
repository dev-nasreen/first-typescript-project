import Rea, { useState } from 'react';

const users = [
    {name: "saad", age:5},
    {name: "mawa", age: 13},
    {name: "Nasreen", age:14}
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState <{name: string, age: number} | undefined> ()
    const onClick = () =>{
       const foundUser = users.find((user) => user.name === name );
       setUser(foundUser);
    }
    return (
        <div>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Find member</button>
            {
                user ?  <div className="card">
                <p>
                    <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Age: </strong> {user.age}  
                </p>
            </div> :
            <h3>User not found.</h3>
            }
           
        </div>

    );
};

export default UserSearch;