import http from "http";
import WebScoket, { WebSocketServer } from "ws";
import express from "express";

const app = express();
const port = 3000;


app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:${port}`)

const server = http.createServer(app);
const wss = new WebSocketServer({server});


wss.on("connection", (socket) => {
    console.log("Connected");
    socket.on("message", (message) => {
        console.log(message.toString('utf8'));
    });
    socket.on("close", () => {
        console.log("Disconnected")
    })
    socket.send("Hello!");
});

server.listen(port, handleListen);
