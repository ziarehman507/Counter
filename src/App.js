import React, { useState } from "react";
import  "./App.css"


function App() {
  const [nam, setNam] = useState(0)
  

  const butclick = () => {
    setNam(nam + 1)
  }
  if(nam <= 10){}
  else{
    setNam(0)
  }
  
    
    
  
  

  return (
    
    <div className="ger">
      {console.log("return", nam)}
      <h1 className="numbr">{nam}</h1>
      <button className="ber" onClick={butclick} >Click me</button>
    </div>
  )
}

export default App;