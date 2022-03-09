var windowsHeight = window.innerHeight+"px";
    var windowsWidth = window.innerWidth;
    if(windowsWidth <= 390){
        var screenWidth = 100+"%";
    }else{
        var screenWidth = windowsWidth+"px";
    }
$("#header .intro").css({
    height:windowsHeight
})
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });