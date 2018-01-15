$(function(){
var carousel = $("#carousel");
var gallery = $(".gallery");
var dots = $(".dots");

gallery.find("li").each(function(){
	dots.append("<li></li>");
}) 

var dot = dots.find("li");
dot.first().addClass("active");

dot.click(function(){
	target = $(this).index();
	moveSlider(target);
});

function moveSlider(target){
	gallery.stop().animate({
		"left": -400 * target
	});
	dot.removeClass("active").eq(target).addClass("active");
}

var right = $(".arrow-right");
right.click(function(){
	target = dot.siblings(".active").index();
	target == dot.length - 1 ? target = 0 : target += 1;
	moveSlider(target);
})

var left = $(".arrow-left");
left.click(function(){
	target = dot.siblings(".active").index();
	target == dot.length - 5 ? target = 4 : target -= 1;
	moveSlider(target);
})

});

