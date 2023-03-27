const path = require("path");

const { ApolloServer } = require("@apollo/server");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typesArray = loadFilesSync("**/*", { extensions: ["graphql"] });
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const server = new ApolloServer({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

async function startApolloServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer();
