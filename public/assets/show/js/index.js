var blo = '20%';
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        blo = '70%';
        $('#left_menu').css('width',blo);
    }
}
browserRedirect();


$('#footer ul li ').on('click',function(){

    $('#footer ul li ').removeClass('current');
    $(this).addClass('current');

    switch($(this).index())
    {
        case 0:
            $("#content_page div").removeClass('cur');
            $("#page1").addClass('cur');
            $("#content_page div").stop().animate({'margin-left': '0%'}, 500);
            break;
        case 1:
            $("#content div").removeClass('cur');
            $("#page2").addClass('cur');
            $("#content_page div").stop().animate({'margin-left': '-100%'}, 500);
            break;
        case 2:
            $("#content div").removeClass('cur');
            $("#page3").addClass('cur');
            $("#content_page div").stop().animate({'margin-left': '-200%'}, 500);
            break;
        case 3:
            $("#content div").removeClass('cur');
            $("#page4").addClass('cur');
            $("#content_page div").stop().animate({'margin-left': '-300%'}, 500);
            break;

    }
});

$('.head-left').on('click',function(){

    var val = $(this).attr('value');
    if(val == 'none'){
        $("#right_content").stop().animate({'left': blo}, 300);
        $(this).attr('value','block');
    }else{
        $("#right_content").stop().animate({'left': '0%'}, 300);
        $(this).attr('value','none');
    }

});
$('#right_content').bind('swiperight',function(){
    var val = $('#head-left').attr('value');
    if(val == 'none'){
        $("#right_content").stop().animate({'left': blo}, 300);
        $('#head-left').attr('value','block');
    }else{

    }
});
$('#right_content').bind('swipeleft',function(){
    var val = $('#head-left').attr('value');
    if(val == 'none'){

    }else{
        $("#right_content").stop().animate({'left': '0%'}, 300);
        $('#head-left').attr('value','none');
    }
});

/*绘制canvas图像*/
$(document).ready(function () {
    var img = new Image();
    // img.src = "https://ws4.sinaimg.cn/large/006tNc79ly1fl1u1t7281j30ob0yiwsh.jpg";
    img.src = "http://manager.ifunet.com/tpl.png";
    img.onload=function () {
       dwin(this);
    }
});

function dwin(img) {
    var canvas = document.getElementById('signCard');
    var name = $('#name').val();
    var room = $('#room').val();
    var table = $('#table').val();
    var imgput=$('#image-put');
    var context = canvas.getContext('2d');  //获取对应的2D对象(画笔)
    context.drawImage(img, 0, 0);
    context.fillStyle = '#fff';
    context.strokeStyle = '#fff'; //设置笔触的颜色
    context.font = "150px '微软雅黑'"; //设置字体
    context.textAlign='center';
    context.textBaseline = 'hanging'; //在绘制文本时使用的当前文本基线
    var x = Math.floor(canvas.width / 2); // change
    var y = Math.floor(canvas.height / 2 - 200 / 2);
    context.fillText(name, x, 490); //设置文本内容
    context.font = "30px 'sans-serif'"; //设置字体
    context.fillText(room, 320, 780);
    context.fillText(table, 670, 780);
    var src=canvas.toDataURL("image/png");
    console.log(src);
    imgput.attr('src',src);
}