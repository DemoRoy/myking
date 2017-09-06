// 文字的淡出
$(window).bind('load',function(){
	// 第一次打出的文字
	for (var i = 0; i <= 12; i++) {
		$('#hero-beginning-animations .types').children('.diff:eq('+i+')').delay(100*i).fadeIn(50);
	};
	// 退格删除错误的文字
	setTimeout(function(){
		var count = 1;
		for (var j = 12; j >= 4; j--) {
			$('#hero-beginning-animations .types').children('.diff:eq('+j+')').delay(100*count).fadeOut(50);
			count ++;
		};
	}, 2000);
	// 再打出更正的文字
	setTimeout(function(){
		for (var k = 0; k <= 5; k++) {
			$('#hero-beginning-animations .types').children('.easy:eq('+k+')').delay(100*k).fadeIn(50);
		};
	}, 4000);
	$('#hero-beginning-animations').delay(6000).fadeOut(600);
});