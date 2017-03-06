
	$(".menuHead").click(function(){
	$(".menuBody ").eq($(this).index()/2).toggle();
	
})


//加载列表图片
$.ajax({
	url:"../data/goodList/pic1.json",
	type:"get",
	async:true,
	success:function(data){
		for (var i in data) {
			var str=
			"<li>"+
				"<div class='pic1'><img id="+data[i].id+" src="+data[i].src+"/></div>"+

						"<p>"+"<a>"+data[i].p1+"</a>"+"</p>"+
						"<div class='p'>"+
							"<p>"+data[i].p2+"</p>"+
							"<p>"+data[i].p3+"</p>"+
						"</div>"+
						"<div class='car'>"+
							"<a>"+data[i].a1+"</a>"+
							"<a>"+data[i].a2+"</a>"+
						"</div>"+
			"</li>"			
			$(".pic").append(str);
						
		}
		
		$(".pic1 img").click(function(){	
			var goodId=$(this).attr("id");
			var lis={
				id:goodId
			}
			$.cookie("lst", JSON.stringify(lis), {expires:"", path: "/"});
			location.href="goodDetail.html";
		})
		$(".car a:first").click(function(){	
			var goodId=$(this).parent().parent().find(".pic1 img").attr("id");
			var lis={
				id:goodId
			}
			$.cookie("lst", JSON.stringify(lis), {expires:"", path: "/"});
			location.href="goodDetail.html";
			
		})
		
	}
})






