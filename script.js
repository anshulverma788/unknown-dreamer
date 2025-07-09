const menuBare = document.querySelector(".menu-bare");
const icom = document.querySelector("#icon");

icon.onclick = function () {
    menuBare.classList.toggle("open");
    if (menuBare.classList.contains("open")) {
        menuBare.style.display = "block";
        icom.classList.add("fa-xmark")
        icom.classList.remove("fa-bars")
    } else {
        menuBare.style.display = "none";
        icom.classList.add("fa-bars")
        icom.classList.remove("fa-xmark")
    }
}


// login code
function openLoginPage() {
    window.location.href = "sindex.html";
}


  // const heading = document.querySelector(".content-heading");
  // const message = " Welcome, Anshul! You're learning Async like a pro ";
  // let index = 0;

  // setTimeout(() => {
  //   const typer = setInterval(() => {
  //     heading.textContent += message[index];
  //     index++;

  //     if (index === message.length) {
  //       clearInterval(typer);
  //     }
  //   }, 100);
  // }, 2000);


const slides = document.querySelectorAll(".img-slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000); // change every 3 sec

  // Start with first slide
  showSlide(current);