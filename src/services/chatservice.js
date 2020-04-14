import Api from '@/services/api'

export default {
  fetchChat () {
    return Api().get('/chat')
  },
  postChat (chat) {
    return Api().post('/chat', chat,
      {headers: {'Content-type': 'application/json'}})
  }
}
