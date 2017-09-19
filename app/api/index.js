import 'whatwg-fetch';
import 'es6-promise';

// 发起get请求
export const get = url => {
    return fetch(url, {
        method: 'get',
        credentials: 'include', // 跨域携带cookie
        headers: {
            accept: 'application/json'
        }
    }).then(res => res.json())
};

// 发起post请求
export const post = (url, params) => {
    return fetch(url, {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        }
    }).then(res => res.json())
};
export const postForm = (url, params) => {
    return fetch(url, {
        method: 'post',
        credentials: 'include',
        body: toUrlencoded(params),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            accept: 'application/json'
        }
    }).then(res => res.json())
};

function toUrlencoded(obj) {
   let params = [];
   for(let k in obj) {
       params.push(`${k}=${obj[k]}`);
   }
   return  params.join('&');
}
console.log(toUrlencoded({id: 24, name: 'react', text: 'li'}));
