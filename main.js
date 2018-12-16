function myFunction(t) {
    t.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  $(".button").click(function() {
    $('html,body').animate({
        scrollTop: $(".mainSection").offset().top},
        'slow');
});
