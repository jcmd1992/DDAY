import Api from '@/services/api'
// sets path for chat
export default {
  fetchChat () {
    return Api().get('/chat')
  },
  postChat (chat) {
    return Api().post('/chat', chat,
      {headers: {'Content-type': 'application/json'}})
  }
}
