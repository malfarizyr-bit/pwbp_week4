const JenisKelamin = require("../../models/jenis_kelamin/jenisKelaminmodel");
const resolvers = {
    Query: {
        jenisKelamin: async () => {
            return await JenisKelamin.findAll({
                order: [
                    ["nama", "ASC"]
                ]
            });
        },
        jenisKelaminById: async (_, { id }) => {
            const data = await JenisKelamin.findOne({
                where: {
                    id_jenis_kelamin: id
                }
            });
            if (!data) {
                throw new Error("Jenis kelamin tidak ditemukan");
            }
            return data;
        },
        cariJenisKelamin: async (_, { keyword }) => {
            const { Op } = require("sequelize");
            return await JenisKelamin.findAll({
                where: {
                    [Op.or]: [
                        {
                            kode: {
                                [Op.like]: '%${keyword}%'
                            }
                        }
                    ]
                },
                order: [
                    ["nama", "ASC"]
                ]
            });
        }
    },
    tambahJenisKelamin
}