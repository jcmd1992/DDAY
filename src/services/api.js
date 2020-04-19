import axios from 'axios'
// connects to the server code
export default() => {
  return axios.create({
    baseURL: 'http://localhost:3000/'
    // baseURL: 'https://dday-client.herokuapp.com/'
  })
}
