const socket = io();

const serachRoomInput = document.querySelector("#search-room-input");
const searchRoomBtn = document.querySelector("#search-room-btn");
const createRoomBtn = document.querySelector("#create-room-btn");

const createRoomContainer = document.querySelector("#create-room");
const modalExitBtn = document.querySelector("#modal-exit-btn");
const modalEnterBtn = document.querySelector("#modal-enter-btn");


function searchRoomHandler(event) {
    event.preventDefault();
    const value = serachRoomInput.value;
    socket.emit("searchRoom", (value) => {

    });

    serachRoomInput.value = "";
}


function createRoomHandler(event) {
    event.preventDefault();

    createRoomContainer.style.display = "flex";


}

function modalExitHandler(event) {
    event.preventDefault();

    createRoomContainer.style.display = "none";
}

function modalEnterHandler(event) {
    event.preventDefault();

    joinRoomContainer.querySelector("")

    socket.emit("joinRoom", )
}

socket.on("joinRoom", () => {

})

searchRoomBtn.addEventListener("click", searchRoomHandler);
createRoomBtn.addEventListener("click", createRoomHandler);
modalExitBtn.addEventListener("click", modalExitHandler);
modalEnterBtn.addEventListener("click", modalEnterHandler);