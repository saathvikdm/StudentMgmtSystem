export default (sequelize, DataTypes) => {
  const Marks = sequelize.define(
    "Marks",
    {
      // sno: {
      //   type: DataTypes.STRING,
      //   references: {
      //     model: User, // 'Movies' would also work
      //     key: "sno",
      //   },
      // },
      test1: DataTypes.STRING,
      test2: DataTypes.STRING,
      test3: DataTypes.STRING,
      finalIa: DataTypes.STRING,
    },
    {}
  );

  Marks.associate = function (models) {
    // associations go here
    Marks.belongsTo(models.User, {
      foreignKey: "userID",
    });
    Marks.belongsTo(models.Course, {
      foreignKey: "subcode",
      targetKey: "subcode",
    });
    Marks.belongsTo(models.Semsec, {
      foreignKey: "ssid",
      targetKey: "ssid",
    });
  };

  return Marks;
};
