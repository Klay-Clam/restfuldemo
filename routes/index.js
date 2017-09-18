var express = require('express');
var router = express.Router();

// 引入数据库
var users = require('../models/database/users');
var topics = require('../models/database/topics');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/index', function(req, res, next) {
  res.render('index');
});

/** 判断用户的email 是否已经注册 */
router.get('/user/email', function (req, res, next) {
  // res.send('respond with a resource');
  var reqStatus = req.query.email;

  console.log(reqStatus);
  users.findOne({"email":reqStatus},function(err,doc){
    if(err){
      console.log("=== something error ==="+err);
    }else{
      if(doc){
        var resStatus = {
          keyToken:doc.keyToken
        };
        console.log("=====email status -> true =====");
        res.send(resStatus);
      }else{
        console.log("=====email status -> false =====");
        res.send(false);
      }
    }
  })
});

/** 用户登录，更新用户的登陆时间、是否第一次登录*/
router.post('/users/login',function (req,res,next){
  if (req) {
    // console.log(req);
    let conditions = { "email": req.body.email, "password": req.body.pwd };
    let update = { "lastLoginTime": new Date(), "firstLogin": false };
    users.findOneAndUpdate(conditions, update, function (error, result) {
       
      try{
        console.log("hashed: " + (result.password === req.body.pwd));

        res.send(true);     
      }catch(err){
        console.log('aaa');
        res.send(false);
      }
    });
  }
})

/**
 * 用户登录成功进入到 所有topics页面
 */
router.get('/content',(req,res,next) => {
  res.render('content');
});

router.get('/content/topics',(req,res,next) => {
  // res.send("get all data of topics");
  /**
   * 进行数据库查询
   * 查询并返回所有的topics
   */
  topics.find({},(err,result) => {
    if(err){
      console.log(err);
      res.send(false);
    }else{
      console.log("------ get all topics success ------");
      res.send(result);
    }
  })
});

module.exports = router;