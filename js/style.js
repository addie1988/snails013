// headerMenu
$(document).ready(function () {
  $(".headerMenuContent>ul>li>a").click(function () {
    $(".headerMenuContent>ul>li>a").css("color", "#777");
    $(this).css("color", "#fe7865");
  });
});

// -----------------------------------------------------------------------
$(document).ready(function () {
  $(".rwdMenuButtonContent").click(function () {
    $(".rwdMenuButtonContent").toggleClass("rwdActive");
  });
});

$(document).ready(function () {
  $(".rwdMenuButtonContent").click(function () {
    $(".rwdMenuContent>.rwdMenuBox").slideToggle(1500);
  });
});

// -----------------------------------------------------------------------


