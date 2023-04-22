const express = require('express');
const adminRouter = express.Router();

const { makeUserAdmin, getAllUsers } = require("../controllers/admin");
const authentication = require('../middleware/authentication');
const adminCheckAuth = require('../middleware/adminCheck');


adminRouter.get("/admin/makeUserAdmin/:userId",authentication,adminCheckAuth, makeUserAdmin);
adminRouter.get("/admin/allUsers",authentication,adminCheckAuth, getAllUsers);


module.exports = adminRouter;
