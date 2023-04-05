// // //перше задвання
fetch("http://127.0.0.1:5500/home_work.json")
  .then((response) => response.json())
  .then((data) => showAdminName(data)); //Nikola

function showAdminName(data) {
  for (let key in data) {
    if (data[key].isAdmin === true) {
      console.log(data[key].name);
    }
  }
}

//друге завдання
let nikola = { firstName: "Nikola", LastName: "Tesla" };
let bob = { firstName: "Bob" };
let mike = { LastName: "Smith" };
let michael = {};

let getFullName = function (user) {
  return `${user.firstName} ${user.LastName}`;
};
let getName = new Proxy(getFullName, {
  apply(target, thisArg, args) {
    let [user] = args;
    if (!user.firstName && !user.LastName) {
      return "No name";
    } else if (!user.firstName) {
      return `${user.LastName}`;
    } else if (!user.LastName) {
        return `${user.firstName}`;
    } else {
        return target(user);
    }
  },
});
console.log(getName(nikola)); //Nikola Tesla
console.log(getName(bob)); //Bob
console.log(getName(mike)); //Smith
console.log(getName(michael)); //No name

//третє завдання
let users = [
    {name: "Nikola", age: 18, id: 1},
    {name: "Bob", age: 25, id: 2},
    {name: "Mike", age: 32, id: 3},
];
localStorage.setItem("users", JSON.stringify(users));

function sayHelloToUser (id) {
    let userData = JSON.parse(localStorage.getItem("users"));
    let user = userData.find((user) => user.id === id);
    if (user) {
        console.log(`Hello: ${user.name}!`);
    } else {
        console.log("User not found.")
    }
}
sayHelloToUser (3);//Hello: Mike!

//четверте завдання
let input = document.querySelector("input[type='text']");
input.addEventListener("input", (event) => {
  let value = event.target.value;
  localStorage.setItem("inputText", value);
});
let savedData = localStorage.getItem("inputText");
if (savedData) {
  input.value = savedData;
}
