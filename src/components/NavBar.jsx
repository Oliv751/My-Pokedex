import PropTypes from "prop-types";

function NavBar({ pokemonList, onPokemonClick }) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          onClick={() => {
            if (pokemon.name.toLowerCase() === "pikachu") {
              alert("Pika Pikachu !!!");
            }
            onPokemonClick(index);
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

NavBar.propTypes = {
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,
  onPokemonClick: PropTypes.func.isRequired,
};

export default NavBar;
