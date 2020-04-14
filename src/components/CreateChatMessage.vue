<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{chattitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <chat-form :chat="chat" chatBtnTitle="Send a Message" @message-is-created-updated="submitChat"></chat-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chatsservice from '@/services/chatservice'
import chatForm from '@/components/chatForm'
export default {
  data () {
    return {
      chat: {usersid: 0, chats: ''},
      chattitle: ' Create a Chat Message '
    }
  },
  components: {
    'chat-form': chatForm
  },
  methods: {
    submitChat: function (chat) {
      chatsservice.postChat(chat)
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
