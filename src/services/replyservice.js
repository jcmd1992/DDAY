import Api from '@/services/api'
// sets path for messages
export default {
  fetchReply () {
    return Api().get('/replies')
  },
  postReply (reply) {
    return Api().post('/reply', reply,
      { headers: {'Content-type': 'application/json'} })
  }
}
