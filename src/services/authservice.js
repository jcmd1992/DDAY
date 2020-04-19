import Api from '@/services/api'
// sets the path for users to go to database
export default {
  register (user) {
    return Api().post('/users/register', user,
      { headers: {'Content-type': 'application/json'} })
  },
  login (credentials) {
    return Api().post('/users/login', credentials)
  }
}
