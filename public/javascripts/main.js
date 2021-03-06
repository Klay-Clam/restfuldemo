require.config({
    baseUrl: "./javascripts",
    paths:{
        "jquery":"jquery",
        "inputBlur": "login/inputBlur",
        "buttonClick": "login/buttonClick",
        "showPwd" : "login/showPwd",
        "toast": "templates/toast",
        "topic":"templates/topic",
        "menu":"templates/menu",
        "me":"templates/me",
        "switchTab":"mainbody/switchTab",
        "appendBanner":"mainbody/appendBanner", 
        "sha1":"sha1"
    },
    shim:{
        "sha1":{
            "exports":"hex_sha1"
        }
    }
})

// 按照需要，依次require需要的模块
require(['jquery','sha1'],function($,hex_sha1){
    require(['showPwd'],function(showPwd){
        showPwd();
    });
    require(['inputBlur'],function(blurEvent){
        blurEvent.inputBlurModule.onBlur("#email");
    });
    require(['switchTab'],function(switchTab){
        switchTab();
    });
    require(['appendBanner'],function(banner){
        banner.appendTopics();
    })
});