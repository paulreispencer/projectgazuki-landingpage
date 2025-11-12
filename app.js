const topga = document.getElementById("topga");
const bottomga = document.getElementById("bottomga");
const homeView = document.getElementById("homeView");
const logo = document.getElementById("logoActual");
const introVideo = document.getElementById("introVideo");
const artH1 = document.getElementById("artH1");
const videoActual = document.getElementById("videoActual");

function postActions(){
  homeView.style.backgroundColor = "white";
  artH1.style.color = "black";
  topga.style.color = "black";
  bottomga.style.color = "black";
  topga.style.transform = `translateX(150px)`;
  bottomga.style.transform = `translateX(-150px)`;
}

$(document).ready(function(){
  videoActual.addEventListener("ended", () => {
    introVideo.style.opacity = 0;
    logo.style.opacity = "1";
    logo.style.transform = `scale(1)`;
    setTimeout(() => {
      postActions()
    }, 1000)
  })
})

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let carousel = document.getElementById('carousel');
let slides = document.querySelectorAll('.others');
let index = 0;

function showSlide(){
  carousel.style.transform = `translateX(-${index * 420}px)`;
  carousel.style.transition = "transform 0.5s ease";
}

next.addEventListener("click", ()=>{
  index++;
  if (index >= slides.length) index = 0;
  showSlide();
  centralize()
});

prev.addEventListener("click", ()=>{
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide();
});


const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    }
  })
})

const sectionElements = document.querySelectorAll(".sloganSection")
sectionElements.forEach(el => observer.observe(el))


// window.addEventListener('scroll', () => {
//   if (window.scrollY / window.innerHeight > 0.1){
//     topga.style.transform = `translateX(250px)`;
//     bottomga.style.transform = `translateX(-250px)`;
//   } else{
//     topga.style.transform = `translateX(150px)`;
//     bottomga.style.transform = `translateX(-150px)`;
//   }
// })


/*
window.addEventListener('scroll', () => {
  if (window.scrollY / window.innerHeight > 0.8) {
    document.body.style.backgroundColor = "#ffffffff";
  } else {
    document.body.style.backgroundColor = "#000000ff";
  }
}, false);*/