import axios from 'axios';

export async function getOPCharacters() {
  try {
    const response = await axios.get(process.env.REACT_APP_ONE_PIECE_ENDPOINT);

    return response.data.map((character) => character.french_name);
  } catch (error) {
    console.log(error);
  }
}