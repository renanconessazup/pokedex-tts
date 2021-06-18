function Pokedex({ pokemon, handleFindPokemon }) {
    return (
        <>
            <div className="pokemon--details">
                <p>Nome: {pokemon.name}</p>
                <p>Tipo: </p>
                <p>Peso: </p>
            </div>
        </>
    )
}

export default Pokedex;