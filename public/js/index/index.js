
$(document).ready(function(){

//焦点图
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false
	});
//滚动新闻
	$('#scroller').vTicker({
		speed: 500, //滚动速度，单位毫秒。
		pause: 3000, //暂停时间，就是滚动一条之后停留的时间，单位毫秒。
		showItems: 2, //显示内容的条数。
		animation: 'fade', //动画效果，默认是fade，淡出，不想要就删除，硬切。
		mousePause: true, //鼠标移动到内容上是否暂停滚动，默认为true。
		height: 250, //滚动内容的高度。
		direction: 'up' //滚动的方向，默认为up向上，down则为向下滚动。
	});

	/*项目展示*/
	$(".con ul li").hover(function() {
		$(this).find(".txt").stop().animate({
			height: "407px"
		}, 400);
		$(this).find(".txt h3").stop().animate({
			paddingTop: "60px"
		}, 400);
	}, function() {
		$(this).find(".txt").stop().animate({
			height: "45px"
		}, 400);
		$(this).find(".txt h3").stop().animate({
			paddingTop: "0px"
		}, 400);
	})

	function bindEvent(){
		/*登录，注册按钮绑定事件*/
		/*$('#signin_btn').on('click', function(){
		 $('.modal_backdrop').show();
		 $('#sign_in_up').show();
		 });
		 $('#signup_btn').on('click', function(){
		 $('.modal_backdrop').show();
		 $('#sign_in_up').show();
		 });*/
		/*$('.more-bussiness-intro').on('click', function(){
		 var gotoUrl = $(this).data('url');

		 });*/
	}
});