import React from 'react';
import Child from './Child';


const Parent = () => {
    const userList =[
        {
        name: "Nasreen",
        age:32,
        choose:"coding"
    },
        {
        name: "Jacy",
        age:32,
        choose:"Cooking"
    },
        {
        name: "Nancy",
        age:32,
        choose:"Dancing"
    },
    {
        name: "saad",
        choose:'Playing',
        age: 5
    }
]
    return (
       <Child uInfo={userList}/>
    );
};

export default Parent;