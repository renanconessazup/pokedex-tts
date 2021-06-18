
import { useEffect, useState } from "react";
import { api } from "../services";
import randomNumber from "../utils/random";
import "./app.scss"
import Pokedex from './pokedex'

function App() {

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {

  }, [pokemon])

  async function handleFindPokemon() {
    const random = randomNumber();
    const response = await api.get(`/${random}`);
    setPokemon(response.data);
  }

  return (
    <div className="App">
      <section className="pokedex">
        {pokemon ? <Pokedex handleFindPokemon={handleFindPokemon} pokemon={pokemon} /> : <div className="empty">Nenhum Pokemon!</div>}
        <button className="btn--find" onClick={handleFindPokemon}>Buscar</button>
      </section>
      { process.env.REACT_APP_SHOW_VERSION && <span>versao 1.0</span>}
    </div>
  );
}

export default App;
