module.exports = (sequelize, DataTypes) => {
	const PPLocation = sequelize.define('PPLocation', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		text: {
			type: DataTypes.STRING,
			allowNull: false,
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
	PPLocation.associate = function (models) {
		// PPLocation.hasMany(models.Roles, {
		// 	foreignKey: 'role_id',
		// });
	};
	(async () => {
		// await sequelize.sync();
		// Code here
	  })();
	return PPLocation;
};
