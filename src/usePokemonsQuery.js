import { useQuery } from "react-query";

import PokemonDataSource from "./pokemonDataSource";

export default function usePokemonsQuery() {
  return useQuery("pokemon", () => new PokemonDataSource().get());
}
