'use strict'
module.exports = (sequelize, DataTypes) => {
        var Company = sequelize.define('Company', {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });

        return Company;
};