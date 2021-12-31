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


// fake database
const rooms = {};


io.on("connection", (socket) => {
    io.sockets.emit("showRooms", rooms);

    socket.on("createRoom", (message) => {
        const users = [{nickname: message.nickname, sid: socket.id}]
        const name = message.name;
        const password = message.password;
        const type = message.type;

        rooms[name] = {password, type, users};
        socket.join(name);
        io.sockets.emit("showRooms", rooms);
    })

    socket.on("joinRoom", (message, callBack) => {
        if (rooms.get(message.roomName) !== undefined) {
            // 해당 방이 존재하지 않는 경우

        } else {
            const roomInfo = rooms.get(message.roomName);

            if (
                (roomInfo.type === "public") ||
                (
                    (roomInfo.type === "private") &&
                    (roomInfo.password === message.password)
                )
            ) {
                roomInfo.users.push({nickname, sid: socket.id});

                // 방에 정상적으로 입장했을 때 환영 인사
                socket.to(message.roomName).emit("sendMessage", );

            } else {
                // private 방인데 비밀번호가 틀린 경우
            }
        }
    })

    socket.on("leaveRoom", (message) => {
        // 방을 떠났을 때 떠났다는 걸 알려야 한다.
        
        socket.leave()
    })
    
})

server.listen(port, handleListen);
