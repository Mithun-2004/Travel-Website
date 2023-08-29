let bars = document.querySelector('.bars');
let cancelBtn = document.querySelector('.cancel-btn');
let navList = document.querySelector('.nav');
let navbar = document.querySelector('.navbar');
let activeList = document.querySelectorAll('.nav li a');

let isShow = false;

function show(){
    navList.style.left = "0";
    bars.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    isShow = true;
}

function hide(){
    navList.style.left = "-100%";
    bars.innerHTML = '<i class="fa-solid fa-bars"></i>';
    isShow = false;
}

bars.addEventListener('click', () => {
    if (isShow){
        hide();
    }else{
        show();
    }
})

activeList.forEach((link) => {
    link.addEventListener('click', hide);
})


/* Sticky navigation Menu */
window.onscroll = function(){
    if (document.documentElement.scrollTop > 20){
        navbar.classList.add('active');
    }else{
        navbar.classList.remove('active');
    }
}

/* Swiper */
var swiper1 = new Swiper(".package-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerSlide : 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets : true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });

var swiper2 = new Swiper(".staffs-slider", {
    spaceBetween : 20,
    loop : true,
    calculateHeight : true,
    autoplay : {
        delay : 2500,
        disableOnInteraction : false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        800: {
            slidesPerView : 2,
        },
        1200: {
            slidesPerView : 3,
        }
    }
})  
