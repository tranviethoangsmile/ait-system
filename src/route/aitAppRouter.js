import express from "express";
import aitAppController from "../controller/home/homeController";
import aitLogin from "../controller/login/loginController"
const route = express.Router();

let aitAppRouter = (app) => {
    route.get('/home', aitAppController.getHome);
    route.get('/', aitLogin.getLogin);

    return app.use('/', route);
}

module.exports = aitAppRouter;
