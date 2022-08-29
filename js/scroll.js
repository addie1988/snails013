$('.demo').singlePageNav({
    offset: $('.single-page-nav').outerHeight(),
    threshold: 120,
    speed: 1000,
    currentClass:'current',
    easing:'swing',
    filter:':not(.external)',
    // up<a href="https://www.jqueryscript.net/time-clock/">date</a>Hash:true,
    beforeStart:function() {
    console.log('begin scrolling');
    },
    onComplete:function() {
    console.log('done scrolling');
    }
    });
    