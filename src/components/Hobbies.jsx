import React from 'react';
import Hobby from './Hobby.jsx';

// Hobbies Component that passes in given data with key value pairs using a (HOC) .map
function Hobbies({ hobbies }) {
    return (
        <div>
            {hobbies.map((hobby, index) => (
                <Hobby key={index} hobby={hobby} />
            ))}
        </div>
    );
}

export default Hobbies;