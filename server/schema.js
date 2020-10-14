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

  type pokemonByAttack {
    name: String
    type: String
    damage: Int
    pokemon: [Pokemon]
  }

  type Query {
    Pokemons: [Pokemon]
    FindPokemonByName(name: String!): Pokemon
    FindPokemonById(id: String!): Pokemon
    FindPokemonByType(type: String!): [Pokemon]
    FindPokemonByAttack(attack: String!): pokemonByAttack
    Attacks: Attacks
    FindAttacksByClass(name: String!): [oneAttack]
    FindAttacksByName(name: String!): oneAttack
    Types: [String]
  }

  input PokeInput {
    id: String
    name: String
    classification: String
    types: [String]
    height: HeightInput
    weight: WeightInput
    evolutionRequirements: EvolutionRequirementInput
    previousEvolutions: [EvolutionsInput]
    evolutions: [EvolutionsInput]
    maxCP: Int
    maxHP: Int
    attacks: AttacksInput
  }

  input HeightInput {
    minimum: String
    maximum: String
  }

  input WeightInput {
    minimum: String
    maximum: String
  }

  input EvolutionsInput {
    id: Int!
    name: String
  }

  input EvolutionRequirementInput {
    amount: Int!
    name: String!
  }

  input AttacksInput {
    fast: [oneAttackInput]
    special: [oneAttackInput]
  }

  input oneAttackInput {
    name: String
    type: String
    damage: Int
  }

  type Mutation {
    DeletePokemon(name: String!): [Pokemon]
    EditPokemon(name: String!, edit: PokeInput): Pokemon
    InsertPokemon(input: PokeInput): Pokemon

    DeleteType(type: String!): [String]
    EditType(type: String!, newName: String!): String
    InsertType(type: String!): String

    DeleteAttack(name: String!): oneAttack
    EditAttack(name: String!, edit: oneAttackInput): oneAttack
    InsertAttack(class: String!, input: oneAttackInput): oneAttack
  }
`;

module.exports = typeDefs;
