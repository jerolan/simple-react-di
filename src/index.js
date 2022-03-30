import "./styles.css";

import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import { PokemonInternetProvider } from "./PokemonContext";
import PokemonListStatic from "./PokemonListStatic";
import PokemonListCopuled from "./PokemonListCopuled";
import PokemonList from "./PokemonList";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PokemonInternetProvider>
                <PokemonList />
              </PokemonInternetProvider>
            }
          />
          <Route path="/static" element={<PokemonListStatic />} />
          <Route path="/copuled" element={<PokemonListCopuled />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
  rootElement
);
