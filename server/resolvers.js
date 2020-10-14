// The data below is mocked.
const data = require("./data");

module.exports = {
  Query: {
    Pokemons: () => {
      return data.pokemon;
    },

    FindPokemonById: (parent, args) => {
      return data.pokemon.find((pokemon) => pokemon.id === args.id);
    },

    FindPokemonByName: (parent, args) => {
      return data.pokemon.find((pokemon) => pokemon.name === args.name);
    },

    FindPokemonByType: (parent, args) => {
      return data.pokemon.filter(
        (pokemon) => pokemon.types.indexOf(args.type) > -1
      );
    },

    Attacks: () => {
      return data.attacks;
    },

    FindAttacksByClass: (parent, args) => {
      for (const key in data.attacks) {
        if (key === args.name) return data.attacks[key];
      }
    },

    FindAttacksByName: (parent, args) => {
      for (const element of data.attacks.fast) {
        if (element.name === args.name) return element;
      }
      for (const element of data.attacks.special) {
        if (element.name === args.name) return element;
      }
      return "No such attacks!";
    },

    Types: () => {
      return data.types;
    },
    /*  findFast: (parent, args) => {
      return data.attacks.fast.find((attacks) => attacks.name === args.name);
    },
    Types: () => {
      return data.pokemon;
    }, */
  },
};
