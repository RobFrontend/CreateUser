"use strict";

// Current year
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

// Array for users
const Users = [];

// Display Users in HTML
const usersBox = document.querySelector(".created-users");
const allUsersBox = function () {
  usersBox.textContent = "";
  Users.forEach(function (user, i) {
    const html = `<p class="user-created user-created-firstname">${user.firstName}</p>
    <p class="user-created user-created-lastname">${user.lastName}</p>
    <p class="user-created user-created-age">${user.age}</p>`;
    i + 1;
    usersBox.insertAdjacentHTML("afterbegin", html);
  });
};

// OOP
const User = function (nick, firstName, lastName, birthYear, age) {
  this.nick = nick.trim();
  this.firstName =
    firstName.at(0).toUpperCase() + firstName.slice(1).toLowerCase();
  this.lastName =
    lastName.at(0).toUpperCase().trim() + lastName.slice(1).toLowerCase();
  this.birthYear = +birthYear;
  this.age = new Date().getFullYear() - birthYear;
  Users.push(this); // add user to Users array
  allUsersBox(); // display Users in HTML
};

const rob97 = new User("rob97", "Robert", "Grabowski", "1997");
const jan81 = new User("jan81", "Jan", "Kowalski", "1981");

//////////////////////////////////////////
const fNameInput = document.querySelector(".firstName");
const lNameInput = document.querySelector(".lastName");
const nickInput = document.querySelector(".nick");
const birthYearInput = document.querySelector(".birthYear");
const submit = document.querySelector(".submit");
const taken = document.querySelector(".taken");
const modal = document.querySelector(".modal-box");
const btnsCloseModal = document.querySelectorAll(".modal-btn");
const infoCreated = document.querySelector(".created-txt");
const infoNickTaken = document.querySelector(".input-nick");

const closeModal = () => modal.classList.add("hidden");
const openModal = () => modal.classList.remove("hidden");

// Create User with webpage
const createUser = function () {
  // check if that nick already exists
  const checkNick = Users.some(({ nick }) => nick === nickInput.value);
  if (checkNick === true) {
    // alert(`Nick '${nickInput.value}' already exists`);
    infoNickTaken.style.color = "#D0342C";
    infoNickTaken.textContent = `Nick '${nickInput.value}' is taken!`;
    infoNickTaken.style.opacity = "1";
    setTimeout(() => {
      infoNickTaken.style.color = "inherit";
      infoNickTaken.textContent = "Nick:";
    }, 3000);
  } else if (
    nickInput.value.length >= 5 &&
    fNameInput.value.length >= 1 &&
    lNameInput.value.length >= 1 &&
    birthYearInput.value >= 1920 &&
    birthYearInput.value <= new Date().getFullYear() &&
    checkNick === false
  ) {
    const user = new User(
      nickInput.value,
      fNameInput.value.trim(),
      lNameInput.value.trim(),
      +birthYearInput.value
    );
    infoCreated.style.visibility = "visible";
    infoCreated.style.opacity = "1";
    setTimeout(() => {
      infoCreated.style.opacity = "0";
      infoCreated.style.visibility = "hidden";
    }, 1000);
    // alert(`User created`);
  } else {
    // alert(
    //   `None field should be empty and your nick must have minimum 5 signs. The oldest date is 1920.`
    // );
    openModal();
  }
  h3.textContent = Users.map((user) => ` ${user.nick}`);
  console.log(Users);
  // reset input
  nickInput.value = "";
  fNameInput.value = "";
  lNameInput.value = "";
  birthYearInput.value = "";
  taken.style.opacity = 1;
  setTimeout(() => (taken.style.opacity = 0.5), 1500);
};

// Listeners
submit.addEventListener("click", createUser);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") createUser();
});

modal.addEventListener("click", closeModal);
btnsCloseModal.forEach((btn) => btn.addEventListener("click", closeModal));
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});

// Find User
const findUser = (findnick) => Users.find(({ nick }) => nick === findnick);

// Taken nicks
const h3 = document.querySelector("h3");

h3.textContent = Users.map((user) => ` ${user.nick}`);

///
