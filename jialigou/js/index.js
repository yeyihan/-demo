

//头部字幕滚动
var marQuee=$(".marQuee");
var start=$("#header .start");
var end=$("#header .end");
var oUl1=$("#header ul");
var speed=2;
oUl1.width();
autoPlay1();
function autoPlay1(){
	clearInterval(marQuee.timer);
	marQuee.timer=setInterval(function(){
		 speed+=1;
		if(oUl1.offset().left<-oUl1.width()/2){
			oUl1.css("left",0)
		}else{
			oUl1.css("left",-speed)
		}
	},10)
	
}
marQuee.mousemove(function(){
	clearInterval(marQuee.timer);
})
marQuee.mouseout(function(){
	autoPlay1();
})
//轮播图
var oDiv=$("#conner");
var oUl=$("#conner .box");
var aLi=$("#conner .box li");
var oNav=$("#conner .nav");
var aNav=$("#conner .nav div");
var oPrev=$("#conner .prev");
var oNext=$("#conner .next");
var len=aLi.length;
var iNow=1;
var oFirst=aLi.first().clone();
var oLast=aLi.last().clone();
oUl.append(oFirst);
oUl.prepend(oLast);

len+=2;
a=oUl.width(aLi.first().outerWidth()*len);
oUl.css("left",-aLi.first().outerWidth());
autoPlay();
function autoPlay(){
//	clearInterval(oDiv.timer);
	oDiv.timer=setInterval(function(){
		iNow++;
		if(iNow==len){
			oUl.css("left",-aLi.first().outerWidth());
			iNow=2;
		}
		tab();
	},1000)
}

oPrev.click(function(){
	iNow--;
	if(iNow==-1){
		oUl.css("left",-(len-2)*aLi.first().outerWidth());
		iNow=len-3;
	}
	tab();
})

oNext.click(function(){
	iNow++;
	if(iNow==len){
		oUl.css("left",-aLi.first().outerWidth());
		iNow=2;
	}
	tab();
})

oDiv.mouseover(function(){
	clearInterval(oDiv.timer);
})

oDiv.mouseout(function(){
	autoPlay();
})

aNav.click(function(){
	iNow=$(this).index()+1;
	tab();
})

function tab(){
	aNav.removeClass("active");
	var navIndex=0;
	if(iNow==0){
		navIndex==len-3;
	}else if(iNow==len-1){
		navIndex=0;
	}else{
		navIndex=iNow-1;
	}
	aNav.eq(navIndex).addClass("active");
	
	oUl.stop().animate({left: -iNow*aLi.first().outerWidth()});
}

//直播动态加载：
$.ajax({
	type:"get",
	url:"../data/index/tv-life.json",
	async:true,
	success:function(data){
		for( var i in data){
				var str= "<li>"+
							"<span>"+data[i].time+"</span>"+
							"<h6>"+data[i].p2+"</h6>"+
							"<a href='goodList.html'>"+"<img src="+data[i].src+"/>"+"</a>"+
							"<div>"+
								"<a href='goodList.html'>"+data[i].p1+"</a>"+
								"<p>"+data[i].price+"</p>"+
							"</div>"+
						"</li>"						
			$(".right ul").append(str);	
		}
	}	
})

//热播商品
$.ajax({
	type:"get",
	url:"../data/index/hotgood.json",
	async:true,
	success:function(data){
		for( var i in data){
				var str= "<li>"+
						"<a href='goodList.html'>"+"<img src="+data[i].src+"/>"+"</a>"+
						"<div>"+
							"<a href='goodList.html'>"+data[i].p1+"</a>"+
							"<p>"+data[i].price+"</p>"+	
						"</div>"+
						"<span>"+data[i].p2+"</span>"+
					"</li>"					
			$(".sell .right").append(str);	
		}
	}	
})
$
//楼梯动态请求数据：
$.ajax({
	type:"get",
	url:"../data/index/louti.json",
	async:true,
	success:function(data){
		
		var LouTiBox=$(".loutiBox");
		var result=data.stairs;
		for (var i in result) {
			console.log(i)
			var str="<div class='louti'>"+
						"<ul>"+
							"<li>"+"<img src="+result[i].loubiao+"/>"+"</li>"+
							"<li>"+"<a href='goodList.html'>"+result[i].loubiao_+"</a>"+"</li>"+
						"</ul>"+
						"<div class='con'>"+
							"<div class='left'>"+
								"<ul>"+
//									
								"</ul>"+
								"<a href='goodList.html'>"+"<img src="+result[i].srcbig1+"/>"+"</a>"+
							"</div>"+
							"<div class='right'>"+
								"<a href='goodList.html'>"+"<img src="+result[i].srcbig2+"/>"+"</a>"+
								"<div class='ri_c'>"+
//									
								"</div>"+
							"</div>"+
						"</div>"+
					"</div>"
			LouTiBox.append(str)	
		for (var a in result[i].list) {
//			console.log($(this).index())
			$('.louti .con .left ul').eq($(this).index()).append("<a>"+result[i].list[a]+"</a>")
		}
		for (var b in result[i].goodList) {
			console.log(b)
			var str1=
				"<li>"+
					"<a href='goodList.html'>"+"<img src="+result[i].goodList[b].src+"/>"+"</a>"+
					"<p>"+"<a href='goodList.html'>"+result[i].goodList[b].p+"</a>"+"</p>"+
					"<span>"+result[i].goodList[b].sprice+"</span>"+
				"</li>"
			$(".ri_c").eq($(this).index()).append(str1)	
			
		}
	}	
	}	
})

//楼梯跳转：
var isClick=false;

$(".loutiNav ul li").click(function(){
	isClick=true;

	$(this).find("span").addClass(".active").parent().siblings().find("span").remove(".active");
	var iTop=$(".louti").eq($(this).index()).offset().top;
	$("html,body").stop().animate({
				"scrollTop":iTop
			},500,function(){
				isClick=false;
			})
})
if(!isClick){
	$(window).scroll(function(){
	var iScrollTop=$(this).scrollTop();
	$(".louti").each(function(){	
		if(iScrollTop>=$(this).offset().top-$(this).prev().outerHeight()/2){
			$("#loutiNav ul li").eq($(this).index(".louti")).find("span").addClass("active")
			.parent().siblings().find("span").removeClass("active");
		}
	})
})
}
//吸顶菜单：
var iTop1=$("#header_two form").offset().top;
$(document).scroll(function(){
//	console.log(111)
	var iScrollTop=$(this).scrollTop();
//	console.log(iScrollTop)
	if(iScrollTop>=iTop1){
//		console.log(222)
		$("#header_two form").css({position:"fixed","top":-20,"left":240});
	}else{
		$("#header_two form").css("position","static");
	}
})
//搜索框
	var oInput=$("#header_two form input");
			oInput.keyup(function(){
				$.ajax({
					url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+oInput.val()+"&json=1&p=3&t",
					dataType:"jsonp",
					jsonp:"cb",
					success:function(data){
						var lists = data.g;
						var oUl = $("#header_two form ul");
						oUl.html("");
						for(var i in lists) {
							var oLi = $("<li></li>");
							oLi.html(lists[i].q);
							oUl.append(oLi);
						}
					}
				})
			})

		

//导航
$(".subpage ul li").mouseenter(function(){
	$(this).find(".prosmore").css("display",'block').parent().siblings().find(".prosmore").css("display",'none')
	$(this).find('.coloer').css({'background':'#666',"color":"#000"}).parent().siblings().find(".coloer").css({'background':'#000',"color":"#fff"})
})
$(".subpage ul li").mouseleave(function(){
	$(this).find(".prosmore").css("display",'none');
})
//固定条
$("#ad span").click(function(){
	$("#ad").css("display","none");
})








		
