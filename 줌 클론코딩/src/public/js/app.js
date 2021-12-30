const socket = io();

const roomDiv = document.querySelector("#room");
const roomUl = roomDiv.querySelector("ul");
const roomLi = roomUl.querySelector("li");
const roomForm = roomDiv.querySelector("form");


socket.on("showRooms", (response) => {
    if (response.statusCode === 200) {
        for (const[name, _] of Object.entries(response.data)) {
            const li = document.createElement("li");
            const a = document.createElement("a");

            li.appendChild(a);
            a.innerText = name
            roomUl.append(li);
        }
    }
})

socket.on("createRoom", (response) => {
    console.log(response)

    const li = document.createElement("li");
    li.innerText = response.name;
    roomUl.append(li);
})

socket.on("joinRoom", () => {
    alert("Enter Password: ")
})

socket.on("sendMessage", () => {

})

socket.on("deleteRoom", () => {

})

socket.on("leaveRoom", () => {

})

function handleCreateRoom(event) {
    event.preventDefault();

    const name = roomForm.querySelector("#room-name");
    const password = roomForm.querySelector("#room-password");

    const nameValue = name.value
    const passwordValue = password.value
    
    socket.emit(
        "createRoom",
        {name: nameValue, password: passwordValue},
        (statusCode, data) => {
            if (statusCode === 201) {
                const li = document.createElement("li");
                const a = document.createElement("a");

                li.appendChild(a);
                a.innerText = nameValue;
                roomUl.append(li);
                
            } else if (statusCode === 409) {
                alert(`${nameValue} aleary exists!`);
            }
        }
    )

    name.value = '';
    password.value = '';
}

function handleJoinRoom(event) {
    event.preventDefault();

    const name = roomLi.querySelector("a").text;

    socket.emit(
        "joinRoom",
        {name},
        
    )

}

function handleCreateNickname(event) {

}

function handleSendMessage(event) {

}

roomForm.addEventListener("submit", handleCreateRoom);

if (roomLi) {
    roomLi.addEventListener("click", handleJoinRoom);
}