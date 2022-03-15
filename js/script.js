fetch("http://localhost:3000/users")
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});

const url = "http://localhost:3000/users";

async function getAllUsers() {
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
}
// getAllUsers();

async function getUser(userId) {
    const response = await fetch(`${url}/${userId}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
}
getUser(83);

let user = {
    firstName: "John",
    lastName: "Doe",
    username: "JohnDoe",
    email: "john.doe@email.com",
    gender: "Male",
};

async function createUser(userInfo) {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
}
// createUser(user);

const data = {
    firstName: "Abraham",
};

async function updateUser(userId, userData) {
    const response = await fetch(`${url}/${userId}`, {
        method: "PATCH",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type" : "application/json",
        },
    });
    const data = await response.json();
    console.log(data);
}
// updateUser(69, data);

async function deleteUser(userId) {
    const response = await fetch(`${url}/${userId}`, {
        method: "DELETE",
    })
    const data = await response.json();
    console.log(data);
}
// deleteUser(83);