import React, { useState } from "react";
import Card from "../Components/Card";
import getFavsStore from "../Components/utils/getFavsStore";
import styles from "./Home.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [favsPageItems, setFavsPageItems] = useState(getFavsStore());

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={styles.cardgrid}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favsPageItems.map(fav => <Card odontologo={fav} key={fav.id} setFavsPageItems={setFavsPageItems} />)}
      </div>
    </>
  );
};

export default Favs;
