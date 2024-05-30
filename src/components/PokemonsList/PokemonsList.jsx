import React, {useEffect, useState} from 'react';
import s from './PokemonsList.module.css'
import {pokemonAPI} from "../../api/pokemonApi";
import Pokemon from "../Pokemon/Pokemon";

function PokemonsList(props) {

    const pokemonOnPage = 10;
    const [page, setPage] = useState(1);
    const [pokemonList, setPokemonList] = useState([]);

    console.log("Pokemon page: ", page);

    useEffect(() => {
        pokemonAPI.getList(page, pokemonOnPage)
            .then(response => {
                console.log("Pokemons response:", response);
                setPokemonList([...pokemonList, ...response.results]);
            })
    }, [page]);

    const pokemons = pokemonList.map((p, i) => <Pokemon key={i} {...p}></Pokemon>)

    return <div className={s.pokemonContainer}>
        <h1>Pokemons list</h1>
        <div className={s.pokemonList}>{pokemons}</div>
        <button className={s.showMoreButton} onClick={ () => {
            setPage(page + 1);
        }}>Show more...</button>
    </div>
}


export default PokemonsList;