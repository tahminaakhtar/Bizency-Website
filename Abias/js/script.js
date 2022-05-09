setTimeout(function(){$(".preloader").slideUp()},1000) 
  

$('.counter').counterUp({
  delay: 10,
  time: 5000
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

$(".slider").slick({
  arrows: false,
  asNavFor: ".bottom-slider",
})

$(".bottom-slider").slick({
  arrows: true,
  slidesToShow: 3,
  centerMode: true,
  centerPadding: "0px",
  asNavFor:".slider",

})

$(".item2").mouseenter(function(){$(".item2 .round").css("tranform","scale(1.2)")
$(".item2 .round2").css("tranform","scale(1.3)")
$(".line2").css("width","35%")
})

$(".item2").mouseleave(function(){$(".item2 .round").css("tranform","scale(1)")
$(".item2 .round2").css("tranform","scale(1)")
$(".line2").css("width","5%")
})

$(".item3").mouseenter(function(){$(".item2 .round").css("tranform","scale(1.2)")
$(".item2 .round2").css("tranform","scale(1.3)")
$(".item3 .round").css("tranform","scale(1.2)")
$(".item3 .round2").css("tranform","scale(1.3)")
$(".line2").css("width","65%")
})

$(".item3").mouseleave(function(){$(".item2 .round").css("tranform","scale(1)")
$(".item2 .round2").css("tranform","scale(1)")
$(".item3 .round").css("tranform","scale(1)")
$(".item3 .round2").css("tranform","scale(1)")
$(".line2").css("width","5%")
})

$(".item4").mouseenter(function(){$(".item2 .round").css("tranform","scale(1.2)")
$(".item2 .round2").css("tranform","scale(1.3)")
$(".item3 .round").css("tranform","scale(1.2)")
$(".item3 .round2").css("tranform","scale(1.3)")
$(".item4 .round").css("tranform","scale(1.2)")
$(".item4 .round2").css("tranform","scale(1.3)")
$(".line2").css("width","100%")
})

$(".item4").mouseleave(function(){$(".item2 .round").css("tranform","scale(1)")
$(".item2 .round2").css("tranform","scale(1)")
$(".item3 .round").css("tranform","scale(1)")
$(".item3 .round2").css("tranform","scale(1)")
$(".item4 .round").css("tranform","scale(1)")
$(".item4 .round2").css("tranform","scale(1)")
$(".line2").css("width","5%")
})

$(".testi-slider").slick({
  fade: true,
  arrows: false,
})


$(".testi-bottom-slider").slick({
slidesToShow: 5,
centerMode: true,
centerPadding: "0",
arrows: false,
asNavFor: ".testi-slider",
preArrow: "<button> bad</button>",
nextArrow: "<button>good</button>",
})

$('#bar1').barfiller();
$('#bar2').barfiller();
$('#bar3').barfiller();
$('#bar4').barfiller();
$('#bar5').barfiller();