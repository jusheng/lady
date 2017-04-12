
$(function(){
	// 我买到的全部订单与待收货tab切换
	$(".wm-hd li").on('click',function(){
		var index=$(this).index();
		$(this).addClass("wm-select").siblings().removeClass("wm-select");
		$(".wm-bd li").eq(index).addClass("wm-show").siblings().removeClass("wm-show");
	});


	// 提交订单选择送货时间
	$(".snsn-select").on('click',function(){
		$(".select-time").css({"display":"block"});
	});
	$(".select-time li").on('click',function(){
		var txt=$(this).text();
		$(".send-time").text(txt);
		$(".select-time").css({"display":"none"});
	})
})