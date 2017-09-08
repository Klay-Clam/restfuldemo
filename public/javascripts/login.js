$(function () {
    var inputEvent = new OnBlurOrFocus($("#email"));
    inputEvent._blur();
    inputEvent._focus();
});

/*
* 封装聚焦和从input移除焦点的 对象
* */
function OnBlurOrFocus(input) {
    var O = new Object();
    O.node = input;
    // // 为接收数据做准备
    // O.status = {
    //     lastlogin: "",
    //     keyToken: ""
    // };

    O._blur = function () {
        this.node.on("blur", function () {
            console.log("blur");
            /*
            * 从输入邮箱的输入框失去焦点
            * 触发一次ajax请求，获取查询该邮箱是否已经被注册，
            * 如果 是：则返回上次登录的时间 和 keyToken
            * 如果 否：提示用户去注册
            * */
            let url = "/users/email",
                userEmail = $("#email").val();
            $.ajax({
                url: url,
                method: "GET",
                data: {
                    email: userEmail
                },
                dataType: "json",
                success: (data) => {
                    // 用户是否存在
                    console.log(data);
                    if (!data) {
                        $.toast("邮箱未注册");
                    } else {
                        $.toast("该邮箱可用");
                    }
                },
                error: function (err) {
                    console.log(err);
                }
            })
        });
    };
    O._focus = function () {
        this.node.on("focus", function () {
            console.log("focus");
        })
    };

    return O;
}


/*
* 登录的操作 */
function login() {
     // 监听 登录 按钮的点击事件
    $("#loginBtn").on("click",function(){
        // hash 散列化加盐之后的密码
        console.log(pwd);
        let pwd = sha1.sync(String(sha1.sync($("#password").val()) + sha1.sync(data.timeToken)));
        const url = "/users/login";
        $.ajax({
            url: url,
            method: "POST",
            data: {
                email: $("#email").val(),
                pwd: pwd
            },
            dataType: "json",
            success : (data) => {
                console.log(data);
                if(data){
                    $.toast("登陆成功");
                }                                        
            },
            error: (err) => {
                console.log(err);
                $.toast("发生异常");
            }
        })
    })
}