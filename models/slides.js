

module.exports = (sequelize, DataTypes) => {
	const Slides = sequelize.define('Slides', {
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
		image: {
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
	Slides.associate = function (models) {
		// Slides.hasMany(models.Roles, {
		// 	foreignKey: 'role_id',
		// });
	};
	(async () => {
		// await sequelize.sync({ force: true });
		// Code here
	  })();
	return Slides;
};
