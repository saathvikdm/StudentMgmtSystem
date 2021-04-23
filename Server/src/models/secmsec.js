export default (sequelize, DataTypes) => {
  const Semsec = sequelize.define(
    "Semsec",
    {
      ssid: { type: DataTypes.STRING, primaryKey: true },
      sem: DataTypes.STRING,
      sec: DataTypes.STRING,
    },
    {}
  );

  Semsec.associate = function (models) {
    // associations go here
    Semsec.hasMany(models.Marks, { foreignKey: "ssid" });
    Semsec.hasMany(models.User, { foreignKey: "ssid" });
  };

  return Semsec;
};
