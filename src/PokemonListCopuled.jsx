import React, { useEffect, useState } from "react";

import PokemonDataSource from "./pokemonDataSource";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const dataSource = new PokemonDataSource();

  useEffect(() => {
    dataSource.get().then((data) => setPokemons(data.results));
  }, []);

  return (
    <div className="pokeapp">
      <p> The Kanto PokeDex! </p>
      <div className="pokemon--species--list">
        {pokemons.map((pokemon, id) => (
          <div key={id} className="pokemon--species">
            <div className="pokemon--species--container">
              <div className="pokemon--species--sprite">
                <img alt={pokemon.name} src={`/sprites/${id + 1}.png`} />
              </div>
              <div className="pokemon--species--name">{pokemon.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
