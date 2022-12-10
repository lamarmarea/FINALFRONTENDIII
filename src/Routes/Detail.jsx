import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  let {id} = useParams()

  const [odontologoDetalle, setOdontologoDetalle] = useState([]);
  
  useEffect(()=>{
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setOdontologoDetalle(res.data))
    }, [id]);

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <main style={{display:"flex", flexWrap:"wrap", border:"solid black 2px"}}>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Name</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Email</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Phone</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", fontWeight:"bold", textAlign:"center"}}>Website</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.name}</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.email}</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.phone}</div>
        <div style={{padding:"8px", width:"25%", border:"solid black 1px", textAlign:"center"}}>{odontologoDetalle.website}</div>


      </main>
      {/* <table  border="1" width="100%" align="center" cellpadding="10px">
          <tr align="center">
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Website</td>
          </tr>
          <tr align="center">
              <td>{odontologoDetalle.name}</td>
              <td>{odontologoDetalle.email}</td>
              <td>{odontologoDetalle.phone}</td>
              <td>{odontologoDetalle.website}</td>
          </tr>
        </table> */}
    </>
  )
}

export default Detail