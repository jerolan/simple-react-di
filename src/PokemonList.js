import React from "react";

import { usePokemons } from "./PokemonContext";

export default function PokemonList() {
  const { isLoading, data } = usePokemons();

  if (isLoading) {
    return <>...loading</>;
  }

  return (
    <div className="pokeapp">
      <p> The Kanto PokeDex! </p>
      <div className="pokemon--species--list">
        {data?.results.map((pokemon, id) => (
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
