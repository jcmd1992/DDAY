import Api from '@/services/api'
// sets path for replies but ints not in use
export default {
  fetchReply () {
    return Api().get('/replies')
  },
  postReply (reply) {
    return Api().post('/reply', reply,
      { headers: {'Content-type': 'application/json'} })
  }
}
