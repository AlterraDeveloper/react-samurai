import React, {useEffect, useState} from 'react'
import s from './Pokemon.module.css'
import {pokemonAPI} from "../../api/pokemonApi";

const Pokemon = (props) => {

    const [details, setDetails] = useState(null);

    useEffect(() => {
        pokemonAPI.getDetails(props.name).then(response => {
            setDetails(response);
        })
    }, []);

    const skeletonClass = details === null ? s.skeleton : "";

    return <div className={[s.pokemon]}>
        <p>{props.name}</p>
        <p>#{details?.id}</p>
        <img
             src={details?.sprites?.other?.dream_world?.front_default}
             alt="Pokemon image"
        />
    </div>
}

export default Pokemon;