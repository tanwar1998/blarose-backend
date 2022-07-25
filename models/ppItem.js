module.exports = (sequelize, DataTypes) => {
	const PPItem = sequelize.define('PPItem', {
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
		locationId: {
			type: DataTypes.INTEGER,
			onDelete: 'NO ACTION',
			references: {
				model: 'PPLocations',
				key: 'id',
			},
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
	PPItem.associate = function (models) {
		PPItem.hasMany(models.PPLocation, {
			foreignKey: 'id',
		});
	};
	(async () => {
		// await sequelize.sync();
		// Code here
	  })();
	return PPItem;
};
