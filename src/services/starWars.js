import axios from 'axios';

export async function getSWCharacters() {
  try {
    const response = await axios.get(process.env.REACT_APP_STAR_WARS_ENDPOINT);

    return response.data.results.map(({ name }) => name);
  } catch (error) {
    console.log(error);
  }
}