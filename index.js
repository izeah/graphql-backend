const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const {
    ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

// connection to mongodb
mongoose.connect("mongodb://localhost:27017/bwa-graphql").then(() => {
    console.log("Successfully Connected to MONGODB");
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
