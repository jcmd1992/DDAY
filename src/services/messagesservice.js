import Api from '@/services/api'

export default {
  fetchMessage () {
    return Api().get('/messages')
  },
  postMessage (message) {
    return Api().post('/message', message,
      { headers: {'Content-type': 'application/json'} })
  }
}
