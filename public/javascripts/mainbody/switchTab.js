// tabs 切换方法模块
define("switchTab",['jquery','appendBanner'],function($,appendBanner){
    var switchTabModule = function(){
        // $('li'); 获取到页面中所有的li标签元素
        let liNode = $('li');
        // console.log(liNode);
        liNode.each(function(index,obj){
            // console.log(index+", "+obj);
            switch (index) {
                case 0:
                    (function(){
                        // console.log(liNode[index]);
                        $(liNode[index]).on('click',function(){
                            
                            if($(liNode[index]).children('img').attr('src') === "/images/home.png"){
                                $(liNode[index]).children('img').attr('src','/images/homeact.png');
                                $(liNode[index+1]).children('img').attr('src','/images/menu.png');
                                $(liNode[index+2]).children('img').attr('src','/images/me.png');

                                // 加载页面主体 topics
                                
                            }

                        });
                    })()
                    break;
                case 1:
                    (function(){
                        // console.log(liNode[index]);
                        $(liNode[index]).on('click',function(){
                            // console.log('click ' + index);
                            if($(liNode[index]).children('img').attr('src') === "/images/menu.png"){
                                $(liNode[index-1]).children('img').attr('src','/images/home.png');
                                $(liNode[index]).children('img').attr('src','/images/menuact.png');
                                $(liNode[index+1]).children('img').attr('src','/images/me.png');
                            
                                // 加载页面主体 menu

                            }
                        });
                    })()
                    break;
                case 2:
                    (function(){
                        // console.log(liNode[index]);
                        $(liNode[index]).on('click',function(){
                            // console.log('click ' + index);
                            if($(liNode[index]).children('img').attr('src') === "/images/me.png"){
                                $(liNode[index-2]).children('img').attr('src','/images/home.png');
                                $(liNode[index-1]).children('img').attr('src','/images/menu.png');
                                $(liNode[index]).children('img').attr('src','/images/meact.png');
                                
                                // 加载页面主体 me
                            }
                        });
                    })()
                    break;
                default:
                    break;
            }
        })
    };

    return switchTabModule;
})