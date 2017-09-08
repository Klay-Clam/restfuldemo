var usersSchema = require('./models/database/users');
var topticsSchema = require('./models/database/topics');
var sha1 = require('simple-sha1');

var timeToken = sha1.sync(String(new Date()));
console.log("SHA-1: " + timeToken);
var pwd = sha1.sync(String(sha1.sync('admin') + sha1.sync(String(new Date()))));
var user_1 = new usersSchema({
    username: "admin",
    password: pwd,
    email:"hellodearclam@outlook.com",
    firstLogin: true,
    lastLoginTime: new Date(),
    keyToken: timeToken
});

usersSchema.collection.insert(user_1,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});