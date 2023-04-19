const appListen = require("./app");
const database = require("./config/db");


database();

appListen();