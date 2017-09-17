define('appendBanner',['jquery'],function($){
    var AppendBannerToMainBodyModule = {};

    // 加载 topics
    var appendTopics = function(){
        /**
         * 首先发起一个ajax请求，获去topic的数量，然后依次对每个topic进行append操作
         * * 获取所有的topics数据，插入到页面的结构中去 
         */
        let url = "/content/topics" ; // 获取所有的topic，length
        let data = {};
        $.ajax({
            url: url,
            method: "GET",
            data: data,
            dataType: 'json',
            success:function(data){
                if(data){
                    require(['topic'],function(topics){
                        // console.log(data);
                        // console.log(topics.noTopic);
                        for(var i = 0; i < data.length; i++){
                            $('#bbsBody').append(topics.topicTemp);

                            // 插入数据
                            $('.topic-title').text(data[i].title);
                            $('.author').text(data[i].owns);
                            $('.publishTime').text(data[i].publisheTime);

                            $('.topic-body div').text(data[i].content);

                            // 插入标签
                        }
                    });
                }else{
                    require(['topic'],function(topics){
                        console.log(topics);
                    });
                }
            }
        });

        return 0;
    };
    // 加载 mene
    var appendMenu = function(){
        /**
         * 首先将DOM架构append到页面中去
         * 然后发起一个Ajax请求
         * 获取所有的tags数据，插入到页面结构中去
         */
    };
    // 加载 me
    var appendMe = function(){
        /**
         * 首先将 DOM 架构 append 到页面中去
         * 然后发起一个 Ajax 请求
         * 获取所有的 me 数据，插入到页面结构中去
         */
    }

    AppendBannerToMainBodyModule.appendTopics = appendTopics;
    AppendBannerToMainBodyModule.appendMenu = appendMenu;
    AppendBannerToMainBodyModule.appendMe = appendMe;

    return AppendBannerToMainBodyModule;
})