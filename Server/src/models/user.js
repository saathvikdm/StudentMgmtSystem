export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      type: DataTypes.STRING,
      sno: DataTypes.STRING,
    },
    {}
  );

  User.associate = function (models) {
    // associations go here

    User.hasMany(models.Marks, {
      foreignKey: "userID",
      as: "marks",
    });

    User.belongsTo(models.Department, {
      foreignKey: "deptID",
      as: "dept",
    });

    User.belongsTo(models.Semsec, {
      foreignKey: "ssid",
    });
  };

  return User;
};
