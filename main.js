const users = {};
for (let i = 0; i < 3; i++) {
  let id = i + 1;
  let name = prompt("Ismingizni kiriting");
  let age = +prompt("Yoshingizni kiriting");
  users.id = "Foydalanuvchi :" + id;
  users.name = "Ismi :" + name;
  users.ager = "Yoshi :" + age;
    for (const key in users) {
      console.log(users[key]);  
    }
}
