import axios from 'axios'

//服务器数据库地址
const host = 'http://localhost:2227/'
 
// 创建axios实例
let fetch = axios.create({
  baseURL: host,
  timeout: 5000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'}
})

// 请求拦截器(request)
axios.interceptors.request.use(it =>{
  console.info(it)
}, error =>{
  return Promise.reject(error)
})

// 响应拦截器(response)
axios.interceptors.response.use(it =>{
  console.info(it)
}, error =>{
  return Promise.reject(error)
})

export default fetch