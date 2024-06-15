// Add JS here
document.addEventListener("DOMContentLoaded", function() {
  var mySidebar = document.getElementById("mySidebar");
  var contactSubButtonSidebar = document.getElementById("contact_sub_button_sidebar");
  var arrowToggleDown = document.getElementById("arrow_toggle_down");
  var arrowToggleUp = document.getElementById("arrow_toggle_up");
  var linksSubButtonSidebar = document.getElementById("links_sub_button_sidebar");
  var arrowToggleDownLinks = document.getElementById("arrow_toggle_down_links");
  var arrowToggleUpLinks = document.getElementById("arrow_toggle_up_links");

  function sideBar() {
      mySidebar.style.display = 'flex';
  }

  function menu_bar() {
      if (mySidebar.style.display === 'flex') {
          mySidebar.style.display = 'none';
      } else {
          mySidebar.style.display = 'flex';
      }
  }

  function sideBarup() {
      mySidebar.style.display = 'none';
  }

  function contactSubButton() {
      contactSubButtonSidebar.style.display = 'flex';
      arrowToggleDown.style.display = 'none';
      arrowToggleUp.style.display = 'inline';
  }

  function contacts_bar() {
      if (contactSubButtonSidebar.style.display === 'flex') {
          contactSubButtonSidebar.style.display = 'none';
          arrowToggleDown.style.display = 'inline';
          arrowToggleUp.style.display = 'none';
      } else {
          contactSubButtonSidebar.style.display = 'flex';
          arrowToggleDown.style.display = 'none';
          arrowToggleUp.style.display = 'inline';
      }
  }

  function contactSubButtonUp() {
      contactSubButtonSidebar.style.display = 'none';
      arrowToggleDown.style.display = 'inline';
      arrowToggleUp.style.display = 'none';
  }

  function linksSubButton() {
      linksSubButtonSidebar.style.display = 'flex';
      arrowToggleDownLinks.style.display = 'none';
      arrowToggleUpLinks.style.display = 'inline';
  }

  function links_bar() {
      if (linksSubButtonSidebar.style.display === 'flex') {
          linksSubButtonSidebar.style.display = 'none';
          arrowToggleDownLinks.style.display = 'inline';
          arrowToggleUpLinks.style.display = 'none';
      } else {
          linksSubButtonSidebar.style.display = 'flex';
          arrowToggleDownLinks.style.display = 'none';
          arrowToggleUpLinks.style.display = 'inline';
      }
  }

  function linksSubButtonUp() {
      linksSubButtonSidebar.style.display = 'none';
      arrowToggleDownLinks.style.display = 'inline';
      arrowToggleUpLinks.style.display = 'none';
  }

  window.menu_bar = menu_bar;
  window.sideBar = sideBar;
  window.sideBarup = sideBarup;
  window.contactSubButton = contactSubButton;
  window.contacts_bar = contacts_bar;
  window.contactSubButtonUp = contactSubButtonUp;
  window.linksSubButton = linksSubButton;
  window.links_bar = links_bar;
  window.linksSubButtonUp = linksSubButtonUp;
});



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








