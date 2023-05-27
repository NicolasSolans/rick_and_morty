import axios from "axios";
import style from './Detail.module.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = ()=>{
    const {id} = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.detail}>
            <h1>{character.name && character.name}</h1>
            <h3>{character.status && character.status}</h3>
            <h3>{character.species && character.species}</h3>
            <h3>{character.gender && character.gender}</h3>
            <h3>{character.origin?.name && character.origin?.name}</h3>
            <img src={character.image && character.image} alt="" />
        </div>
    )
}

export default Detail;