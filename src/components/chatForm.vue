<template>
  <!-- this is the code that displays when the send chat messages tab is clicked on -->
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="form__label">Chat</label>
      <!-- takes in input from the user -->
      <input class="form__input" placeholder="enter some message here" v-model.trim="$v.chats.$model"/>
    </div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ chatBtnTitle }}</button>
    </p>
    <p>
      <!-- button links to chat room -->
      <a href="#/Chat" class="btn btn-primary btn1" role="button">Chat</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your Chat Message!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})
Vue.use(Vuelidate)
export default {
  name: 'FormData',
  props: ['chatBtnTitle', 'chat'],
  // data that is expected to be returned from user
  data () {
    return {
      chattitle: ' Chat ',
      chats: this.chat.chats,
      submitStatus: null
    }
  },
  validations: {
    // sets validation requrements for any chat message
    chats: {
      required,
      minLength: minLength(5)
    }
  },
  methods: {
    // submits the message to the chat
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var chat = {
            chat: this.chats,
            userid: this.$store.state.user._id
          }
          this.chat = chat
          console.log('Submitting in ChatForm : ' +
              JSON.stringify(this.message, null, 5))
          this.$emit('message-is-created-updated', this.chat)
        }, 500)
      }
    }
  }
}
</script>
<!-- Styling Code -->
<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .donate-form .form-control-label.text-left{
    text-align: left;
  }
  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }
  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }
  .dirty {
    border-color: #5A5;
    background: #EFE;
  }
  .dirty:focus {
    outline-color: #8E8;
  }
  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }
  .error:focus {
    outline-color: #ffa519;
  }
</style>
