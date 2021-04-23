export default (sequelize, DataTypes) => {
  const College = sequelize.define(
    "College",
    {
      college_name: DataTypes.STRING,
    },
    {}
  );

  College.associate = function (models) {
    // associations go here
    College.hasMany(models.Department, {
      foreignKey: "college_id",
    });
  };

  return College;
};
