const messageList = document.querySelector("ul");
const messageForm = document.querySelector("#message");
const nicknameForm = document.querySelector("#nickname")

const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected");
    console.log("socket: ", socket);
});

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
    console.log("Message: ", message.data);
});

socket.addEventListener("close", () => {
    console.log("Disconnected")
});

function makeMessage(type, payload) {
    const message = {type, payload};
    return JSON.stringify(message);
}

function handleMessageSubmit(event) {
    event.preventDefault();
    const input = messageForm.querySelector("input");

    socket.send(makeMessage("message", input.value));
    input.value = "";
}

function handleNicknameSubmit(event) {
    event.preventDefault();
    const input = nicknameForm.querySelector("input");
    
    socket.send(makeMessage("nickname", input.value));
    input.value = "";
}

messageForm.addEventListener("submit", handleMessageSubmit);
nicknameForm.addEventListener("submit", handleNicknameSubmit);
