

module.exports = (sequelize, DataTypes) => {
	const SuccessStory = sequelize.define('SuccessStory', {
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
		paranoid: true
	});
	SuccessStory.associate = function (models) {
		// SuccessStory.hasMany(models.Roles, {
		// 	foreignKey: 'role_id',
		// });
	};
	(async () => {
		// await sequelize.sync({ force: true });
		// await sequelize.sync();
		// Code here
	  })();
	return SuccessStory;
};
