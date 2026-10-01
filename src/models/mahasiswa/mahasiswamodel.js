const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Mahasiswa = sequelize.define(
    "Mahasiswa",
    {
        id_mahasiswa: {
            type: DataTypes.CHAR(36),
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        nim: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },

        nama: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },

        id_jenis_kelamin: {
            type: DataTypes.CHAR(36),
            allowNull: false
        },

        tempat_lahir: {
            type: DataTypes.STRING(50),
            allowNull: true
        },

        tanggal_lahir: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },

        alamat: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        no_hp: {
            type: DataTypes.STRING(15),
            allowNull: true
        },

        email: {
            type: DataTypes.STRING(100),
            allowNull: true
        },

        id_program_studi: {
            type: DataTypes.CHAR(36),
            allowNull: false
        },

        id_angkatan: {
            type: DataTypes.CHAR(36),
            allowNull: false
        },

        create_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        update_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        delete_at: {
            type: DataTypes.DATE,
            allowNull: true
        }

    },
    {
        tableName: "mahasiswa",
        timestamps: false
    }
);

module.exports = Mahasiswa;
