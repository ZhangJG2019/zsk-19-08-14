import axios from 'axios'
axios.defaults.timeout = 100000
axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'
// axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.headers.common['Authentication-Token'] = window.localStorage.token
export default {
  fetchGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
