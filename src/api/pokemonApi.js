import axios from "axios";

const pokemonApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
});

export const pokemonAPI = {

    getList: (currentPage, pageSize) =>
        pokemonApi.get(`/pokemon?limit=${pageSize}&offset=${(currentPage - 1) * pageSize}`)
           .then(response => response.data),

    getDetails: (pokemonName) =>
        pokemonApi.get(`/pokemon/${pokemonName}`)
            .then(response => response.data),
};