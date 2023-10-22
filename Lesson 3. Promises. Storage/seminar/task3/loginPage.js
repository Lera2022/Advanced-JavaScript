const loginForm = document.querySelector('#loginForm');
const userLogin = document.querySelector("#userName");
const userPassword = document.querySelector("#userPassword");

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const users = getDataFromLocalStorage();
  if (!users) return;

  const login = userLogin.value;
  const password = userPassword.value;

  if (users[login] === password) {
    setUserInLocalStorage(login);
    window.location.href = "index.html";
    return;
  }
  delUserFromLocalStorage();
})
