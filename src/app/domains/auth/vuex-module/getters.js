import { isEmpty } from "lodash-es";

const isLogged = ({ user }) => !isEmpty(user);

export default {
  isLogged
};
