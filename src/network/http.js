import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_URL;
axios.defaults.timeout = 50000;

// 请求拦截
axios.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error)
})
// 响应拦截被then或catch之前拦截
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
// jsDoc可以根据注释生成API of Document;
/**
 * 封装get方法
 * @param url
 * @param params
 * @return {Promise}
 */

export function get(url, params = {}) {
  return axios
    .get(url, {
      params: params,
    })
    .then((res) => res.data)
}
/** 封装post方法
 * @param url
 * @param data
 * @return {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      });
  });
}
/** 封装postFile方法
 * @param url
 * @param data
 * @return {Promise}
 */
export function postFile(url, data = {}) {
  const form = new FormData();
  // data === fileList
  form.append("file", data);
  let config = {
    headers: {
      ContentType: 'multipart/form-data',
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .post(url, form, config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/** 封装delet方法
 * @param url
 * @param data
 * @return {Promise}
 */

export function delet(url, data = {}) {
  return axios
    .delete(url,data)
    .then((res) => res.data);
}

/** 封装put方法
 * @param url
 * @param data
 * @return {Promise}
 */

export function put(url, data = {}) {
  return axios.put(url, data)
    .then(res => res.data)
}

//创建axios实例

export const instance= axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 50000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
