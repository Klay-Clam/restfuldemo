define('appendBanner',['jquery'],function($){
    var AppendBannerToMainBodyModule = {};

    // 加载 topics
    var appendTopics = function(){
        /**
         * 首先将DOM结构append到页面中去
         * 然后发起一个ajax请求
         * 获取所有的topics数据，插入到页面的结构中去 
         */
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