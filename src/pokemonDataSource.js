export default class PokemonDataSource {
  async get() {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
    return resp.json();
  }
}
