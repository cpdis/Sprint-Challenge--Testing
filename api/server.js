const express = require("express");
const configMiddleware = require("../config/middleware");
const server = express();
const db = require("../data/dbConfig");

configMiddleware(server);

server.get("/", async (req, res) => {
    res.status(200).json({
        message: "WORKING!"
    });
});

server.get("/games", async (req, res) => {
    const games = await db("games");

    try {
        res.status(200).json(games)
    } catch (err) {
        res.status(500).json({
            message: "Error getting list of games."
        })
    }
})

module.exports = server;