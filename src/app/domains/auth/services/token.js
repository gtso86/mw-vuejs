const storeToken = token => {
  window.localStorage.setItem("APP_TOKEN", token);
};

const loadToken = () => {
  return Promise.resolve(window.localStorage.getItem("APP_TOKEN"));
};

export { loadToken, storeToken };
