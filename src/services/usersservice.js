import Api from '../services/api'
// sets path for users
export default {
  fetchUsers () {
    return Api().get('/users')
  },
  deleteUser (id) {
    return Api().delete(`/user/${id}`)
  },
  fetchUser (id) {
    return Api().get(`/users/${id}`)
  },
  putUser (id, user) {
    console.log('REQUESTING ' + user._id + ' ' +
      JSON.stringify(user, null, 5))
    return Api().put(`/users/${id}`, user,
      { headers: {'Content-type': 'application/json'} })
  }
}
