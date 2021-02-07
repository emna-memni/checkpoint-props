
import React from 'react'
import './App.css'
import Profilecomponent  from './profile/profilecomponent';
function App() {
  const getName =(name) => alert ('${name} ')  
  return (
    <div className="App">
     <Profilecomponent
     
     bio="20"
     profession='avocat'
     isStudent={true}
     getName={getName}
     >
       <img src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="my image" style={ { width:'100 px',width:'100px' }}></img>
     
     
       </Profilecomponent>
    </div>
  ); 
}

export default App;
