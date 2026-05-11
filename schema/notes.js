const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { toDefaultValue } = require("sequelize/lib/utils");

const Notes = sequelize.define("Notes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    judul: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isi: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    tanggal_dibuat: {
        type: DataTypes.DATE,
        defaultValue:DataTypes.NOW
    }
}, {
    tableName: "notes",
    timestamps: false,       
    freezeTableName: true    
});

module.exports = Notes;    
