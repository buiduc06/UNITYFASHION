$(document).ready(function($) {
	$('.button-buy').hide();
	$('.bt-buy .buy').hide();
	$(this).find('.news-img .news-menu').hide('fast');
	$(".item").hover(function(){
		$(this).css("border-color", "#ffab00");
		$(this).find('.button-buy').show('fast');
		$(this).find('.item-img img').css("transform", "scale(2s)");
	}, function(){
		$(this).css("border-color", "white");
		$(this).find('.button-buy').hide('fast');
	});

	$(".news-product .news-item").hover(function(){
		$(this).find('.news-img .news-menu').show('fast');
	}, function(){
		$(this).find('.news-img .news-menu').hide('fast');
	});

// sidebar menu
$( "#mobile .show-menu" ).on( "click", function() {
	$("#mobile .modal-show").show('fast');
});
$( "#mobile .modal-close" ).on( "click", function() {
	$("#mobile .modal-show").hide('fast');
});
$(".modal-category .child-cate").hide();
// menu catc
$( ".modal-category" ).on( "click", ".non-active", function() {
	$(".modal-category .child-cate").show('fast');
	$(".modal-category .title-cate i").removeClass('fa-plus');
	$(".modal-category .title-cate i").addClass('fa-minus');
	$(this).addClass('active-menu');
	$(this).removeClass('non-active');
});
$( ".modal-category" ).on( "click", ".active-menu", function() {
	$(".modal-category .child-cate").hide('fast');
	$(".modal-category .title-cate i").addClass('fa-plus');
	$(".modal-category .title-cate i").removeClass('fa-minus');
	$(this).removeClass('active-menu');
	$(this).addClass('non-active');
});

$( ".category-filter .filter" ).click(function() {
  $(".category-filter .option-filter").slideToggle('slow').toggleClass('option-none');
});
// slide dơn button

$( ".filte-box-title" ).on( "click", function() {
	$(this).children('.fa').toggleClass('fa-chevron-left fa-chevron-down');
	$(this).parent('.filter-box').children('.filter-hide').slideToggle('slow').toggleClass('filter-none');
});

});


// slide show

$(document).ready(function($) {
	var SlideShow = {
		data : [],
		startSlide : function(slide, maxItem, classparent,speed, next, prev, classparentbutton){
			var stt = 0;
			var countItem = slide.last().prevObject.length;
			function autoplay() {
				if (stt + maxItem == countItem) {
					for (var i = 0; i <= maxItem; i++) {
						(slide).eq(i).show(1000);
					}
					stt = 0;
				}
				else {
					(slide).eq(stt).hide(1000);
					stt++;
				}
			}
	// nút next
	$(next).on('click', function(event) {
		autoplay();
	});
	//nut preview
	$(prev).on('click', function(event) {
		if(stt!==0){
			stt--;
			(slide).eq(stt + maxItem).hide(1000);
			(slide).eq(stt).show(1000);
		}
	});

	// tự chạy slide khi load xong trang
	// var initList = setInterval(function(){ autoplay();}, speed);

	// bắt sự kiện hover vào phần tin tức thì dừng slide
	// $(classparent).mouseover(function(){
	// 	clearInterval(initList);
	// }).mouseout(function(){
	// 	initList = setInterval(function(){ autoplay();}, speed) ;
	// });

	 // bắt sự kiện hover vào phần button thì dừng auto slide
	 // $(classparentbutton).mouseover(function(){
	 // 	clearInterval(initList);
	 // }).mouseout(function(){
	 // 	initList = setInterval(function(){ autoplay();}, speed) ;
	 // });
	},

	};

	// possition
	// slide, maxItem, classparent,speed, next, prev, classparentbutton
	SlideShow.startSlide($('.container-slide .grid-slide'), 1 , ".container-slide", 4000, "#button-next", "#button-prev", ".button-silde");



});

