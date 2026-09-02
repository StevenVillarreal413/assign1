async function userListController(){
    let response = await fetch('http://localhost:3000/users');
    let user = await response.json();
    userListView(users);
    return users;
}

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