const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
    console.log("Connected");
});

socket.addEventListener("message", (message) => {
    console.log("Message: ", message.data);
});

socket.addEventListener("close", () => {
    console.log("Disconnected")
});

setTimeout(() => {
    socket.send("Hello from Client");
}, 1000);