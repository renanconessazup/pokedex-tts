function Pokedex({ pokemon, handleFindPokemon }) {
    return (
        <>
            <div className="pokemon--details">
                {process.env.REACT_APP_SHOW_IMAGES && <img className="pokemon-image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" />}
                <p>{pokemon.name}</p>
            </div>
        </>
    )
}

export default Pokedex;