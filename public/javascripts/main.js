require.config({
    baseUrl: "./javascripts",
    paths:{
        "jquery":"jquery",
        "inputBlur": "login/inputBlur",
        "buttonClick": "login/buttonClick",
        "showPwd" : "login/showPwd",
        "toast": "templates/toast",
        "sha1":"sha1"
    },
    shim:{
        "sha1":{
            "exports":"hex_sha1"
        }
    }
})

// 按照需要，依次require需要的模块
require(['jquery','sha1','showPwd'],function($,hex_sha1,showPwd){
    require(['inputBlur'],function(blurEvent){
        blurEvent.inputBlurModule.onBlur("#email");
    });

    showPwd();
})