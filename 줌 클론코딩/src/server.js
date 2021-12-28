import http from "http";
import { WebSocketServer } from "ws";
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

const sockets = {};

function makeMessage(type, payload) {
    const message = {type, payload};
    return JSON.stringify(message);
}


wss.on("connection", (socket, req) => {
    const id = req.headers["sec-websocket-key"];

    socket.nickname = "Anonymous";
    sockets[id] = socket;

    socket.on("message", (message) => {
        const response = JSON.parse(message);
        
        switch (response.type) {
            case "nickname":
                sockets[id].nickname = response.payload;
                break;

            case "message":

                const nickname = sockets[id].nickname;

                for (const [_, socketInformation] of Object.entries(sockets)) {
                    const payload = {nickname, "message": response.payload};
                    socketInformation.send(makeMessage("message", payload));                
                };
                break;
        }

    });

    socket.on("close", () => {
        const nickname = sockets[id].nickname;
        delete sockets[id];

        for (const [_, socketInformation] of Object.entries(sockets)) {
            const pyaload = {nickname, "message": "Lefted"}
            socketInformation.send(makeMessage("closed", payload));
        }
        console.log("Disconnected")
    });
});

server.listen(port, handleListen);
