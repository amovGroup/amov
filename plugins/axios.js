import axios from 'axios'
//定义fetch函数，config为配置
export function token(){
    let cookie = document.cookie.replace(/\s+/g,"");
    let cookieArr = cookie.split(";");
    let jsonCookie = {};
    cookieArr.forEach((i) => {
      let arr = i.split("=");
      jsonCookie[arr[0]] =arr[1];
    });
    const cookies = jsonCookie.cache;
    return cookies
}
export function fetch(config,headers){
   //返回promise对象
   headers["Content-Type"]='application/json'
   let tokenStr=token()
   if(tokenStr!=undefined &&tokenStr!=false){
        headers["Authorization"]=tokenStr
   }
   return new Promise((resolve,reject) =>{
       //创建axios实例，把基本的配置放进去
       const instance = axios.create({
           //定义请求文件类型
        //    headers:{
        //       'Content-Type': 'application/json',
        //     },
            headers:headers,
                // 请求超时  
            timeout: 5000,
            //定义请求根目录
            baseURL: 'http://amovauto.com:8081/'
        });
       //请求成功后执行的函数
        instance(config).then(res =>{
            console.log(res);
            resolve(res);
        //失败后执行的函数
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    });
}

// 封装调用的接口 getData
export function get(url,data,headers) {
    //如果type为空，默认为post方法，也可以自己改成get
    headers=headers==undefined?{}:headers
    return fetch({
    //这里的url为baseURL下接口地址，如baseURL为'www.baidu.com',接口地址为'www.baidu.com/api/getdata',那么url里就写'api/getdata'
        url: url,
        method: "get",
        data: data,
    },headers)
}

export function post(url,data,headers) {
    //如果type为空，默认为post方法，也可以自己改成get
    headers=headers==undefined?{}:headers
    return fetch({
    //这里的url为baseURL下接口地址，如baseURL为'www.baidu.com',接口地址为'www.baidu.com/api/getdata',那么url里就写'api/getdata'
        url: url,
        method: "post",
        data: data,
    },headers)
}