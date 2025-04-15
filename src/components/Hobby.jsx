import React from 'react';

// Presenational Component
function Hobby({ hobby }) {
  const { name, description } = hobby;

  // rendering the hobby details
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Hobby;