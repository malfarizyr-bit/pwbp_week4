const jenisKelaminSchema = require("./jenis_kelamin/schema");
const programStudiSchema = require("./program_studi/schema");
const angkatanSchema = require("./angkatan/schema");
const mahasiswaSchema = require("./mahasiswa/schema");

const baseTypeDefs = `#graphql
    type Query {
        _empty: Boolean
    }
    type Mutation {
        _empty: Boolean
    }
`;

const typeDefs = [
    baseTypeDefs,
    jenisKelaminSchema,
    programStudiSchema,
    angkatanSchema,
    mahasiswaSchema
];

module.exports = typeDefs;
