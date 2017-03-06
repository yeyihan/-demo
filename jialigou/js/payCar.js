//获取购物的的cookei
var goods = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};//获取cookie



for (var goodId1 in goods) {
	var count=parseInt(goods[goodId1].num3);
	var pricee=parseInt(goods[goodId1].price.split("¥")[1]);
	var cout=count*pricee;
	
    var str1="<ul class='goods'  id="+goods[goodId1].id+">"+
						"<li style='width: 252px;'class='one'>"+
							"<div>"+
								"<input type='checkbox' class='checkbox1'/>"+
								"<span class='red'></span>"+
							"</div>"+
							"<a><img src="+goods[goodId1].src+"/>"+"</a>"+
						"</li>"+
						"<li style='width: 310px;' class='two'>"+
							"<span>"+
								"<i>"+"<a>"+goods[goodId1].name+"</a>"+
								"</span>"+"<br />"+
								"<span>"+goods[goodId1].size+"</span>"+
								"<div>"+goods[goodId1].name+"</div>"+
						"</li>"+
						"<li class='three1' style='width: 152px;'>"+goods[goodId1].price+"</li>"+
						"<li class='four'  style='width: 157px;'>"+
							"<span class='one'>-</span>"+
							"<input class='shuliang' style='width:30px'>"+
							"<span class='three'>+</span>"+
						"</li>"+
						"<li class='five' style='width: 152px;'>"+"<span>"+"¥"+"<b>"+cout+"</b>"+"</span>"+"</li>"+
						"<li class='six' style='width: 155px;'>"+
							"<div>"+
								"<span>加入收藏夹</span>"+
								"<span class='removeThis'>删除</span>"+
							"</div>"+
							
						"</li>"+
					"</ul>"
					$(".listhold").prepend(str1);
					$(".shuliang").eq(0).val(goods[goodId1].num3)	
}


allP()
$(".one").click(function(){
	var n = parseInt($(this).siblings('input').val())
		n=n-1
	var pricee=$(this).parent().parent().siblings(".three1").find("i").html().split("¥")[1]
	var numm=n*pricee
	var goodId1=$(this).parent().parent().parent().attr("id")
	$(this).siblings('input').val(n)
	setcookie(goodId1,n);
	$(this).parent().parent().siblings(".five").find("b").html(numm)
	allP()
	})
$(".three").click(function(){
	var goodId1=$(this).parent().parent().parent().attr("id")
	var n = parseInt($(this).siblings('input').val())
		n=n+1
	var pricee=$(this).parent().parent().siblings(".three1").find("i").html().split("¥")[1]
	var numm=n*pricee;
	$(this).siblings('input').val(n)
	setcookie(goodId1,n);
	$(this).parent().parent().siblings(".five").find("b").html(numm)
	console.log(pricee)
	allP()
})


	function allP(){
		var sum=0;
   		 $.each($(".five b"),function(){
   			sum+=parseInt($(this).html())
			$(".go .two b").html(sum)
			$.cookie("pay",JSON.stringify(sum), {expires: 7, path: "/"})
   		})	
	}
  function setcookie(goodId1,n){
  	var goods = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};//获取cookie
  	goods[goodId1].num3= n
  	$.cookie("carts", JSON.stringify(goods), {expires: 7, path: "/"})
  }

//去结算
$(".go .four button").click(function(){
	location.href="pay.html";
})

	

