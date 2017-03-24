var express=require('express');
var fs=require('fs');
var app=express();

// 静态文件路径
app.use(express.static('./'))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})


app.get('/gethf',function(req,res){
    fs.readFile(__dirname+'/public/data/sj.json',function(err,data){
        if(err){console.log("err")}else{
            var json=JSON.parse(data);
        }
    })
})

//随便
app.listen(3009,function(){
    console.log("localhost:3009")

})