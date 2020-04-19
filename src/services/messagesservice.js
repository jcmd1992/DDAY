import Api from '@/services/api'
// sets path for messages
export default {
  fetchMessage () {
    return Api().get('/messages')
  },
  postMessage (message) {
    return Api().post('/message', message,
      { headers: {'Content-type': 'application/json'} })
  }
}
