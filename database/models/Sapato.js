module.exports = (sequelize, DataTypes) => {
    const tableDefinitions = {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        descricao: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.INTEGER,
        },
        filename: {
            type: DataTypes.STRING,
        }
    }

    const tableConfiguration = {
        tableName: 'sapatos',
        timestamps: false,
    }
    
    const Sapato = sequelize.define('Sapato', tableDefinitions, tableConfiguration);
    return Sapato
}