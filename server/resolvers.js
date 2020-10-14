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

    FindPokemonByAttack: (parent, args) => {
      const pokemon = [];
      //logging the attack infops

      for (const element of data.attacks.fast) {
        if (element.name === args.attack) {
          name = element.name;
          type = element.type;
          damage = element.damage;
        }
      }
      for (const element of data.attacks.special) {
        if (element.name === args.attack) {
          name = element.name;
          type = element.type;
          damage = element.damage;
        }
      }
      //to find the list of pokemons with the attack
      for (const element of data.pokemon) {
        for (const attack of element.attacks.fast) {
          if (args.attack === attack.name) pokemon.push(element);
        }
        for (const attack of element.attacks.special) {
          if (args.attack === attack.name) pokemon.push(element);
        }
      }
      return { name, type, damage, pokemon };
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
  },

  Mutation: {
    DeletePokemon: (parents, args) => {
      let index = data.pokemon.findIndex(
        (pokemon) => pokemon.name === args.name
      );
      return data.pokemon.splice(index, 1);
    },

    EditPokemon: (parents, args) => {
      let targetIndex = data.pokemon.findIndex(
        (pokemon) => pokemon.name === args.name
      );
      for (const key in args.edit) {
        data.pokemon[targetIndex][key] = args.edit[key];
      }
      return data.pokemon[targetIndex];
    },

    InsertPokemon: (parents, args) => {
      let newPokemon = args.input;
      data.pokemon.push(newPokemon);
      return newPokemon;
    },

    DeleteType: (parents, args) => {
      let index = data.types.indexOf(args.type);
      return data.types.splice(index, 1);
    },

    EditType: (parents, args) => {
      let index = data.types.indexOf(args.type);
      return (data.types[index] = args.newName);
    },

    InsertType: (parents, args) => {
      data.types.push(args.type);
      return data.types[data.types.length - 1];
    },

    DeleteAttack: (parents, args) => {
      let fastIndex = null;
      let specialIndex = null;
      if (
        data.attacks.fast.findIndex((attack) => attack.name === args.name) > -1
      ) {
        fastIndex = data.attacks.fast.findIndex(
          (attack) => attack.name === args.name
        );
        return data.attacks.fast.splice(fastIndex, 1);
      }

      if (
        data.attacks.special.findIndex((attack) => attack.name === args.name) >
        -1
      ) {
        specialIndex = data.attacks.special.findIndex(
          (attack) => attack.name === args.name
        );
        return data.attacks.special.splice(specialIndex, 1);
      }
      return "No Attack found";
    },

    EditAttack: (parents, args) => {
      let fastIndex = null;
      let specialIndex = null;
      if (
        data.attacks.fast.findIndex((attack) => attack.name === args.name) > -1
      ) {
        fastIndex = data.attacks.fast.findIndex(
          (attack) => attack.name === args.name
        );
        for (let key in args.edit) {
          data.attacks.fast[fastIndex][key] = args.edit[key];
        }
        return data.attacks.fast[fastIndex];
      }
      if (
        data.attacks.special.findIndex((attack) => attack.name === args.name) >
        -1
      ) {
        specialIndex = data.attacks.special.findIndex(
          (attack) => attack.name === args.name
        );
        for (let key in args.edit) {
          data.attacks.special[specialIndex][key] = args.edit[key];
        }
        return data.attacks.special[specialIndex];
      }
    },

    InsertAttack: (parents, args) => {
      if (args.class === "fast") {
        data.attacks.fast.push(args.input);
        return data.attacks.fast[data.attacks.fast.length - 1];
      }
      if (args.class === "special") {
        data.attacks.special.push(args.input);
        return data.attacks.special[data.attacks.special.length - 1];
      }
    },
  },
};
