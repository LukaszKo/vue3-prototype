import axios from 'axios';
import router from '@/router/index';

const httpClient = axios.create({
  baseURL: <string>import.meta.env.API_URL,
});

// Add a request interceptor
httpClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config);

    return config;
  },
  function (error) {
    console.log('requests', error);

    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('response', response);

    return response;
  },
  function (error) {
    alert('global' + error);

    switch (error.response.status) {
      case 404:
        //
        router.push({ name: 'not-found' });
        break;
      case 401:
        //
        break;
      default:
      //
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default httpClient;
