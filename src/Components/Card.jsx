import React, {useContext} from "react";
import imagenDoctor from "../Routes/doctor.jpg";
import styles from "./Card.module.css";
import getFavsStore from "./utils/getFavsStore";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Card = ({ odontologo, setFavsPageItems }) => {
  const { state} = useContext(ContextGlobal)

  const updateFavs = (favs) => {
    if (setFavsPageItems) {
      setFavsPageItems(favs);
    }
    const favsJson = JSON.stringify(favs);
    localStorage.setItem('favs', favsJson);
  }
  
  const handleFavClick = () => {
    let favsStore = getFavsStore();

    let newFavs = [];
    if (!favsStore.find(fav => fav.id === odontologo.id)) {
      newFavs = [...favsStore, odontologo];
      alert("Added to favs")
    } else {
      newFavs = favsStore.filter(fav => fav.id !== odontologo.id);
      alert("Removed from favs")
    }

    updateFavs(newFavs);
  };

  return (
    <div className={styles.card} style={{backgroundColor: state.bgColor, color: state.ftColor}}>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <Link to={`/odontologo/${odontologo.id}`}><img src={imagenDoctor} alt="Imagen doctor" /></Link>
      <h2>{odontologo.name}</h2>
      <h4>{odontologo.username}</h4>
      {}
      <button onClick={handleFavClick} className="favButton" style={{backgroundColor: state.btColor, fontSize:"1.4rem"}}>
      🦷
      </button>
    </div>
  );
};

export default Card;
