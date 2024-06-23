const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  person_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

sequelize
  .sync({ force: true }) // `force: true`는 기존 테이블을 삭제하고 새로 생성. 실제 배포에서는 `force: false`로 설정.
  .then(() => {
    console.log("User table created");
  })
  .catch((error) => {
    console.error("Unable to create table:", error);
  });

const createUser = async (username, password, person_name, address, phone) => {
  try {
    const user = await User.create({ username, password, person_name, address, phone });
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const findUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    return user;
  } catch (error) {
    throw new Error("Error finding user: " + error.message);
  }
};

module.exports = { User, createUser, findUserByUsername };
