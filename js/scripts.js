/* Make Sound */

function beep() {
    var audio = document.getElementById("beep");
    audio.volume = 0.1;
    audio.play();
}

function traduct() {
    var audio = document.getElementById("switchSound");
    var x = document.getElementById("traduction-screen");

    // Get the checkbox
    var checkBox = document.getElementById("checkbox-trad");
    audio.volume = 0.1;
    audio.play();

  // If the checkbox is checked
  if (checkBox.checked == true){

        document.getElementById("test").innerHTML = "&nbsp;&nbsp;Traduciendo al Español...";
        x.className += "center-screen d-block";

    let tID = setTimeout(function () {

    window.clearTimeout(tID);		// clear time out.
    
    x.className = "center-screen d-none";

        // similar behavior as clicking on a link
        window.location.href = "https://translate.google.com/translate?sl=en&tl=es&u=https://en.wikipedia.org/wiki/English_language";

    }, 3000);	// call function after 3000 milliseconds or 3 seconds

  } else {

        document.getElementById("test").innerHTML = "&nbsp;&nbsp;Resetting language...";
        x.className += "center-screen d-block";

    let tID = setTimeout(function () {
            
    window.clearTimeout(tID);		
    // clear time out.

    x.className = "center-screen d-none";
                
    }, 3000);	// call function after 3000 milliseconds or 3 seconds

    // similar behavior as clicking on a link
    //window.location.href = "WEB_DIR";

  }

  }

/* TOGGLE MENU */
  
  function navBarFn() {
    var x = document.getElementById("navBar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function navHide() {
    var x = document.getElementById("navBar");
    if (x.className === "topnav responsive") {
        x.className = "topnav";
    } else {
        x.className = "topnav";
    }
}

/* Navigation Menu Function */
function navigateMenu(id){
    /* Pass the menu item / slide id number */
        var1 = "#slideItem" + id;
        var2 = "#indicator" + id;

        $('div.carousel-item').removeClass("active");
        $(var1).toggleClass("active");

        $('.indicator').removeClass("active");
        $(var2).toggleClass("active");
}

/* Carousel Pause */
function pauseCarousel(){
    $('.carousel').carousel('pause'); 
}