//三级联动：
var oCont =document.getElementById('Cont');
			var oCity =document.getElementById('City');
			var oSent =document.getElementById('Sent');
			
			var contArr = [{'id':'1','name':'北京'},{'id':'2','name':'上海'},{'id':'3','name':'深圳'}, {'id':'4','name':'四川省'}];
			var html = '<option>---请选择省份---</option>';
			for(var i=0;i<contArr.length;i++){
				html += '<option value='+contArr[i].id+'>'+contArr[i].name+'</option>';
			};
			oCont.innerHTML = html;
			
			var city = {'1':['101#北京'],
						'2':['201#上海市','202#上海市1'],
						'3':['301#深圳市'],
						'4':['401#成都市','402#绵阳市','403#自贡市']
						};
			oCont.onchange = function(){
				var val = oCont.value;
				oSent.disabled = true;
				//alert( val );
				var html = '<option>---请选择城市---</option>';
				var cityArr = city[val];
				for( var i=0;i<cityArr.length;i++ ){
					var citySp = cityArr[i].split('#');
					html += '<option value='+citySp[0]+'>'+citySp[1]+'</option>';
				}
				oCity.innerHTML = html;
				oCity.disabled = false;
			}
			var sent = {'101':['朝阳区','海淀区','大兴区','沙河区'],
						'201':['朝阳区1','海淀区1','大兴区1','沙河区1'],
						'202':['朝阳区2','海淀区2','大兴区2','沙河区2'],
						'301':['深圳1','深圳2','深圳3'],
						'401':['青羊区','锦江区','金牛区']
						}
			oCity.onchange = function(){
				var val = oCity.value;
				var html = '<option>---请选择区---</option>';
				var sentArr = sent[val];
				for(var i=0;i<sentArr.length;i++){
					html += '<option>'+sentArr[i]+'</option>';
				};
				oSent.innerHTML = html;
				oSent.disabled = false;
			};
			
//获取cookie
var goods = $.cookie("carts")? JSON.parse($.cookie("carts")) : {};

for (var goodId1 in goods) {
	var str = '<ol>'+
		'<li class="one" style="width: 150px;">'+
			'<img src="'+goods[goodId1].src+'"/>'+
		'</li>'+
		'<li class="two" style="width: 378px;">'+
			'<span>'+goods[goodId1].name+'</span>'+'<br />'+
			 goods[goodId1].size+
		'</li>'+
		'<li class="three" style="width: 232px;">'+'<span>'+goods[goodId1].price+'</span>'+'</li>'+
		'<li class="four" style="width: 193px;">'+'<span>'+goods[goodId1].num3+'</span>'+'</li>'+
		'<li class="five" style="width: 200px;">免费</li>'+
	'</ol>'
	
		$(".contlist1").append(str)
}

var pay =$.cookie("pay")? JSON.parse($.cookie("pay")) :{}
 $(".tijiao .one b").html(pay)
  $(".tijiao .two .one1").html(pay)









$("#baoc").click(function(){
	var str =$("#Cont").val()+$("#City").val()+$("#Sent").val()+$(".two textarea").val()
	var name=$(".three input").val()
	var numbe=$(".four input").val()
	console.log(str)
	
	var nameStr={
		strr:str,
		namee:name
	}
	$.cookie("diz", JSON.stringify(nameStr), {expires: 7, path: "/"})
	console.log(diz)
	$("#name").html(name)
	$("#diz").html(str)
	$(".tijiao .two span b").html(str)
	$(".one2").html(name)
	
})
var diz =$.cookie("diz")? JSON.parse($.cookie("diz")):{};
$("#name").html(diz.namee)
$("#diz").html(diz.strr)

//$(".cheack-list p .one").click(function(){
//	var isok=true;
//	if(isok){
//		$(".adrass").css("display",'none')
//		isok=false
//	}else if(!isok){
//		$(".adrass").css("display",'block')
//		isok=true
//	}
//	console.log(isok)
//	
//})

$(".tijiao .two span b").html(diz.strr)
$(".one2").html(diz.namee)

 