const loadUserData = http => http.get("/auth/me").then(({ data }) => data);

export { loadUserData };
