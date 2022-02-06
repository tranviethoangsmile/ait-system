import express from "express";
import aitAppConfig from './config/aitAppConfig';
import aitAppRouter from './route/aitAppRouter';
import db from './config/aitConnectDB';
const port = process.env.PORT || 8081;
const app = express();
db();
aitAppConfig(app);
aitAppRouter(app);


app.listen(port, () => {
    console.log(`AIT APP RUNNING ON THE ${port}`)
})