async function userListController(){
    let response = await fetch('http://localhost:3000/users');
    let users = await response.json();
    userListView(users);
    return users;
}
document.getElementById("refresh").addEventListener("click", userListController);

document.getElementById("adduserform").addEventListener("submit", async function(event) {
    event.preventDefault();

    let form = document.getElementById("adduserform");
    let formData = new FormData(form);
    let uname = formData.get("username");
    let lastname = formData.get("lastname");
    let firstname = formData.get("firstname");
    let passwd = formData.get("passwd");
    let email = formData.get("email");
    let role = formData.get("urole");
    let response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
            username: uname,
            lastname: lastname,
            firstname: firstname,
            passwd: passwd,
            email: email,
            urole: role
        })
    });
    form.reset();
    userListController();
});

function userListView(users){
    let table = document.getElementById("usertable");
    let view = `<thead><tr><th>User ID</th>` +
               `<th>Last Name</th>` + 
               `<th>First Name</th>` + 
               `<th>Email</th>` + 
               `<th>Username</th>` +
               `<th>Password</th></tr></thead>`;
    users.forEach(user => {
        view = view +
        `<tr><td>${user['userID']}</td>` +
        `<td>${user['lastname']}</td>` +
        `<td>${user['firstname']}</td>` +
        `<td>${user['email']}</td>` +
        `<td>${user['username']}</td>` +
        `<td>${user['passwd']}</td></tr>`;
    });
    table.innerHTML = view;
}