import { ApolloServer } from "apollo-server";
import { models } from "./db/index.js";
import resolvers from "./resolvers.js";
import typeDefs from "./schema.js";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        return {
            models,
        };
    },
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
