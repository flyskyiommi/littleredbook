define(['text!src/home/home.html','jquery','css!src/home/home.css'],function(html,jquery){
    $("#container").html(html)

    function add(){
        $("#container").html(html)
    }

    return {
        add:add
    }




})