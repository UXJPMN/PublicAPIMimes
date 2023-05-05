import { useCallback, useState } from 'react';
import NameGenerator from '../nameGenerator';

const Game = ({ characterList, title, changeTheme }) => {
  const [usedCharacters, setUsedCharacters] = useState([]);
  const [changingCharacter, setChangingCharacter] = useState(true);
  const [emptyList, setEmptyList] = useState(false);
  
  const handleCharacterChange = useCallback((character) => {
    setUsedCharacters([...usedCharacters, character])
    setChangingCharacter(false);
  }, [usedCharacters]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ title }</h1>
      </header>
      <main>
        <NameGenerator
          characterList={characterList}
          usedCharacters={usedCharacters}
          changingCharacter={changingCharacter}
          characterChange={handleCharacterChange}
          emptyList={setEmptyList}
        />
      </main>
      <section>
        {!emptyList && (
          <button onClick={() => setChangingCharacter(true)}>New Character</button>
        )}
        {emptyList && (
          <button>Restart List</button>
        )}
        <button onClick={changeTheme}>Change Theme</button>
      </section>
    </div>
  );
}

export default Game;
