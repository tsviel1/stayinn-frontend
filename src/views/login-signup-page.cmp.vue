<template>
<section class="login-signup-container">
  <form v-if="isUser" class="container home-page main-layout">
    <div class="login-header">
      <h2>Good to see you again</h2>
    </div>
    <div class="login-section">
      <div>
      <p>Your Username</p>
      <input class="input" type="text" placeholder="e.g pukii886">
      </div>
      <div>
        <p>Your password</p>
        <input class="input" type="password" placeholder="eg iloveStayin123">
      </div>
      <div>
        <button class="signup-btn">Sign in</button>
      </div>
      <a @click="isUser=!isUser">Dont have an account? sign up</a>
    </div>
  </form>
  <form v-else class="container home-page main-layout">
    <div class="signup-section">
      <h2 class="signup-header">Welcome to Stayin</h2>
      <input class="input" type="text" placeholder="Full name">
      <input class="input" type="text" placeholder="Username">
      <input class="input" type="password" placeholder="Password">
      <input class="input" type="text" placeholder="Email">
      <button class="signup-btn">Sign up</button>
    </div>


  </form>
</section>
</template>
 <script>
 export default {
 name: 'login-signup',
    components: {},
  data() {
   return {
    isUser:true
   };
    },
  created() {},
 methods: {},
 computed: {},
 unmounted() {},
  };
  </script>
 <style></style>