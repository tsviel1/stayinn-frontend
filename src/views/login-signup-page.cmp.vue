<template>
  <section class="login-signup-container">
    <form v-if="isUser" @submit.prevent="doLogin" class=" home-page main-layout-details">
      <div class="login-header">
        <h2>Good to see you again</h2>
      </div>
      <div class="login-section">
        <div>
          <p>Your Username</p>
          <input v-model="loginCred.username" class="input" type="text" placeholder="e.g pukii886">
        </div>
        <div>
          <p>Your password</p>
          <input v-model="loginCred.password" class="input" type="password" placeholder="eg iloveStayin123">
        </div>
        <div>
          <button class="signup-btn">Sign in</button>
        </div>
        <a @click="isUser = !isUser">Dont have an account? sign up</a>
      </div>
    </form>
    <form v-else @submit.prevent="doSignup" class="container home-page main-layout">
      <div class="signup-section">
        <h2 class="signup-header">Welcome to StayInn</h2>
        <input v-model="signupCred.fullname" class="input" type="text" placeholder="Full name">
        <input v-model="signupCred.username" class="input" type="text" placeholder="Username">
        <input v-model="signupCred.password" class="input" type="password" placeholder="Password">
        <button class="signup-btn">Sign up</button>
      </div>
    </form>
    <user-modal />
  </section>
</template>
 <script>
import userModal from '../components/user-modal.cmp.vue';
export default {

  name: 'login-signup',
  components: {
    userModal,
  },
  data() {
    return {
      isUser: true,
      loginCred: { username: 'dana', password: '1212' },
      signupCred: { username: '', password: '', fullname: '' }
    };
  },
  methods: {
    async doLogin() {
      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred })
        this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
    async doSignup() {
      console.log('submitted signup')
      await this.$store.dispatch({ type: 'signup', userCred: this.signupCred })
      this.$router.push('/')

    },
  },
}
</script>
