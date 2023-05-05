import { useCallback, useEffect, useState } from 'react';

const NameGenerator = ({
  characterList,
  usedCharacters,
  changingCharacter,
  characterChange,
  emptyList
}) => {
  const [actualCharacters, setActualCharacters] = useState(characterList);
  const [ text, setText ] = useState('Loading');
  
  const randomize = useCallback(() => {
    return Math.floor(Math.random() * (actualCharacters.length - 1));
  }, [actualCharacters]);

  const randomizeCharacter = useCallback(() => {
    if (actualCharacters.length > 0) {
      const newCharacterIndex = randomize();

      setText(actualCharacters[newCharacterIndex]);
      characterChange(actualCharacters[newCharacterIndex]);
    } else {
      setText("You've played with all characters");
      emptyList(true);
    }
    
  }, [
    actualCharacters,
    characterChange,
    randomize,
    emptyList
  ]);

  useEffect(() => {
    if (changingCharacter) {
      randomizeCharacter();
    }
  }, [changingCharacter, randomizeCharacter]);

  useEffect(() => {
    setActualCharacters(actualCharacters.filter(character => !usedCharacters.includes(character)));
  }, [usedCharacters]);

  return (
    <>
      <h2>{ text }</h2>
    </>
  );
};

export default NameGenerator;
