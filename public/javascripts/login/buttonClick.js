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
            // alert(keyToken);
            if(keyToken !== undefined || keyToken !== "" || keyToken !== null){
                require(['sha1'],function(hex_sha1){
                    // console.log("token: " + keyToken);
                    // console.log("sha1: " + hex_sha1(pwd));
                    var pwd = hex_sha1(String(hex_sha1($(pwdId).val()) + hex_sha1(keyToken)));
                    data = {
                        pwd: pwd,
                        email: $("#email").val()
                    };
        
                    $.ajax({
                        url: url,
                        method: "POST",
                        data: data,
                        dataType: "json",
                        success: (data) => {
                            // console.log(data);
                            
                            var href = 'http://localhost:3000';
                            if(data){
                                require(['toast'],function(toast){
                                    // console.log(toast);
                                    $('.main').append(toast);
                                    $('.toast').children('span').text('登录成功');
                                    setTimeout(function(){
                                        $('.toast').css('display','none');
                                        window.location.href = href + "/content";
                                    },500);
                                });
                            }else{
                                require(['toast'],function(toast){
                                    // console.log(toast);
                                    $('.main').append(toast);
                                    $('.toast').children('span').text('检查密码');
                                    setTimeout(function(){
                                        $('.toast').css('display','none');
                                    },1000);
                                });
                            }
                        },
                        error: (err) => {
                            console.log(err);
                        }
                    })
                });
            }else{
                require(['toast'],function(toast){
                    // console.log(toast);
                    $('.main').append(toast);
                    $('.toast').children('span').text('检查邮箱');
                    setTimeout(function(){
                        $('.toast').css('display','none');
                    },1000);
                });
            }           
        })
    };

    buttonClickModule.onClick = onClick;

    return {
        buttonClickModule
    };
})