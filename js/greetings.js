const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

/*
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault(); // 어떤 event의 기본 행동이든지 발생되지 않도록 막는 함수
  // form을 submit하면 브라우저는 기본적으로 페이지 새로고침함 => 위 func이 이를 막고 있는 것
  //  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  //greeting.innerText = `Hello ${savedUsername}`;
  paintGreetings(savedUsername);
}
*/
//loginForm.addEventListener("submit", onLoginSubmit);
// onLoginSubmit에서 ()을 추가하면 function을 '즉시' 실행한다는 뜻
// 따라서 addEventListener를 활용할 땐 function의 이름만 적어주고 지정한 이벤트가 발생했을 때만 브라우저가 해당 function 실행시키도록
// js는 onLoginSubmit함수의 1st argument로 발생한 일에 대해 네가 필요로 할만한 정보들을 주는 것
// 모든 EventListener func의 1st argument는 항상 지금 막 벌어진 일들에 대한 정보
// function handleLinkClick(event) {
//   event.preventDefault();
//   console.log(event);
// }
// link.addEventListener("click", handleLinkClick);
