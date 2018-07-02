import SigninPage from "../signin.vue";

const routes = [
  {
    path: "/auth/signin",
    component: SigninPage,
    meta: {
      needAuth: false
    }
  }
];

export default routes;
