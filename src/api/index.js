import http from './public'
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/front/login', params)
}
// 退出登陆
export const loginOut = (params) => {
  return http.fetchGet('/front/logout/' + params)
}
// 用户信息
export const userInfo = (params) => {
  return http.fetchGet('/front/checkLogin', params)
}

// 注册账号
export const regist = (params) => {
  return http.fetchPost('/front/regist', params)
}
// 重置密码
export const resetpwd = (params) => {
  return http.fetchPost('/front/resetPW', params)
}
// 发送留言
export const sendmsg = (params) => {
  return http.fetchPost('/front/send/email', params)
}
// 上传图片
export const upload = (params) => {
  return http.fetchPost('/front/imgaeUpload', params)
}
// 修改头像
export const updateheadimage = (params) => {
  return http.fetchPost('/front/updateheadimage', params)
}
// 推荐板块
export const recommend = (params) => {
  return http.fetchGet('/front/recommend', params)
}
// 任务大厅
export const taskHall = (params) => {
  return http.fetchPost('/hall/task/taskList', params)
}
