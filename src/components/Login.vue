<template>
  <!-- this displays when Login tab is clicked on -->
  <div class="hero">
    <h3 class="vue-title"><i style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container login-form">
      <form @submit.prevent="submit">
        <div class="form-content align-center">
          <div class="column">
            <div class="form-group">
              <!-- takes input from user -->
              <input type="email" class="form-control" placeholder="Email Address*" required="" v-model="email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="Password*" required="" v-model="password" />
            </div>
          </div>
          <button class="btnSubmit" type="submit" :disabled="submitStatus === 'PENDING'">Login</button>
        </div>
        <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for Loging in!</p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Loging in...</p>
      </form>
    </div>
  </div>
</template>

<script>
import AuthService from '../services/authservice'
import Vue from 'vue'
import VueForm from 'vueform'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

export default {
  data () {
    // data expected to be returned by user
    return {
      messagetitle: 'Login',
      email: '',
      password: '',
      error: '',
      submitStatus: null
    }
  },
  methods: {
    // submits the data inputted
    submit () {
      console.log('submit')
      // do your submit logic here
      this.submitStatus = 'PENDING'
      setTimeout(() => {
        var credentials = {
          email: this.email,
          password: this.password
        }
        this.credentials = credentials
        this.loginUser(this.credentials)
      }, 500)
    },
    loginUser: function (credentials) {
      // logs the user in
      console.log('LoginUser')
      AuthService.login(credentials)
        .then(response => {
          // JSON responses are automatically parsed.
          this.submitStatus = 'OK'
          console.log(response)
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.$swal.fire({
            title: `${err.response.data.message}`,
            icon: 'error'
          })
        })
    }
  }
}
</script>
<!-- styling code -->
<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .form-content {
    padding: 5%;
    border: 1px solid #ced4da;
    margin-bottom: 2%;
  }
  .form-control {
    border-radius: 1.5rem;
  }
  .btnSubmit {
    border: none;
    border-radius: 1.5rem;
    padding: 1%;
    width: 20%;
    cursor: pointer;
    background: #0062cc;
    color: #fff;
  }
</style>
