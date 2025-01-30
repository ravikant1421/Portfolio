/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Developer.", "Ravikant"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })
sr.reveal('.projects_sub_title', { delay: 100 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 1000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 1000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })
srRight.reveal('.education-box', { delay: 200 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}
window.addEventListener('scroll', scrollActive)

function downloadReusme() {
  let link = document.createElement("a");
  link.href = 'assets/Ravikant_Verma_Resume-1.pdf';
  link.download = 'Ravikant_Verma_Resume'
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function hireMe() {
  window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSvdHHtrqKgWDgJZrdqxwGbLjwqZLBvfQKmnWdqwRTkCNWGTmTSXqvmmZmNznkMlqfwxV", "_blank");
}
function send() {
  let title = document.getElementById("title").value;
  let message = document.getElementById("message").value;
  console.log(title, message);
  if ((title == null || title === "" || title === undefined) && (message == null || message === "" || message === undefined)) {
    document.getElementById("alert").style.display = "block";
  }
  else {
    let subject = encodeURIComponent(title);
    let body = encodeURIComponent(message);
    let mailtoLink = `mailto:ravichirawa1421@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    document.getElementById("title").value = "";
    document.getElementById("message").value = "";
  }
}

function openProfile(event) {
  let icon = event.currentTarget.querySelector('i');
  if (icon.classList.contains("uil-linkedin-alt")) {
    window.open("http://www.linkedin.com/in/ravvikantvarma1421/", "_blank");
  } else if (icon.classList.contains("uil-brackets-curly")) {
    window.open("https://leetcode.com/rk_verma_1421/", "_blank");
  } else if (icon.classList.contains("uil-github-alt")) {
    window.open("https://github.com/ravikant1421", "_blank");
  }
}

function openProject(event) {
  let currentPrject = event.currentTarget;
  if (currentPrject.getAttribute("id") === "portfolio_web_project") {

    window.open("https://github.com/ravikant1421", "_blank");
  } else if (currentPrject.getAttribute("id") === "currency_converter_web_project") {

    window.open("https://ravikant1421.github.io/Currency-Converter/", "_blank");
  } else if (currentPrject.getAttribute("id") === "job_application_web_project") {

    window.open("https://ravikant1421.github.io/Job-Application-Form/", "_blank");
  } else if (currentPrject.getAttribute("id") === "About_MSD_web_project") {

    window.open("https://ravikant1421.github.io/About-MSD/", "_blank");
  } else if (currentPrject.getAttribute("id") === "music_player_app_project") {

    window.open("https://github.com/ravikant1421/music_player", "_blank");
  } else if (currentPrject.getAttribute("id") === "weather_scope_app_project") {

    window.open("https://github.com/ravikant1421/weather-scope", "_blank");
  } else if (currentPrject.getAttribute("id") === "unit_converter_app_project") {

    window.open("https://github.com/ravikant1421/unit_converter", "_blank");
  } else if (currentPrject.getAttribute("id") === "e_commerce_driver_project") {

    window.open("https://github.com/ravikant1421/ecommerceQA/tree/master", "_blank");
  }
}