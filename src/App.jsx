import { useState, useCallback } from 'react';
import { getOPCharacters } from './services/onePiece';
import { getPokemons } from './services/pokemon';
import ThemeSelection from './components/themeSelection';
import Game from './components/game';

function App() {
  const [theme, setTheme] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  const fillData = useCallback((data, title) => {
    setCharacters(data);
    setTitle(title);
    setLoading(false);
  }, []);
  
  const fillOnePieceCharacters = useCallback(async () => {
    const response = await getOPCharacters();

    fillData(response, 'One Piece Mimic');
  }, [fillData]);

  const fillPokemonCharacters = useCallback(async () => {
    const response = await getPokemons();

    fillData(response, 'Pokémon Mimic');
  }, [fillData]);
  
  const handleSelectedTheme = useCallback((theme) => {
    setTheme(theme);
    setLoading(true);

    switch(theme) {
      case 'ONE_PIECE':
        fillOnePieceCharacters();
        break;
      case 'POKEMON':
        fillPokemonCharacters();
        break;
      default:
        break;
    }
  }, [fillOnePieceCharacters, fillPokemonCharacters]);

  const handleChangeTheme = useCallback(() => {
    setTheme('');
    setCharacters([]);
    setLoading(false);
    setTitle('');
  }, [])

  return (
    <>
      {loading && (
        <h1>Loading</h1>
      )}
      {!theme && (
        <ThemeSelection
          handleSelectedTheme={handleSelectedTheme}
        />
      )}
      {characters && title && !loading && (
        <Game
          characterList={characters}
          changeTheme={handleChangeTheme}
          title={title}
        />
      )}
    </>
  );
}

export default App;
