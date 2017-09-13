define('buttonClick',['jquery','sha1'],function($,hex_sha1){
    /**
     * 点击登录按钮触发的事件
     */
    var buttonClickModule = {}; //推荐方式  
    const moduleName = "登录按钮点击事件模块";

    // 定义模块内部变量
    var url = '/users/login',
    data = {};

    // 定义 函数
    var onClick = function(btnId,pwdId,keyToken){
        $(btnId).on('click',function(){
            // console.log("keyToken:"+ keyToken);
            var pwd = $(pwdId).val();
            require(['sha1'],function(hex_sha1){
                console.log("sha1:"+hex_sha1(pwd));
            })
        })
    };

    buttonClickModule.onClick = onClick;

    return {
        buttonClickModule
    };
})