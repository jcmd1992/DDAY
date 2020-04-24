<template>
  <!-- this uses reply form to display when the button to reply is clicked on -->
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <reply-form :message="replies" messageBtnTitle="Send a Reply" @reply-is-created-updated="submitReply"></reply-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import replyservice from '../services/replyservice'
import replyForm from '../components/replyForm'
export default {
  // expected data to be returned
  data () {
    return {
      replies: '',
      messageId: 0,
      usersid: 0,
      username: 0,
      messagetitle: ' Create a Reply '
    }
  },
  components: {
    // using message form
    'reply-form': replyForm
  },
  methods: {
    // submits the message to the database
    submitReply: function (reply) {
      console.log('stop')
      console.log(reply)
      replyservice.postReply(reply)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
