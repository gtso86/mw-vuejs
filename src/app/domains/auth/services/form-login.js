const formLogin = (http, { email, password }) =>
  http.post("/auth/login", { email, password }).then(({ data }) => data);

export default formLogin;
