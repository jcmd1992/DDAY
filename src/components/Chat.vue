<template>
  <!-- this displays when chat tab is clicked on and shows any live chat messages -->
  <div class="chat container">
    <h2 class="text-primary text-center">Real-Time Chat</h2>
    <div class="card">
      <div class="card-body">
        <p class="no chats text-secondary" v-if="chat.length == 0">
          [No messages yet!]
        </p>
        <div class="chats" v-chat-scroll="{always: false, smooth: true}">
          <div v-for="chat in chat" :key="chat.id">
            <span class="text-info">[{{ chat.userid }}]: </span>
            <span>{{chat.chat}}</span>
            <span class="text-secondary time">{{chat.timestamp}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chatservice from '@/services/chatservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Chat',
  data () {
    // data expected to be displayed in chat room
    return {
      chattitle: ' Chat List ',
      chat: [],
      props: ['_id'],
      errors: [],
      columns: ['usersid', 'chat'],
      options: {
        perPage: 10,
        filterable: ['usersid', 'chat'],
        sortable: ['chat'],
        headings: {
          usersid: 'Usersid',
          chat: 'chat'
        }
      }
    }
  },
  // Fetches Messages when the component is created.
  created () {
    this.loadChats()
  },
  methods: {
    // this loads the chats to be dispalyed
    loadChats: function () {
      chatservice.fetchChat()
        .then(response => {
          // JSON responses are automatically parsed.
          this.chat = response.data
          console.log(this.chat)
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
</style>
