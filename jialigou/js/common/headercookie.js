//获取登录页面的cookie

var name=$.cookie("name")? JSON.parse($.cookie("name")) : "";

if(name == ""){
	$(".C").css('display',"block")
	$(".C-r").css('display',"none")
}else{
	$(".C").css('display',"none")
	$(".C-r .name").html(name)
	$(".C-r").css('display',"block")
}
$("#tuichu").click(function(){
	$(".C").css('display',"block")
	$(".C-r").css('display',"none")
	$.cookie("name", JSON.stringify(""), {expires: -1, path: "/"});
})