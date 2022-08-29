$("#demo").simpleSlide({
  column: 1, // Amount for items showing in window at once.
  slidingTime: 1000, // How long for sliding an item.(ms)
  showButtonForever: false, // If true, next/prev button will never hide at first/last position.
  cycle: false, // If true and if sliding position is at last position, the next slide will slide to first position at next time. If sliding position is at first position, the prev slide will slide to last position.
  autoSliding: 0, // If greater than 0, sliding automatically and it is millisecond for sliding.
});

$("#slide01").simpleSlide({ column: 3, autoSliding: 3000, slidingTime: 3000 });
$("#slide02").simpleSlide({ column: 3, autoSliding: 3000, slidingTime: 3000 });
$("#slide03").simpleSlide({ column: 3, autoSliding: 3000, slidingTime: 3000 });
$("#slide04").simpleSlide({ column: 3, autoSliding: 3000, slidingTime: 3000 });
$("#slide05").simpleSlide({ column: 3, autoSliding: 3000, slidingTime: 3000 });

// ------------------------------------------------

// showcase
$('#slide06').simpleSlide({column:1, autoSliding:5000})