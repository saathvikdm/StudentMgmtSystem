import passport from "passport";
import config from "../config/config";
import { allowOnly } from "../services/routesHelper";
import {
  create,
  login,
  findAllUsers,
  findById,
  update,
  deleteUser,
  classStudents,
  viewTeachers,
} from "../controllers/user";

import { updateMarks } from "../controllers/marks";

module.exports = (app) => {
  // create a new user
  app.post(
    "/api/users/create",
    // passport.authenticate("jwt", { session: false }),
    // allowOnly(config.accessLevels.admin, create)
    create
  );

  // user login
  app.post("/api/users/login", login);

  //retrieve all users
  app.get(
    "/api/users",
    passport.authenticate("jwt", {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, findAllUsers)
    // findAllUsers
  );

  // retrieve user by id
  app.get(
    "/api/users/:userId",
    passport.authenticate("jwt", {
      session: false,
    }),
    allowOnly(config.accessLevels.user, findById)
    // findById
  );

  // update a user with id
  app.put(
    "/api/users/:userId",
    passport.authenticate("jwt", {
      session: false,
    }),
    allowOnly(config.accessLevels.user, update)
  );

  // delete a user
  app.delete(
    "/api/users/:userId",
    passport.authenticate("jwt", {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, deleteUser)
  );

  // List all users of a semsec class
  app.get(
    "/api/users/class/:ssid",
    passport.authenticate("jwt", {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, classStudents)
  );

  app.get(
    "/api/teachers",
    passport.authenticate("jwt", {
      session: false,
    }),
    allowOnly(config.accessLevels.admin, viewTeachers)
  );

  //update marks of a subject
  app.put(
    "/api/marks",
    passport.authenticate("jwt", {
      session: false,
    }),
    allowOnly(config.accessLevels.user, updateMarks)
  );
};
