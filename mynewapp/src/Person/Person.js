import React from 'react';
const person = (props) =>{
    return <div>
        <p> i am have {props.name} value {props.age} between {Math.floor(Math.random()*30)}</p>
<p>this will return {props.children}</p>
    </div>
};
export default person;