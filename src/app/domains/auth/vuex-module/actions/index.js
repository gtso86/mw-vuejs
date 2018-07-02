import { isEmpty } from "lodash-es";
import { loadToken, storeToken } from "../../services/token";
import { loadUserData } from "../../services/user";
import formLogin from "../../services/form-login";
import * as types from "../mutations/types";

const attemptLogin = ({ dispatch }, { http, formData }) => {
  return formLogin(http, formData).then(({ data }) => {
    return dispatch("setToken", data.token).then(() => {
      return dispatch("loadUser", http);
    });
  });
};

const setToken = ({ commit }, token) => {
  storeToken(token);
  commit(types.setToken, token);
  return Promise.resolve(token);
};

const loadUser = ({ commit }, http) =>
  loadUserData(http)
    // store user's data
    .then(({ data }) => commit(types.setUser, data))
    .catch(e => {
      // console.warn(e);
      // Process failure, delete the token
      commit(types.setToken, "");
      return Promise.reject(e); // keep promise chain
    });

const checkUserToken = ({ state, dispatch }, http) => {
  // If the token exists then all validation has already been done
  if (!isEmpty(state.token)) {
    return Promise.resolve(state.token);
  }

  return (
    loadToken()
      .then(token => {
        if (isEmpty(token)) {
          // Token is not saved in localstorage
          return Promise.reject(new Error("NO_TOKEN")); // Reject promise
        }

        // Put the token in the vuex store
        return dispatch("setToken", token); // keep promise chain
      })
      // With the token in hand, retrieves the user's data, validating the token
      .then(() => dispatch("loadUser", http))
  );
};

export default {
  setToken,
  loadUser,
  attemptLogin,
  checkUserToken
};
