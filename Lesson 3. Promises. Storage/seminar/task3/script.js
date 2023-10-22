const STORAGE_KEY = 'user';
const ACTIVE_USER = 'currentUser'

const setDataInLocalStorage = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.log(e)
    return false;
  }
};

const getDataFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    return false;
  }
};

const delDataFromLocalStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    return false;
  }
};

const setUserInLocalStorage = (data) => {
  try {
    console.log(data);
    localStorage.setItem(ACTIVE_USER, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
};

const getUserFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(ACTIVE_USER));
  } catch (e) {
    return false;
  }
};

const delUserFromLocalStorage = () => {
  try {
    localStorage.removeItem(ACTIVE_USER);
    return true;
  } catch (e) {
    return false;
  }
};
