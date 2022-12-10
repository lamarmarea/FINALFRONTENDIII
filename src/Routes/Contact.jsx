import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div style={{display: "flex", textAlign:"center", flexDirection:"column", alignItems:"center", padding:"25px"}}>
      <div style={{padding:"25px"}}>
    
        <h2>Want to know more?</h2>
        <p>Send us your questions</p>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  )
}

export default Contact