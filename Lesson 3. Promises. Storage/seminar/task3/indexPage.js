const greetingContainer = document.querySelector('#greeting');

function exit() {
  let btn = document.querySelector('#exit');
  if (btn) {
    btn.removeEventListener('click', exit);
    btn = null;
  }
  delUserFromLocalStorage();
  renderContent();
}

const setActionToExitBtn = () => {
  let btn = document.querySelector('#exit');
  if (btn) {
    btn.addEventListener('click', exit);
    btn = null;
  }
}

const renderContent = () => {
  const activeUser = getUserFromLocalStorage();
  console.log(activeUser);
  if (activeUser) {
    greetingContainer.innerHTML = `<div class="authorized">
        <h1>${activeUser}</h1>
        <button id="exit">exit</button>
      </div>`
    setActionToExitBtn();
  } else {
    greetingContainer.innerHTML = '<h1>Hello Stranger</h1>'
  }
}

document.addEventListener('DOMContentLoaded', renderContent)
