function PokemonCard({ pokemon }) {
    return (
      <figure className="card">
        {pokemon.imgSrc != null ? (
        <img
          src={pokemon.imgSrc}
          alt={pokemon.name}
          className="card-img"
        /> 
        ) : ( 
        <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  }
  
  export default PokemonCard;