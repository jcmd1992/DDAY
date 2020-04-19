<template>
  <!-- this was made for replies but could not be implemented -->
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <reply-form :message="reply" messageBtnTitle="Send a Reply" @message-is-created-updated="submitReply"></reply-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import replyservice from '../services/replyservice'
import replyForm from '../components/replyForm'
export default {
  data () {
    return {
      replies: '',
      messageId: 0,
      usersid: 0,
      messagetitle: ' Create a Message '
    }
  },
  components: {
    'reply-form': replyForm
  },
  methods: {
    submitReply: function (reply) {
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
