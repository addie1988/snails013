(function (i) {
  (i.fn.simpleSlide = function (e) {
    var l = i.extend({}, i.fn.simpleSlide.defaults, e);
    return this.each(function () {
      l.autoSliding > 0 && (l.cycle = !0),
        l.cycle && (l.showButtonForever = !0);
      var e,
        n = i(this),
        t = n.children().first(),
        s = 0,
        o = 100 / l.column,
        d = l.column,
        r = t.children().length,
        c = i("<div></div>").css({
          position: "relative",
          overflow: "hidden",
          height: "100%",
        });
      if (0 == t.length) return !1;
      if (
        (t.wrap(c),
        n.css({ position: "relative" }),
        t.css({ width: o * r + "%" }).addClass("simple-slide-item-list"),
        d >= r)
      )
        return t.css({ margin: "auto" }), !1;
      var a = function () {
          l.showButtonForever || i.fn.simpleSlide.displayArrow(s, r, d, u, f);
        },
        u = i('<div class="simple-slide-prev-arrow"></div>')
          .click(function () {
            l.cycle ? (s = 0 == s ? r - d : s - 1) : s > 0 && s--,
              t
                .stop()
                .animate({ "margin-left": -(s * o) + "%" }, l.slidingTime);
          })
          .appendTo(n)
          .click(a),
        f = i('<div class="simple-slide-next-arrow"></div>')
          .click(function () {
            l.cycle ? (s = d + s == r ? 0 : s + 1) : r > d + s && s++,
              t
                .stop()
                .animate({ "margin-left": -(s * o) + "%" }, l.slidingTime);
          })
          .appendTo(n)
          .click(a);
      l.showButtonForever || u.hide(),
        l.showButtonForever || i.fn.simpleSlide.displayArrow(s, r, d, u, f),
        l.autoSliding &&
          (n.hover(
            function () {
              clearInterval(e);
            },
            function () {
              e = i.fn.simpleSlide.slide(f, l.slidingTime + l.autoSliding);
            }
          ),
          (e = i.fn.simpleSlide.slide(f, l.slidingTime + l.autoSliding)));
    });
  }),
    (i.fn.simpleSlide.slide = function (i, e) {
      return setInterval(function () {
        i.trigger("click");
      }, e);
    }),
    (i.fn.simpleSlide.defaults = {
      column: 1,
      slidingTime: 1e3,
      showButtonForever: !1,
      cycle: !1,
      autoSliding: 0,
    }),
    (i.fn.simpleSlide.displayArrow = function (i, e, l, n, t) {
      0 == i ? n.fadeOut("slow") : n.fadeIn(),
        i + l == e ? t.fadeOut("slow") : t.fadeIn();
    });
})(jQuery);
