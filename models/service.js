

module.exports = (sequelize, DataTypes) => {
	const Services = sequelize.define('Services', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		item: {
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
	Services.associate = function (models) {
		// Services.hasMany(models.Roles, {
		// 	foreignKey: 'role_id',
		// });
	};
	(async () => {
		// await sequelize.sync();
		// Code here
	  })();
	return Services;
};
