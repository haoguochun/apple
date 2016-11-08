$(".imgbox>a").hide().eq(0).show(); //初始：其余隐藏第一张显示
var t=setInterval(move,5000);
var num=0;
function move(type){
    type=type||"right";
    if(type=="right"){
        num++;

        if(num>=$(".imgbox>a").length){
            num=0;
        }
    }else if(type=="left"){
        alert($(".imgbox>a").length);
        num--;
        if(num<=-1){
            num=$(".imgbox>a").length-1;
        }
    }
    $(".imgbox>a").fadeOut(100).eq(num).fadeIn(300);//其余淡出,对应num的淡入
    $(".btn>div").removeClass().eq(num).addClass("active");
}
//箭头
$(".left").mouseup(function(){
    alert(1);
        // clearInterval(t);
    // alert($(this).children())
        // $(this).children().show();
    }
).mousedown(function(){
    alert(2)
        // t=setInterval(move,5000);
        // $(".jiantou").hide();
    }
);
$(".banner>.left").click(function(){
        move("left");
    }
);
$(".banner>.right").click(function(){
        move("right");
    }
);
// 直接操作轮播小块
$(".btn>div").mouseover(function(){
    var index=$(this).index();
    $(".imgbox>a").fadeOut(100).eq(index).fadeIn(300);
    $(".btn>div").removeClass().eq(index).addClass("active");
});