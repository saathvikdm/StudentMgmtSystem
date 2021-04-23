export default (sequelize, DataTypes) => {
  const Course = sequelize.define(
    "Course",
    {
      subcode: { type: DataTypes.STRING, primaryKey: true },
      title: DataTypes.STRING,
      sem: DataTypes.STRING,
      credits: DataTypes.STRING,
    },
    {}
  );

  Course.associate = function (models) {
    // associations go here
    Course.hasMany(models.Marks, { foreignKey: "subcode" });
  };

  return Course;
};
