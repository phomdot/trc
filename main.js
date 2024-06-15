// Add JS here
function sideBar() {
    var x = document.getElementById("mySidebar");
      x.style.display = 'flex';
    
}

function menu_bar() {
  var x = document.getElementById("mySidebar");
  if (x.style.display == 'flex') {
      x.style.display = 'none';
    }
    else {
      x.style.display = 'flex';
    }
}

function sideBarup() {
    var x = document.getElementById("mySidebar");
      x.style.display = 'none';
    
}

function contactSubButton() {
    var y = document.getElementById("contact_sub_button_sidebar");
    y.style.display = 'flex';
    var z = document.getElementById("arrow_toggle_down")
    z.style.display = 'inline';
    var a = document.getElementById("arrow_toggle_up")
    a.style.display = 'none';
    
}

function contacts_bar() {
  var y = document.getElementById("contact_sub_button_sidebar");

  var z = document.getElementById("arrow_toggle_down");
  var a = document.getElementById("arrow_toggle_up")

  if (y.style.display == 'flex') {
    y.style.display = 'none';
    z.style.display = 'none';
    a.style.display = 'inline';
  }
  else {

    y.style.display = 'flex';
    z.style.display = 'inline';
    a.style.display = 'none';
  }
}

function contactSubButtonUp() {
    var y = document.getElementById("contact_sub_button_sidebar");
    y.style.display = 'none';
    var z = document.getElementById("arrow_toggle_down")
    z.style.display = 'none';
    var a = document.getElementById("arrow_toggle_up")
    a.style.display = 'inline';
}

function linksSubButton() {
    var y = document.getElementById("links_sub_button_sidebar");
    y.style.display = 'flex';
    var z = document.getElementById("arrow_toggle_down_links");
    z.style.display = 'inline';
    var a = document.getElementById("arrow_toggle_up_links");
    a.style.display = 'none';
    
}

function links_bar() {
  var y = document.getElementById("links_sub_button_sidebar");
  var z = document.getElementById("arrow_toggle_down_links");
  var a = document.getElementById("arrow_toggle_up_links");
  if (y.style.display == 'flex') {
    y.style.display = 'none';
    z.style.display = 'none';
    a.style.display = 'inline';
  }
  else {
    y.style.display = 'flex';
    z.style.display = 'inline';
    a.style.display = 'none';
  }

}
function linksSubButtonUp() {
    var y = document.getElementById("links_sub_button_sidebar");
    y.style.display = 'none';
    var z = document.getElementById("arrow_toggle_down_links")
    z.style.display = 'none';
    var a = document.getElementById("arrow_toggle_up_links")
    a.style.display = 'inline';
    
}


var dot = [];
var active_dots = '<span><i class="fa-solid fa-circle"></i></span>';
var active_number;
var slideshow_interval;


function changing_slide(n) {
  let slides = document.getElementsByClassName('slideshow');
  
  let y = slides[n].querySelector('img');
  let x = document.getElementById('slideshow_projected');
  
  for (i=0; i<slides.length; i++) {
    if (i == n) {
      slides[i].style.display = 'block';
    }
    else {
      slides[i].style.display = 'none';
    }
  }

  if (y) {
    x.style.backgroundImage = 'url(' + y.src + ')';
  }
  
}

function interval() {
  slideshow_interval = setInterval(next, 7000);
}



function next() {
  let slides = document.getElementsByClassName('slideshow');
  slides[active_number].classList.remove('fade3');
  
  if (active_number == slides.length - 1) {
    active_number = 0;

  }

  else if (active_number < slides.length - 1) {
    active_number += 1;
  }
  slides[active_number].classList.remove('fade');
  slides[active_number].classList.add('fade2');
  dots_active(active_number);
  changing_slide(active_number);
  
}

function previous() {
  let slides = document.getElementsByClassName('slideshow');
  slides[active_number].classList.remove('fade3');
  
  if (active_number == 0) {
    active_number = slides.length - 1;
  }

  else if (active_number < slides.length) {
    active_number -=1;
  }

  slides[active_number].classList.add('fade');
  slides[active_number].classList.remove('fade2');
  dots_active(active_number);
  
  changing_slide(active_number);
  
}

function dots(slides) {
  dot = [];
  for (i=1; i <= slides; i++) {
      dot.push('<span><i class="fa-regular fa-circle"></i></span>');
  }
}

function dots_active(n) {
  let slides = document.getElementsByClassName('slideshow');
  dots(slides.length);
  let dot_list = dot;
  dot_list[n] = active_dots;
  joined_list = dot_list.join(' ');
  document.getElementById('dots_div').innerHTML = joined_list;
  }

  function slideshow_text_mouseover(cons) {
    clearInterval(slideshow_interval);
  }

  function slideshow_text_mouseout() {
    interval();
  }


window.onload = function onload() {
  let slides = document.getElementsByClassName('slideshow');
  active_number = 0;
  dots_active(active_number);
  interval();
  slides[0].style.display = 'block';
  for (i=1; i <= slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[active_number].classList.add('fade3');
}



document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
      threshold: 0.3 // Adjust based on when you want the effect to start
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing once visible
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  document.querySelectorAll('.hidden').forEach(element => {
      observer.observe(element);
  });
});

// Function to observe new elements added dynamically
function observeNewElement(element) {
  observer.observe(element);
}







  
