//登录页面：
var regs={
	userNameReg: /^(([\u4e00-\u9fa5])|[a-zA-Z0-9-_]){4,20}$/,
	pwdReg: /^.{6,20}$/,
}
window.onload=function(){
		$(".fls1 span").click(function(){
		yzm()
	})
	yzm()
	function yzm(){
		
		var code=Math.floor(Math.random()*9000)+1000;
		
		var oSpan=$(".fright form .fls1 span")[0];
		oSpan.innerHTML=code;
	}
	var userName1=document.getElementById("userName");
	var pwd1=document.getElementById("pwd");
	var yan=$("#yan")[0];
	var oP3=$(".fright form .fls1 p")[0];


	userName1.onkeyup=userName1.onfocus=userName1.onblur=function(evt) {
			var e = evt || window.event;
			checkUserName1(e);
	}
	
	function checkUserName1(_e){
			var type;
			if(_e){
				type=_e.type;
			}
			value=userName1.value;
			var oP1=$(".fright form .f-input p")[0]
			
			if(type=="focus"){
				if(value==""){
					oP1.innerHTML="";
					return false;
				}
			}
			if (type=="blur") {
				if (value=="") {
					oP1.innerHTML="用户名不能为空";
					return false;
				}
			}
			if (value=="") {
				oP1.innerHTML="用户名不能为空";
				return false
			}else if(regs.userNameReg.test(value)){
				oP1.innerHTML=""
				return true;
			}else{
				oP1.innerHTML="格式错误 汉字、字母、数字、“-”“_”的组合，4-20个字符";
				return false
			}
		}

	pwd1.onkeyup=pwd1.onfocus=pwd1.onblur=function(evt) {
			var e = evt || window.event;
			checkPwd1(e);
		}

	function checkPwd1(_e){
		var type;
			if(_e){
				type=_e.type;
			}
			var value1=pwd1.value;
			var oP2=$(".fright form .fls p")[0];
			if(type=="focus"){
				if (value1=="") {
					oP2.innerHTML="";
					return false;
				}
			}
			if (type=="blur") {
				if(value1==""){
					oP2.innerHTML="密码不能为空";
					return false;
				}
			}
			if (value1=="") {
				oP2.innerHTML="密码不能为空";
				return false;
			}else if(regs.pwdReg.test(value1)){
				oP2.innerHTML="";
				return true;
			}else{
				oP2.innerHTML="密码长度应在6-20个字符之间";
				return false;
			}
		}		
		
	yan.onblur=function(evt){
		var e=evt || window.event;
		checkYan();
	}
	
	function checkYan(){
		
		if(yan.value==code){
			oP3.innerHTML='';
		}else if(yan.value==''){
			oP3.innerHTML="验证码不能为空";
		}
		else{
			oP3.innerHTML="验证码不正确"
		}
	}
	$("#boutton1")[0].onclick=function(){
		var username11 = $.cookie("username");
		var user=userName1.value;
		var pwddd=pwd1.value;
		var result111=JSON.parse(username11);
		for (var i in result111) {
			if(result111[i].name==user&&result111[i].pwd==pwddd){
				if($('.ra').is(":checked")){
					day=15;
					console.log(1)
				}else{
					day='';
					console.log(2)
				}
				$.cookie("name", JSON.stringify(user), {expires: day, path: "/"});
					location.href="index.html";
			}else{
				oP3.innerHTML="用户名不存在或密码错误"
			}
			
		}
		
		
	}
	
}
var name=$.cookie("name")? JSON.parse($.cookie("name")) : "";
if(name != ""){
	location.href="index.html";
}
