function loadHtml(url,selector){
	$.ajax({
			url:url,
			type:"get",
			async:false,
			success:function(data){
				$(selector).html(data);
			}
		})
}



