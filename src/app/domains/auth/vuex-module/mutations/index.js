import { isEqual, get, set, split, tail } from "lodash-es";
import * as types from "./types";

const getPathKey = key => tail(split(key, ":"));

const makeMutation = name => {
  const pathKey = getPathKey(name);

  return (store, value) => {
    const old = get(store, pathKey);

    if (!isEqual(old, value)) {
      set(store, pathKey, value);
    }
  };
};

const mutations = Object.values(types).reduce((acc, name) => {
  acc[name] = makeMutation(name);
  return acc;
}, {});

export default mutations;
