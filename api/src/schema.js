import { gql } from "apollo-server";

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
    }

    enum ShoeType {
        CASUAL
        FORMAL
        SNEAKER
        SPORT
    }

    type Shoe {
        id: ID!
        name: String!
        type: ShoeType!
        img: String!
        createdAt: String!
    }

    input ShoeFilter {
        name: String
        type: ShoeType
    }

    input NewShoeInput {
        name: String!
        type: ShoeType!
    }

    type Query {
        user: User!
        getShoeById(id: String): Shoe
        listShoes(filter: ShoeFilter): [Shoe]
    }

    type Mutation {
        createShoe(input: NewShoeInput!): Shoe!
    }
`;

export default typeDefs;
