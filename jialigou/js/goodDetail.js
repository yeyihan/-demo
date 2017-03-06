
//选项卡
var aBtn=$(".right .infoNav li");
var aDiv=$(".right .navContent div");
aBtn.click(function(){
//	$(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
	$(".right .infoNav li span").eq($(this).index()).addClass("active").parent().siblings().find("span").removeClass("active")
    $(".right .navContent div").eq($(this).index()).addClass("active").siblings().removeClass("active");
})


//动态加载数据：
var list = $.cookie("lst")? JSON.parse($.cookie("lst")) : {};
var idI=list.id;
$.ajax({
	url:"../data/goodDetail/tuijian.json",
	type:"get",
	async:false,
	success:function(data){

	if(idI=='zero'){
		data=data.zero;
	}else if(idI=='one'){
		data=data.one;
	}else if(idI=='two'){
		data=data.two;
	}else if(idI=='three'){
		data=data.three;
	}else if(idI=='four'){
		data=data.four;
	}else if(idI=='five'){
		data=data.five;
	}else if(idI=='six'){
		data=data.six;
	}else if(idI=='seven'){
		data=data.seven;
	}else if(idI=='eight'){
		data=data.eight;
	}else if(idI=='nine'){
		data=data.nine;
	}

	//创建listcontent导航
	var str1="<span>"+data.yuju+"</span>";
	$(".listContent span .aa").append(str1);
	//创建放大镜中间图片
	var str2="<img src="+data.big+" class='middle-img'/>";
	$(".middle-img-box").prepend(str2);
	//创建放大镜大图片
	var str3="<img src="+data.big+" class='big-img'/>"
	$(".big-img-box").append(str3);
	//创建小图
	for(var i in data.small){
		var str4="<img src=" +data.small[i]+"/>"
		$(".small-img-box li a").append(str4);
	}
	//创建最佳搭配商品图片
	for(var i in data.tuijian.img){
	
		var str5="<li>"+
		"<a>"+"<img src="+data.tuijian.img[i]+"/>"+"</a>"+
					"<div class='aaa'>"+"<a>"+data.tuijian.p[i]+"</a>"+"</div>"+
					"<div>"+data.tuijian.price1[i]+"</div>"+
					"</li>"
		$(".daPei ul").append(str5);
	}
	//添加供货号和品名
	var str6="<li>"+data.yuju+"</li>"+
			"<span>"+data.size+"</span>"
	$(".box1 ul").append(str6);
    //创建商品价格
    var str7="<span class='two'>"+data.price+"</span>"
    $(".xiangXi li:first").append(str7);
   	
   	//购物车跳转
	$("#header_two .two div p").click(function(){

		location.href="payCar.html";
	})
	//购物车
$(".butt .two").click(function(){
		
		var goodId1=idI;
		var goodName=data.yuju;
		var goodPrice=data.price;
		var goodsize=data.size;
		var img=data.big;
		var num=parseInt($(".box1 h6 input").val());
		var goods = $.cookie("carts") ? JSON.parse($.cookie("carts")) : {};
		
	    if(goodId1 in goods){
	    	if(num==1){
	    		goods[goodId1].num3++;
	    	}else{
	    		goods[goodId1].num3=goods[goodId1].num3+num;
	    	}
	    }else{
	    	goods[goodId1]={
	    		id:goodId1,
	    		name:goodName,
	    		price:goodPrice,
	    		size:goodsize,
	    		num3:num,
	    		src:img
	    	}
	    }
		$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
		var num4=goods[goodId1].num3;
		console.log(num4)
		$("#header_two .two span i").html(num4);
})
//	$(".addToCar").click(function() {
//			var aSpan = $(this).siblings();
//			var goodId = aSpan.eq(0).attr("id");
//			var goodName = aSpan.first().html();
//			var goodPrice = $(aSpan[1]).text();
//
//			var goods = $.cookie("carts") ? JSON.parse($.cookie("carts")) : {};
//			if(goodId in goods) {
//				goods[goodId].num++;
//			} else {
//				goods[goodId] = {
//					id: goodId,
//					name: goodName,
//					price: goodPrice,
//					num: 1
//				}
//			}
//			$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"});
//			console.log($.cookie("carts"));
//		})
	}
	
	
})
//数量加操作

	$(".box1 h6 .a").click(function(){
		var n=$(".box1 h6 input").val();
		var num=parseInt(n)+1;
		$(".box1 h6 input").val(num);
		
		})
		
	
//数量减操作
    $(".box1 h6 .b").click(function(){
		var n=$(".box1 h6 input").val();
		if(n>1){
			var num=parseInt(n)-1;
				$(".box1 h6 input").val(num);
		}else if(num=1){
				$(".box1 h6 input").val(1);
		}
		
	})
    
 


//放大镜：

var oDiv=$("#box");
var oMiddleImgBox=$("#box .middle-img-box");
var oMiddleImg=$(".middle-img-box .middle-img");
var oImageZoom=$(".middle-img-box .image-zoom");
var oBigImgBox=$("#box .big-img-box");
var oBigImg=$(".big-img-box .big-img");
var oSmallImgBox=$("#box .small-img-box");
var aSmallImg=$(".small-img-box img");

aSmallImg.mouseover(function(){
		console.log(111)
	aSmallImg.removeClass("active");
	$(this).addClass("active");
	oMiddleImg.attr("src",$(this).attr("src"));
	oBigImg.attr("src",$(this).attr("src"));
});

oMiddleImgBox.mousemove(function(){
	oImageZoom.show();
	oBigImgBox.show();
})

oMiddleImgBox.mouseout(function(){
	oImageZoom.hide();
	oBigImgBox.hide();
})

oMiddleImgBox.mousemove(function(e){
	var iscrollLeft=$(window).scrollLeft();
	var iscrollTop=$(window).scrollTop();
	var iLeft=iscrollLeft+e.clientX-oImageZoom.outerWidth()/2-oMiddleImgBox.offset().left;
	var iTop=iscrollTop+e.clientY-oImageZoom.outerHeight()/2-oMiddleImgBox.offset().top;
	var iSmallMaxLeft=oMiddleImgBox.outerWidth()-oImageZoom.outerWidth();
	var iSmallMaxTop=oMiddleImgBox.outerHeight()-oImageZoom.outerHeight();
	if(iLeft<0){
		iLeft=0;
	}else if(iLeft>iSmallMaxLeft){
		iLeft=iSmallMaxLeft;
	}
	if(iTop<0){
		iTop=0;
	}else if(iTop>iSmallMaxTop){
		iTop=iSmallMaxTop;
	}
	var iBigLeft = -iLeft/iSmallMaxLeft*(oBigImg.outerWidth()-oBigImgBox.outerWidth());
	var iBigTop = -iTop/iSmallMaxTop*(oBigImg.outerHeight()-oBigImgBox.outerHeight());
	oImageZoom.css({"left": iLeft, "top": iTop});
	oBigImg.css({"left": iBigLeft, "top": iBigTop})

})