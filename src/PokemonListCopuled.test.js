import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";

import PokemonListCopuled from "./PokemonListCopuled";

test("render list", async () => {
  const pokemon = {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  };

  jest.mock("./pokemonDataSource", () => {
    return class mockPokemonDataSource {
      async get() {
        return {
          results: [pokemon],
        };
      }
    };
  });

  render(<PokemonListCopuled />);

  const bulbasaur = await screen.findByText(pokemon.name);
  expect(bulbasaur).toBeInTheDocument();

  jest.resetAllMocks();
});
