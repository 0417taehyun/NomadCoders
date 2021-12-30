import http from "http";
import SocketIO from "socket.io";
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
const io = SocketIO(server);

const rooms = {};

io.on("connection", (socket) => {
    socket.emit("showRooms", {statusCode: 200, data: rooms});

    socket.on("createRoom", (message, cb) => {
        const name = message.name;
        const password = message.password;

        if (rooms[name] === undefined) {
            rooms[name] = {password, users: [socket.id]};
            cb(201, []);
            socket.broadcast.emit("createRoom", ({name}));
        } else {
            cb(makeResponse(409, []));
        }
    })

    socket.on("joinRoom", (message, cb) => {
        const name = message.name;

        if (rooms[name].password) {
            socket.emit("joinRoom", () => {

            })
        }
    })

    socket.on("createUser", (message, cb) => {

    })

    socket.on("sendMessage", () => {

    })
})

server.listen(port, handleListen);
