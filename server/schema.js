const { gql } = require("apollo-server");

const typeDefs = gql`
  # Your schema goes here.
  # The schema should model the full data object available!

  type Pokemon {
    id: String!
    name: String!
    classification: String
    types: [String]
    height: Height
    weight: Weight
    evolutionRequirements: EvolutionRequirement
    previousEvolutions: [Evolutions]
    evolutions: [Evolutions]
    maxCP: Int
    maxHP: Int
    attacks: Attacks
  }

  type Height {
    minimum: String
    maximum: String
  }

  type Weight {
    minimum: String
    maximum: String
  }

  type Evolutions {
    id: Int!
    name: String
  }

  type EvolutionRequirement {
    amount: Int!
    name: String!
  }

  type Attacks {
    fast: [oneAttack]
    special: [oneAttack]
  }

  type oneAttack {
    name: String
    type: String
    damage: Int
  }

  type Query {
    Pokemons: [Pokemon]
    FindPokemonByName(name: String!): Pokemon
    FindPokemonById(id: String!): Pokemon
    FindPokemonByType(type: String!): [Pokemon]
    Attacks: Attacks
    FindAttacksByClass(name: String!): [oneAttack]
    FindAttacksByName(name: String!): oneAttack
    Types: [String]
  }
`;

module.exports = typeDefs;
