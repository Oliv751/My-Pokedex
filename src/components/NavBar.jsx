function NavBar({ pokemonIndex, onPrevClick, onNextClick, pokemonList }) {
  return (
    <nav>
      {pokemonIndex > 0 && (
        <button onClick={onPrevClick}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={onNextClick}>Suivant</button>
      )}
    </nav>
  );
}

export default NavBar;