//注册页面：
//var userName1=$("#userName1")[0];
//var pwd1=$("#pwd1")[0];
//var pwd2=$("#pwd2")[0];
//var oBtn=$("button")[0];
//var ck=$(".f-regist form p input")[0];
//var oH6=$(".f-regist form h6")[0];
var regs={
	userNameReg: /^(([\u4e00-\u9fa5])|[a-zA-Z0-9-_]){4,20}$/,
	pwdReg: /^.{6,20}$/,
}
window.onload=function(){
	var userName1=document.getElementById("userName1");
	var pwd1=document.getElementById("pwd1");
	var pwd2=document.getElementById("pwd2");
	var oBtn=document.getElementById("button");
	var ck=document.getElementById("ck");
	var oH6=document.getElementById("h");
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
		var oP1=$("#userName1+div")[0];
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
		var oP2=$("#pwd1+div")[0];
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


pwd2.onkeyup=pwd2.onfocus=pwd2.onblur=function(evt) {
		var e = evt || window.event;
		checkPwd2(e);
	}
	function checkPwd2(_e) {
		var type;
		if(_e) {
			type = _e.type;
		}
		var value1 = pwd1.value;
		var value2 = pwd2.value;
		var oP3=$("#pwd2+div")[0];
		if(type=="focus") {
			if(value2=="") {
				
				oP3.innerHTML = "请再次输入密码";
				return false;
			}
		}
		if(value2 == "") {
			oP3.innerHTML = "请再次输入密码";
			return false;
		} else if(value2 == value1) {
			oP3.innerHTML=""
			return true;
		} else {
			oP3.innerHTML = "密码不一致";
			return false;
		}
	}
	oBtn.onclick=function(){
		var value3=userName1.value;
		var value4=pwd1.value;
		if(ck.checked){
			if(checkUserName1()&checkPwd1()&checkPwd2()){
				
				var j=0;
				var username=$.cookie("username")?JSON.parse($.cookie("username")):{}
				if(username){
					for(var i in username){
						j++
					}
					var key="id"+(j+1);
					username[key]={
						name:value3,
						pwd:value4
					
					}
				}else{
					username.id1={
						name:value3,
						pwd:value4
					}
				}
				
				$.cookie("username",JSON.stringify(username),{expires:7,path:"/"});
			    
				location.href="login.html";
			}
		}else{
				oH6.innerHTML="请同意协议"
			}
		
		
	}
	
}
//返回首页：
	$(".head1 .two a").click(function(){
		location.href="index.html"
	})
	



