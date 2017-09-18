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
                        $('#bbsBody').html('');
                        // console.log(data);
                        // console.log(topics.noTopic);
                        for(let i = 0; i < data.length; i++){
                            $('#bbsBody').append(topics.topicTemp);

                            // 插入数据
                            // $('#bbsBody .topic-title:last-child h3').text(data[i].title);
                            //console.log($('#bbsBody')[0].children.length);
                            let lastChild = $('#bbsBody')[0].children.length - 1;
                            // console.log($('#bbsBody .topic-title')[lastChild]);
                            $('#bbsBody .topic-title')[lastChild].innerText = data[i].title;

                            $('#bbsBody .author')[lastChild].innerText = data[i].owns;
                            $('#bbsBody .publishTime')[lastChild].innerText = data[i].publisheTime;

                            $('#bbsBody .topic-body div')[lastChild].innerText = data[i].content;

                            // 插入tags
                            for(let t = 0;t < data[i].tags.length;t++){
                                // console.log(data[i].tags[t]);
                                $('#bbsBody .topic-tags')[lastChild].innerHTML += topics.tagTemp;
                                $('#bbsBody .topic-tags .topic-tag')[lastChild].innerText += data[i].tags[t];
                            }
                        }
                    });
                }else{
                    require(['topic'],function(topics){
                        console.log(topics);
                    });
                }
            }
        });
    };
    // 加载 mene
    var appendMenu = function(){
        /**
         * 首先将DOM架构append到页面中去
         * 然后发起一个Ajax请求
         * 获取所有的tags数据，插入到页面结构中去
         */
        require(['menu'],function (menu) {
            //alert(menu.tag);
            //$('#bbsBody').html(menu.tagCloudTemp);
            $('#bbsBody').html(menu.tagCloudTemp);
        });
    };
    // 加载 me
    var appendMe = function(){
        /**
         * 首先将 DOM 架构 append 到页面中去
         * 然后发起一个 Ajax 请求
         * 获取所有的 me 数据，插入到页面结构中去
         */
        require(['me'],function (me) {
            //alert(menu.tag);
            //$('#bbsBody').html(menu.tagCloudTemp);
            $('#bbsBody').html(me.userIntroductionDiv);
        });
    };

    AppendBannerToMainBodyModule.appendTopics = appendTopics;
    AppendBannerToMainBodyModule.appendMenu = appendMenu;
    AppendBannerToMainBodyModule.appendMe = appendMe;

    return AppendBannerToMainBodyModule;
});