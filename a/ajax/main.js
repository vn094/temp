loadData();

function get(id) {
  return document.getElementById(id).value;
}

function registerUser(event) {
  event.preventDefault();

  const name = get("name");
  const age = get("age");
  const email = get("email");
  const password = get("password");

  const user = {
    name,
    age,
    email,
    password,
  };

  let userData = localStorage.getItem("user");
  userData = JSON.parse(userData) || [];

  userData.push(user);
  console.log(userData);
  localStorage.setItem("user", JSON.stringify(userData));

  alert("data added successfully");
  loadData();
}

function loadData() {
  let userData = localStorage.getItem("user");
  userData = JSON.parse(userData) || [];

  let table = document.getElementById("userTable");
  table.innerHTML = `
                      <th>Sr NO.</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Email</th>
                      <th>Password</th>
                    `;

  userData.map((user, index) => {
    table.innerHTML += `<tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
    </tr>`;
  });

  // table += "</tbody>";
}
