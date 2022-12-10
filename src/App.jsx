import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import styles from "./App.module.css"
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ContextGlobal } from "./Components/utils/global.context";


function App() {
  const { state } = useContext(ContextGlobal)
  return (
    <main style={{backgroundColor:state.bgColor, color:state.ftColor, width: "100%", height:"100vh", minHeight: "100%"}}>
    <div className="App" style={{backgroundColor:state.bgColor, color:state.ftColor }}>  {/*Agregar esto!!!!!!!!*/}
      {/* <h1>App</h1> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/odontologo/:id" element={<Detail/>}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
    </main>
  );
}

export default App;
