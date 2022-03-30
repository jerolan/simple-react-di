import { useCallback } from "react";
import createContext from "./createContext";
import usePokemonsQuery from "./usePokemonsQuery";

const [PokemonProvider, usePokemonsValue] = createContext();

export function PokemonInternetProvider({ children }) {
  return <PokemonProvider value={usePokemonsQuery}>{children}</PokemonProvider>;
}

export function MockPokemonProvider({ children, data }) {
  const fn = useCallback(() => {
    return {
      isLoading: false,
      data: { results: data },
    };
  });

  return <PokemonProvider value={fn}>{children}</PokemonProvider>;
}

export function usePokemons() {
  const useHook = usePokemonsValue();
  return useHook();
}
