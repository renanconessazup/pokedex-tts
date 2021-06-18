function Pokedex({ pokemon, handleFindPokemon }) {
    return (
        <>
            <div className="pokemon--details">
                {process.env.REACT_APP_SHOW_IMAGES && <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" />}
                <p>Nome: {pokemon.name}</p>
                <p>Tipo: </p>
                <p>Peso: </p>
            </div>
        </>
    )
}

export default Pokedex;