/*=====================Tabs====================*/
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$("#defaultOpen").click(function () {
   document.getElementById("text").innerHTML="Louisiana <span>Real estate comission</span>";
});


$("#statetitle").click(function () {
   document.getElementById("text").innerHTML="Louisiana <span>Real Estate Requirements</span>";
});


/*============================== Menu ===========================*/
$(document).ready(function () {

var open = document.querySelector("#mobMenu");
var link = document.querySelector(".nav");
var close = document.querySelector(".mobail-menu-close");


open.addEventListener("click", function () { 
    link.classList.add("responsive"); 
    close.classList.add("mobmenu-close-block");
    open.classList.add("mobail-menuopen");
  });

close.addEventListener("click", function () {
  link.classList.remove("responsive");
  close.classList.remove("mobmenu-close-block");
  open.classList.remove("mobail-menuopen");
});
});


/*==============================Footer=================*/

(function(){

    footer();

    $(window).resize(function() {
      footer();
    });

    function footer() {
      var docHeight = $(window).height(),
        footerHeight = $('footer').outerHeight(),
        footerTop = $('footer').position().top + footerHeight;

      if (footerTop < docHeight) {
        $('footer').css('margin-top', (docHeight - footerTop) + 'px');
      }
    }

  })();




