import axios from 'axios';

export async function getPokemons() {
  try {
    const response = await axios.get(process.env.REACT_APP_POKEMON_ENDPOINT);

    return response.data.results.map((pokemon) => pokemon.name);
  } catch (error) {
    console.log(error);
  }
}