define("showPwd",['jquery'],function($){
    var showPwdModule = function(){
        var flag = $("#showPwd").children('img').attr("src");
        $("#showPwd").click(function(){
            // console.log("click");
            if(flag === '/images/hidepwd.png'){
                $("#showPwd").children('img').attr("src",'/images/showpwd.png')
                $("#password").attr('type','text');
                // console.log($("#showPwd").children('img').attr("src",'/images/showpwd.png'));
                return flag = '/images/showpwd.png';
            }
            if(flag === '/images/showpwd.png'){
                $("#showPwd").children('img').attr("src",'/images/hidepwd.png')
                // console.log($("#showPwd").children('img').attr("src",'/images/hidepwd.png'));
                $("#password").attr('type','password');
                return flag = '/images/hidepwd.png';
            }
        })
    }

    return showPwdModule;
})