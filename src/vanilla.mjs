class PokemonDataSource {
  async get() {
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon");
    return resp.json();
  }
}

class MockPokemonDataSource {
  async get() {
    const resp = [{ name: "Pikachu" }];
    return resp;
  }
}

class App {
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  async getPokemonList() {
    try {
      const res = await this.dataSource.get();
      console.log({ res });
    } catch (error) {
      console.error(error);
    }
  }
}

function createApp(dataSource) {
  function getPokemonList() {
    return dataSource.get();
  }

  return {
    getPokemonList,
  };
}

const app = new App(new MockPokemonDataSource());
app.getPokemonList();
