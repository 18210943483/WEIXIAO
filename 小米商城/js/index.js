

$(function(){
    var i=0;
    var banner_pic = $("#banner_pic");
    var allimg=$("#banner_pic li").length;
    function img_change(){
        var img_i=i*-1226+"px";
        banner_pic.animate({opacity:".2"},100,function(){
            banner_pic.css("left",img_i );
            banner_pic.animate({
                opacity: "1"
            }, 100);
        })
    }
    function automatic(){
        i+=1;
        if(i>=allimg){
            i=0;
        }
        img_change();
    }
    change_self_time = setInterval(automatic, 3000);
    //大图鼠标移入  箭头显示
    $("#big_banner_change_wrap").hover(function(){
        clearInterval(change_self_time);
        $("#banner_wrap").children().show();
    },function(){
        //移出 箭头隐藏
        change_self_time = setInterval(automatic, 3000);
        $("#banner_wrap").children().hide();
    })
    //上一张
    $("#banner_prev").click(function(){
        i += 1;
        if (i >= allimg) {
            i = 0;
        }
        img_change();
    })
    //下一张
    $("#banner_next").click(function(){
        i -= 1;
        if (i <= 0) {
            i = allimg - 1;
        }
        img_change();
    })
})
//
//$(function(){
//  $("#hot_content").children().children().eq(0).css("border-color","#ff7600");
//  $("#hot_content").children().children().eq(1).css("border-color","red");
//  $("#hot_content").children().children().eq(2).css("border-color","#adff2f");
//  $("#hot_content").children().children().eq(3).css("border-color","#6495ed");
//  $("#hot_content").children().children().eq(4).css("border-color","#6a5acd");
//  $("#hot_content").children().children().eq(5).css("border-color","#ff7600");
//  $("#hot_content").children().children().eq(6).css("border-color","red");
//  $("#hot_content").children().children().eq(7).css("border-color","#adff2f");
//  $("#hot_content").children().children().eq(8).css("border-color","#6495ed");
//  $("#hot_content").children().children().eq(9).css("border-color","#6a5acd");
//})
//大米明星单品 
//$("#hot_prave").click(function(){
//   $("#hot_content").children("ul").animate({
//       left:"-1226px"
//   },300)
//})
//$("#hot_next").click(function(){
//  $("#hot_content").children("ul").animate({
//      left:"0"
//  },300)
//})

////大米明星单品 
//$("#hot_prave").hover(function(){
//  $(this).css("color","#ff6700");
//},function(){
//  $(this).css("color","#BEBEBE");
//})
////大米明星单品 左右箭头鼠标移入
//$("#hot_next").hover(function(){
//  $(this).css("color","#ff6700");
//},function(){
//  $(this).css("color","#BEBEBE");
//})





