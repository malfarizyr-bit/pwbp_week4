const express = require("express");
const cors = require("cors");
const app = express();

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");

const typeDefs = require("./graphql/schema");

const jenisKelaminResolvers = require("./graphql/jenis_kelamin/resolvers");

const