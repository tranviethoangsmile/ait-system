import express from "express";

let aitAppConfig = (app) => {
    app.use(express.static("public"));
    app.set('view engine', 'ejs');
    app.set('views', './src/views/page');
}

module.exports = aitAppConfig;
