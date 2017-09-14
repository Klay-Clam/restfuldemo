define('inputBlur',['jquery','sha1'],function($,hex_sha1){
    /**
     * 输入框失去焦点触发的事件
     */
    
    var inputBlurModule = {}; //推荐方式  
    const moduleName = "输入框失去焦点触发的事件模块";
    
    // 定义模块内部变量
    var url = '/user/email',
        data = {};
    // 定义模块公开的成员变量
    var keyToken = '';
    // 创建模块函数
    var onBlur = function(domNode){
        $(domNode).on('blur',function(){
            // console.log("input blured");
            data = {
                email:$(domNode).val()
            };
            // 失去焦点，发起ajax请求，判断是否已经注册，返回 keyToken
            $.ajax({
                url:url,
                method: "GET",
                dataType:"json",
                data: data,
                success:function(data){
                    // console.log(data);
                    if(!data){
                        // console.log("邮箱未注册");
                        $("#emailCheckImg").css('display','inline-block');
                        $("#emailCheckImg").attr('src','/images/wrong.png');
                        require(['toast'],function(toast){
                            // console.log(toast);
                            $('.main').append(toast);
                            $('.toast').children('span').text('检查邮箱');
                            setTimeout(function(){
                                $('.toast').css('display','none');
                            },1000);
                        });
                    }else{
                        // console.log("邮箱可用");
                        $("#emailCheckImg").css('display','inline-block');
                        $("#emailCheckImg").attr('src','/images/right.png');
                        keyToken = data.keyToken;
                        require(['buttonClick'],function(buttonClick){
                            buttonClick.buttonClickModule.onClick('#loginBtn','#password',keyToken)
                        });
                    }
                },
                error:function(err){
                    console.log(err);
                }
            })
        })
    };
    
    inputBlurModule.keyToken = keyToken;
    inputBlurModule.onBlur = onBlur;
    inputBlurModule.moduleName = moduleName;

    return {
        inputBlurModule
    }
})