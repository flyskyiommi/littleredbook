define(['router','jquery'],function(Router,$){


  var router = new Router()

  .route('#/home', function(req, next){
        //   console.log('home route')
          //html innerHTML  innerTEXT append
        //   require(['text!src/home/home.html','css!src/home/home.css'],function(home){
        //         home.add();
                
  require(['src/home/home.js'],function(home){
                home.add();


                
                //   console.log(html)

//   $("#container").html(html)

//   $("#container").html('<h1>首页</h1>')
          })
        
  })
  .route('#/lists', function(req, next){
    require(['src/list/list.js'],function(list){
                list.add();
                
                
                //   console.log(html)

//   $("#container").html(html)

//   $("#container").html('<h1>首页</h1>')
          })


        //   console.log('分类')
        //   $("#container").html('<h1>分类</h1>')
  })
  .route('#/car', function(req, next){
          console.log('购物车')
          $("#container").html('<h1>购物车</h1>')
  })
  .route('#/mine', function(req, next){
          console.log('个人中心')
          $("#container").html('<h1>个人中心</h1>')
  })


})
