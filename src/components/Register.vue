<template>
  <div class="hero">
    <h3 class="vue-title"><i style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container register-form">
      <form @submit.prevent="submit">
        <div class="form-content align-center">
          <div class="column">
            <div class="form-group">
              <input type="email" class="form-control" name="email" placeholder="Email Address" required="" v-model="email" />
            </div>
            <div class="form-group">
              <input type="username" class="form-control" name="username" placeholder="User Name" required="" v-model="username" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" name="password" placeholder="Password" required="" v-model="password" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" name="passwordconfirm" placeholder="Confirm Password" required=""
                     v-model="confirmpassword" />
            </div>
          </div>
          <button class="btnSubmit" type="submit" :disabled="submitStatus === 'PENDING'">Register</button>
          <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Check if the passwords match</p>
          <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for Registering!</p>
          <p class="typo__p" v-if="submitStatus === 'PENDING'">Pending...</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AuthService from '@/services/authservice'
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
    return {
      messagetitle: 'Register',
      email: '',
      username: '',
      password: '',
      confirmpassword: '',
      submitStatus: null
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      // do your submit logic here
      this.submitStatus = 'PENDING'
      setTimeout(() => {
        if (this.password === this.confirmpassword) {
          this.submitStatus = 'OK'
          var user = {
            email: this.email,
            username: this.username,
            password: this.password
          }
          this.user = user
          console.log('Submitting in Register : ' + JSON.stringify(this.user, null, 5))
          this.submitUser(this.user)
        } else {
          // alert('Please ensure passwords match')
          this.submitStatus = 'ERROR'
        }
      }, 500)
    },
    submitUser: function (user) {
      console.log('submitUser')
      AuthService.register(user)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
          console.log(user)
          this.register(this.user)
        })
        .catch(err => {
          console.log(err)
        })
    },
    loginUser: function (user) {
      const credentials = {
        email: user.email,
        username: user.username,
        password: user.password
      }
      AuthService.login(credentials)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

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
    margin-bottom: 10px;
    cursor: pointer;
    background: #0062cc;
    color: #fff;
  }
</style>
