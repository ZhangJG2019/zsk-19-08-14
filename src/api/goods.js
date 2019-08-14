import http from './public'

// 商品列表
export const getSearch = (params) => {
  return http.fetchGet('/front/search', params)
}
// 快速搜索
export const getQuickSearch = (params) => {
  return http.fetchGet('/front/quickSearch', params)
}
