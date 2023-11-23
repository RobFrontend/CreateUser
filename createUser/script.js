"use strict";

// Array for users
const Users = [];

// OOP
const User = function (nick, firstName, lastName, birthYear, age) {
  this.nick = nick;
  this.firstName = firstName;
  this.lastName = lastName;
  this.biirthYear = +birthYear;
  this.age = new Date().getFullYear() - birthYear;
  Users.push(this);
};

const rob97 = new User("rob97", "Robert", "Grabowski", "1997");
const jan81 = new User("jan81", "Jan", "Kowalski", "1981");

console.log(Users);

//////////////////////////////////////////
const fNameInput = document.querySelector(".firstName");
const lNameInput = document.querySelector(".lastName");
const nickInput = document.querySelector(".nick");
const birthYearInput = document.querySelector(".birthYear");
const submit = document.querySelector(".submit");

// Create User with webpage
const createUser = function () {
  // check if that nick already exists
  const checkNick = Users.some(({ nick }) => nick === nickInput.value);
  if (checkNick === true) {
    alert(`Nick '${nickInput.value}' already exists`);
  } else {
    const user = new User(
      nickInput.value,
      fNameInput.value,
      lNameInput.value,
      +birthYearInput.value
    );
    alert(`User created`);
  }
  console.log(Users);
  // reset input
  nickInput.value = "";
  fNameInput.value = "";
  lNameInput.value = "";
  birthYearInput.value = "";
};

// Listener
submit.addEventListener("click", createUser);

// Find User
const findUser = (findnick) => Users.find(({ nick }) => nick === findnick);
