const registerForm = document.querySelector("#registerForm");
const userLogin = document.querySelector("#userName");
const userPassword = document.querySelector("#userPassword");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const login = userLogin.value;
  const password = userPassword.value;

  const users = getDataFromLocalStorage();
  if (users) {
    setDataInLocalStorage({
      ...users,
      [login]: password,
    })
  } else {
    setDataInLocalStorage({
      [login]: password,
    })
  }
  setUserInLocalStorage(login);
  window.location.href = "index.html";
});
