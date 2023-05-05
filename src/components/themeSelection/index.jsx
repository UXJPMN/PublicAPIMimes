const ThemeSelection = ({ handleSelectedTheme }) => {
  return (
    <>
      <header>
        <h1>Select your theme</h1>
      </header>
      <main>
        <ul>
          <li>
            <button onClick={() => handleSelectedTheme('ONE_PIECE')}>
              One Piece
            </button>
          </li>
          <li>
            <button onClick={() => handleSelectedTheme('POKEMON')}>
              Pokémon
            </button>
          </li>
        </ul>
      </main>
    </>
  );
};

export default ThemeSelection;
