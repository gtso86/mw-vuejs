<template class="container-fluid">
  <section class="row justify-content-center">
    <form class="form-signin col-3">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label
        for="inputEmail"
        class="sr-only"
      >Email address</label>
      <input
        id="inputEmail"
        type="email"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      >
      <label
        for="inputPassword"
        class="sr-only"
      >Password</label>
      <input
        id="inputPassword"
        type="password"
        class="form-control"
        placeholder="Password"
        required
      >
      <div class="checkbox mb-3">
        <label>
          <input
            type="checkbox"
            value="remember-me"
          > Remember me
        </label>
      </div>
      <button
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      >Sign in</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "UnitAuth"
};
</script>

<style lang="scss" scoped>
html {
  height: 100%;
}

body {
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  .checkbox {
    font-weight: 400;
  }

  .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
    &:focus {
      z-index: 2;
    }
  }

  input {
    &[type="email"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    &[type="password"] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}
</style>
