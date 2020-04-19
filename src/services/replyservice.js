import Api from '@/services/api'
// sets path for replies but ints not in use
export default {
  fetchReply () {
    return Api().get('/messages')
  },
  postReply (message) {
    return Api().post('/message', message,
      { headers: {'Content-type': 'application/json'} })
  }
}
