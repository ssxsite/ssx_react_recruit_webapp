const mongoose = require('mongoose')

//链接mongo 并且使用react-recruit这个集合
const DB_URL = 'mongodb://localhost:27017/reactRecruit'
mongoose.connect(DB_URL)

mongoose.connection.on('connected',()=>{
    console.log("mongo 数据库连接成功")
})

const models = {
    user: {
        'user':{type:String, require:true},
        'pwd': {type:String, require:true},
        'type':{type:String, require:true},
         //头像
        'avatar':{type:String},
         //个人简介或者职位简介
        'desc':{type:String},
         //职位
        'title':{type:String},
         //如果是boss 还有两个字段
        'company':{type:String},
        'money':{type:String}
    },
    chat: {
        'chatid':{'type':String, 'require':true},
        'from':{'type':String, 'require':true},
        'to':{'type':String, 'require':true},
        'read':{'type':Boolean, 'default':false},
        'content':{'type':String, 'require':true, 'default':''},
        'create_time':{'type':Number, 'default':new Date().getTime()}
    }
}

// mongoose.Schema 类似于mysql的表
for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

//mongoose的工具函数库
module.exports = {
    getModel:function(name){
        return mongoose.model(name)
    }
}