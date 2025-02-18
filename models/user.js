module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
	surname: {
	    type: DataTypes.STRING,
            allowNull: false
	},
	email: {
	    type: DataTypes.STRING,
            allowNull: false
	},
	dept: {
	    type: DataTypes.STRING,
            allowNull: false
	},
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
};
