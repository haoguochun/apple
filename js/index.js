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
