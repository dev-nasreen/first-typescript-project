import {useState} from 'react';

const Users: React.FC = () => {
    const [name, setName] = useState('');
    const [guest, setGuest] = useState<string[]>([]);

    const addGuest = () =>{
        setName('');
        setGuest([...guest, name]);
    }
    return (
        <div>
           <h3>Guset list</h3>
          
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> 
            <button onClick={addGuest}>Add guest</button>
            <ul>
               {guest.map((oneGuest) =><div className="card" key={oneGuest}>
                <p>
                    <strong>Name:</strong> {oneGuest}
                </p>
                <p>
                  <strong>Age: </strong> Not given  
                </p>
            </div>)}
            </ul>
        </div>
    );
};

export default Users;