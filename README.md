# 使用REST风格的url来实现一个简单的用户登录注册，话题发布修改的demo

> 2017.09.7

搭建后台与数据库，明确自己的需求。搭建前端登录页面。

> 2017.9.7 18:32

    本来是看到了 `SUI Mobile` 这个UI框架，使用之后发现，这个组件只支持Zepto,而不支持 JQuery。而前者用起来很不舒服。大概是历史问题吧！
    
    好在，`SUI Mobile` 的作者已经离开了阿里，并重新维护了一个版本 `Light7`.在这个版本中，已经支持jQuery，并且作者建议最好使用Jquery。对于我来说正好。

    ### 进度以及计划：

    前端登录界面和后端的数据库已经搭建好了，并插入了一些测试的数据。
    明天，利用已有的数据做一个登录的操作。使用SHA-1散列。尽可能的做的完备。

    see you ~

> 2017.09.13 14:08

    人生啊，真是善变。

    Light7 好多坑啊，不想用了。一直踩坑踩坑...不小心看到，原来Light7也被作者停止维护了。

    手写好了..

> 2017.09.14 16:29

    自己写东西也不知道怎么的，天天改...

    加入了前端的AMD规范的框架`require.js`，尝试着使用模块化开发的感觉。在模块的划分上应该还是很不成熟，但是已经尝到了甜头。
    逻辑会比较清晰。

    截止现在，做完了登录的界面、交互和后端接口。登录成功页面跳转也OK了。

    接下来，写首页的布局和模块，初步的想法是，将需要动态加载的DOM结构，作为模块保存，在需要使用的时候require就好啦。

> 2017.09.18 14:00

    首页的数据已经可以自动的动态的渲染上去。
    
    然后其他两个页面(menu和me)的模板文件还没有编写，但是页面的跳转和刷新已经实现啦
    
    接下来，我要编写menu和me的页面，以及页面的数据的加载等代码。
   
![运行截图](https://raw.githubusercontent.com/Klay-Clam/restfuldemo/master/public/images/sesamedemo.gif)

> 2017.9.25 15:27

    写到现在，一些预期的功能做出来了，看起来额，还是真的丑啊。细节的地方也没有认真的写。

![运行截图](https://raw.githubusercontent.com/Klay-Clam/restfuldemo/master/public/images/demolog.gif)
    
