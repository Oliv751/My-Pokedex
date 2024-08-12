import PropTypes from "prop-types";

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

NavBar.propTypes = {
    pokemonIndex: PropTypes.number.isRequired,
    onPrevClick : PropTypes.func.isRequired,
    onNextClick : PropTypes.func.isRequired,
    pokemonList : PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            imgSrc: PropTypes.string,
          })
        ).isRequired,
};

export default NavBar;