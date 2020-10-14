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
    evolutions: [Evolutions]
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

  type Query {
    Pokemons: [Pokemon]
    Pokemon(name: String!): Pokemon
  }
`;

module.exports = typeDefs;
