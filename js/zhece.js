var seach1 = location.search
var btn1 = document.querySelector('#loginBtn')
btn1.onclick = function() {
    var regUs = document.querySelector('#loginUserName').value;
    var pass = document.querySelector('#inputPassword3').value;
    if (seach1) {
        var newUrl = seach1.split('=')[1];
        (async function() {
            var p1 = await promiseAjax({
                url: './php/denglu.php',
                data: `username=${regUs}&password=${pass}`
            })
            if (p1 == 1) {
                setCookie('name', regUs, 100)
                location.href = newUrl
            } else {
                alert('账号或密码有误')
            }
        })()
    } else {
        (async function() {
            var p1 = await promiseAjax({
                url: './php/denglu.php',
                data: `username=${regUs}&password=${pass}`
            })
            if (p1 == 1) {
                location.href = './zhuye.html'
            } else {
                alert('账号或密码有误')
            }
        })()
    }
    return false;
}
var btn2 = document.querySelector('#zhuce')
    //zhuce是注册按钮的id名

btn2.onclick = function() {
    // console.log(btn2);
    alert("注册成功,请登录");
    location.reload()
    var usname = document.querySelector('#usname').value;
    //usname是输入账号的框的id名
    console.log(usname);
    var password = document.querySelector('#password').value;
    //password是输入密码的框的id名
    console.log(password);
    //使用自执行函数调用PHP
    (async function() {
        var p1 = await promiseAjax({
            url: './php/zhuce.php',
            data: `username=${usname}&password=${password}`
        })

    })()
}