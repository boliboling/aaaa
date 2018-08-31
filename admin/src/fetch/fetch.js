import axios from 'axios'
// export const url = 'http://vue.wclimb.site';
export const url = 'http://localhost:8002'
let $axios = axios.create({
  baseURL: url + '/vi/',
});
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

function $fetch(method,url,data){
    return new Promise((reslove,reject)=>{
        $axios({
            method,
            url,
            data:data
        }).then(res=>{
            let body = res.data
            if (body.code == 200 || body.code == 201) {
                reslove(body)
            }else{
                reject(body)
            }
        }).catch(err=>{
            reject(err)
        })

    })
}

// 首页初始化数据
export const getUser = (pageno) => $fetch('post', 'getUser',{
    pageno
})

// 管理员登录
export const aLogin = (userinfo) => $fetch('post', 'aLogin',{
    userinfo
})

export const getSort = (pageno) => $fetch('post', 'getSort',{
  pageno
})

export const sortadd = (img,bname) => $fetch('post', 'sortadd',{
   img,bname
})
