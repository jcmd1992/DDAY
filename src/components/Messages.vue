<template>
  <!-- this displays all the messages when the messages tab is clicked on -->
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="message" :options="options">
        <a slot="reply" slot-scope="props" class="fa fa-edit fa-2x" @click="sendReply()"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import messagesservice from '../services/messagesservice'
import replyservice from '../services/replyservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Message',
  data () {
    // data expected to be returned
    return {
      messagetitle: ' Message List ',
      message: [],
      errors: [],
      props: ['_id', 'username'],
      columns: ['messageid', 'usersid', 'message', 'Reply'],
      options: {
        perPage: 10,
        filterable: ['usersid', 'message'],
        sortable: ['message'],
        headings: {
          messageId: 'messageid',
          usersid: 'usersid',
          message: 'message'
        }
      }
    }
  },
  // Fetches Messages when the component is created.
  created () {
    // runs function called load messages
    this.loadMessages()
    this.loadReplies()
  },
  methods: {
    loadMessages: function () {
      // retrieves all messages from database
      messagesservice.fetchMessage()
        .then(response => {
          // JSON responses are automatically parsed.
          this.message = response.data
          console.log(this.message)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  },
  sendReply: function (id) {
    this.$router.params = id
    this.$router.push('/reply')
  },
  loadReplies: function () {
    replyservice.fetchReply()
      .then(response => {
        // JSON responses are automatically parsed.
        this.message = response.data
        console.log(this.reply)
      })
      .catch(error => {
        this.errors.push(error)
        console.log(error)
      })
  }
}

</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
