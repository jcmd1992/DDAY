import Api from '@/services/api'

export default {
  fetchReply () {
    return Api().get('/messages')
  },
  postReply (message) {
    return Api().post('/message', message,
      { headers: {'Content-type': 'application/json'} })
  }
}
