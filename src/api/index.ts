import axios from "axios";

const API: string = `https://rickandmortyapi.com/api/character`;

export const fetchCharacters = () => axios.get(API);