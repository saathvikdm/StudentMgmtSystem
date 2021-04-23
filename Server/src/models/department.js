export default (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      dept_name: DataTypes.STRING,
    },
    {}
  );

  Department.associate = function (models) {
    // associations go here
    Department.belongsTo(models.College, {
      foreignKey: "college_id",
    });

    Department.hasMany(models.User, {
      foreignKey: "deptID",
    });
  };

  return Department;
};
