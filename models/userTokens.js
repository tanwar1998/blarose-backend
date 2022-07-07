

module.exports = (sequelize, DataTypes) => {
	const UserTokens = sequelize.define('UserTokens', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		userId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,

            references: {
                model: 'Users',
                key: 'id'
            }
		},
		platform: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		fcmToken: {
			type: DataTypes.STRING,
		},
		createdAt:
		{
			type: DataTypes.DATE, field: 'created_at',
		},
		updatedAt: {
			type: DataTypes.DATE, field: 'updated_at',
		},

	}, {
		paranoid: true,
	});
	UserTokens.associate = function (models) {
		// Users.hasMany(models.Roles, {
		// 	foreignKey: 'role_id',
		// });
	};
	(async () => {
		// await sequelize.sync();
		// Code here
	  })();
	return UserTokens;
};
