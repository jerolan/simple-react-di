import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";

import PokemonList from "./PokemonList";
import { MockPokemonProvider } from "./PokemonContext";

test("render list", () => {
  const pokemon = {
    name: "bulbasaur 2",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  };

  render(
    <MockPokemonProvider data={[pokemon]}>
      <PokemonList />
    </MockPokemonProvider>
  );

  const bulbasaur = screen.getByText(pokemon.name);
  expect(bulbasaur).toBeInTheDocument();
});
