import React from 'react'

function Profilecomponent({name,bio,profession,children,isStudent,getName}) {
    return (
        <div>
          <h1>{name} </h1>
          <h1>{bio} </h1>
          <h1>{profession} </h1>
          
          {children}
          <br/>
          {isStudent &&
          <button onClick={() => getName(name)}  >click here</button>
          }
        </div>
    );
}

export default Profilecomponent;
Profilecomponent.defaultProps={
    name: "emna",
    bio :"dfghj",
    profession:"teacher",
}