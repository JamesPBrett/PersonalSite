const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fab fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fab fa-times'></i>";
  }
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);

$(".card-toggle").on("click", function () {

  // Card toggle state
  $(".card-toggle").removeClass("active");
  $(this).addClass("active");

  var isAnimating = false;

  if (!isAnimating) {
    isAnimating = true;

    $(".card").find(".card-content").css("z-index", 0);
    $(".card").removeClass("active");

    var that = $(this);

    $(this).siblings().css("z-index", 1);

    setTimeout(function () {
      that.parent().toggleClass("active").find(".card-content").on("transitionend", function () {
        isAnimating = false;
      });

    }, 10);
  } else {

  }
});

$("input,textarea").blur(function () {
  if ($(this).val()) {
    $(this).parent().addClass("filled");
  } else {
    $(this).parent().removeClass("filled");
  }
});

$(".contact").on("click", function () {
  $(".contact-form").toggleClass("active");
});
$(".contact-form input[type=submit], .contact-form .close").on("click", function (e) {
  e.preventDefault();
  $(".contact-form").toggleClass("active")
});