import axios, { AxiosResponse } from 'axios';
import { getStore } from './localStorage';
import vm from '../main';

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
  (config) => {
    const token = getStore('token');
    const newConfig = config;
    newConfig.headers['Accept-Language'] = 'q=0.9,zh-CN;q=0.8,zh;q=0.7';
    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  },
  (error) => error,
);

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.data && error.response.data.msg) {
        vm.$message(error.response.data.msg);
      }
    } else if (error.request) {
      console.error(error.request);
    } else {
      console.error('Error', error.message);
    }
    console.error(error.config);

    return Promise.reject(error);
  },
);

/**
 * 对 axios 的简单封装
 */
export default class Ajax {
  /**
    * 带错误处理的GET 请求
    * 失败则返回 undefined
    * @param url 路径，形如 /a/b 不包含域名和端口部分
    * @param param 参数
    */
  static async get(url, param) {
    try {
      const result = await axios.get(url, {
        params: param,
      });
      return Ajax.handleError(result);
    } catch (error) {
      return undefined;
    }
  }

  /**
     * 带错误处理的 POST 请求
     * 失败则返回 undefined
     * @param url 路径，形如 /a/b 不包含域名和端口部分
     * @param param 参数, 如果要application/json 就传json对象，如果要 application/formData 就传 formData对象
     */
  static async post(url, param) {
    try {
      const result = await axios.post(url, param);
      return Ajax.handleError(result);
    } catch (error) {
      return undefined;
    }
  }

  /**
     * 带错误处理的delete 请求
     * 请求成功则返回 T 类型的实例
     * @param url 路径，形如 /a/b 不包含域名和端口部分
     * @param param 参数
     */
  static async delete(url, param) {
    try {
      const result = await axios.delete(url, {
        data: param,
      });
      return Ajax.handleError(result);
    } catch (error) {
      return undefined;
    }
  }

  /**
     * 带错误处理的put 请求
     * 请求成功则返回 T 类型的实例
     * @param url 路径，形如 /a/b 不包含域名和端口部分
     * @param param 参数
     */
  static async put(url, param) {
    try {
      const result = await axios.put(url, param);
      return Ajax.handleError(result);
    } catch (error) {
      return undefined;
    }
  }

  static async handleError(result) {
    if (result.status === 200) {
      const { data } = result;
      if (data.code === 200) {
        return data.data;
      }
      console.error(data);
      return undefined;
    }
    return undefined;
  }
}
