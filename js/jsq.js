$(function(){
	"use strict";
    var fontsize = 16 * $(window).width() / 320;
    if (fontsize > 67.5) {
        fontsize = 67.5;
    }
    $('html').css('font-size', fontsize);
    //tab导航栏
	$(".left button").click(function(){
		LightingControl();
	});
	$(".middle button").click(function(){
		SprayMode();
	});
	$(".right button").click(function(){
		Timing();
	});
	//喷雾模式改变样式
	$(".picture_first button").click(function(){
		$(".picture_first").addClass("replace_first").siblings().removeClass("replace_second replace_third replace_fourth");//选择图片
		$(".picture_first").addClass("active_color").siblings().removeClass("active_color");//选择字体颜色
	});
	$(".picture_second button").click(function(){
		$(".picture_second").addClass("replace_second").siblings().removeClass("replace_first replace_ replace_third replace_fourth");//选择图片
		$(".picture_second").addClass("active_color").siblings().removeClass("active_color");//选择字体颜色
	});
	$(".picture_third button").click(function(){
		$(".picture_third").addClass("replace_third").siblings().removeClass("replace_first replace_second replace_fourth");//选择图片
		$(".picture_third").addClass("active_color").siblings().removeClass("active_color");//选择字体颜色
	});
	$(".picture_fourth button").click(function(){
		$(".picture_fourth").addClass("replace_fourth").siblings().removeClass("replace_first replace_second replace_third");//选择图片
		$(".picture_fourth").addClass("active_color").siblings().removeClass("active_color");//选择字体颜色
	});
	//定时改变样式
	$(".photo_first button").click(function(){
		$(".photo_first").addClass("new_first").siblings().removeClass("new_second new_third new_fourth");//选择图片
		$(".photo_first").addClass("active_color").siblings().removeClass("active_color");//选择字体颜色
	});
	$(".photo_second button").click(function(){
		$(".photo_second").addClass("new_second").siblings().removeClass("new_first new_third new_fourth");//选择图片
		$(".photo_second").addClass("active_color").siblings().removeClass("active_color");//选择字体颜色
	});
	$(".photo_third button").click(function(){
		$(".photo_third").addClass("new_third").siblings().removeClass("new_first new_second new_fourth");//选择图片
		$(".photo_third").addClass("active_color").siblings().removeClass("active_color");//选择字体颜色
	});
	$(".photo_fourth button").click(function(){
		$(".photo_fourth").addClass("new_fourth").siblings().removeClass("new_first new_second new_third");//选择图片
		$(".photo_fourth").addClass("active_color").siblings().removeClass("active_color");//选择字体颜色
	});
});
//灯光控制
function LightingControl(){
	"use strict";
	$(".left").addClass("leftagain").siblings().removeClass("middleagain rightagain");//改变灯光图标
	$(".txt_left").addClass("active_color");//改变字体颜色
	$(".bgcolor").css("height","30rem");//增加背景高度
	$(".choose,.chose").hide();//隐藏两个菜单
	$(".txt_down").show();//展示文字
	$(".bg").css("height","5.5rem");//使菜单居中
}
//喷雾模式
function SprayMode(){
	"use strict";
	$(".middle").addClass("middleagain").siblings().removeClass("leftagain rightagain");//改变喷雾模式图标遍历清除
	$(".bgcolor").css("height","24rem");//改变渐变色背景的高度
	$(".txt_down").hide();//隐藏文字
	$(".bg").css("height","3.5rem");//改变背景白色背景的高度
	$(".choose").show().siblings("div[title=1]").css("display","none");//展现灯光模式菜单隐藏定时菜单
}
//定时
function Timing(){
	"use strict";
	$(".right").addClass("rightagain").siblings().removeClass("leftagain middleagain");//改变定时模式图标
	$(".bgcolor").css("height","24rem");//改变渐变色背景的高度
	$(".txt_down").hide();//隐藏文字
	$(".bg").css("height","3.5rem");//改变背景白色背景的高度
	$(".chose").show().siblings("div[title=1]").css("display","none");//展现灯光模式菜单
}

//开机
function powerOn(){
	"use strict";
	$(".bgcolor").removeClass("superbg");
	$(".bgcolor").removeClass("ultrabg");//设置背景色
	$(".picture").removeClass("offonline");
	$(".picture").removeClass("offPower");//设置图标
	$("button").attr("disabled",false);
	$(".curture p").html("设备在线,点击关闭");
	$(".tab").removeClass("ban");//设置透明度
	
}
//关机
function powerOff(){
	"use strict";
	$(".picture").addClass("offPower");//改变关机图标
	$(".bgcolor").addClass("superbg");//改变背景色
	$(".bgcolor").removeClass("ultrabg");
	$(".picture").removeClass("offonline");
	$(".curture p").html("设备已关闭，点击开启");//改变提示内容
	$(".tab").addClass("ban");//设置透明度
	$("button").attr("disabled",true);//禁止菜单按钮
	$(".switch").attr("disabled",false);//关机可用开关
}
//离线
function offonline(){
	"use strict";
	$(".picture").addClass("offonline");//设置离线图标
	$(".bgcolor").addClass("ultrabg");//设置背景色
	$(".tab").addClass("ban");//设置透明度
	$("button,.switch").attr("disabled",true);//离线按钮都不能使用
	$(".curture p").html("设备离线");//改变提示内容
}
//判断开关机
window.onload=function(){
	"use strict";
	var i=0;
 	document.getElementById("put").onclick=function(){
		
		if(i++%2===0){
				powerOff();
		}else{
				powerOn();
		}
	};
};