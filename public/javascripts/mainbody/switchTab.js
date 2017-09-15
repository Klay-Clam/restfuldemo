// tabs 切换方法模块
define("switchTab",['jquery'],function($){
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
                        
                    })()
                    break;
                case 1:
                    (function(){
                        // console.log(liNode[index]);
                    })()
                    break;
                case 2:
                    (function(){
                        // console.log(liNode[index]);
                    })()
                    break;
                default:
                    break;
            }
        })
    };

    // var liNodeListen = function(node){
    //     node.on('click',function(){

    //     })
    // }
    return switchTabModule;
})