require.config({
  baseUrl:'/',
  paths:{
    
    router:'lib/router.min',
    myroute:'src/myroute',
    jquery:'lib/jquery-3.1.1',
    text:'lib/text',
    css:'lib/css.min'

  }
})

// 程序入口
// 程序入口
require(['myroute'],function(){

    location.hash = '#/car'

})
