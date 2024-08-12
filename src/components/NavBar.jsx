function NavBar({ pokemonIndex, onPrevClick, onNextClick, pokemonListLength }) {
  return (
    <div className="navbar">
      {pokemonIndex > 0 && (
        <button onClick={onPrevClick}>Précédent</button>
      )}
      {pokemonIndex < pokemonListLength - 1 && (
        <button onClick={onNextClick}>Suivant</button>
      )}
    </div>
  );
}

export default NavBar;