// select element 
const iconList = document.querySelector('.nema') // icon |||
const iconX = document.querySelector('.hide')
const menuHam = document.querySelector('.menu-ham')
// select element 


// event
iconList.addEventListener('click', () => {
    iconList.classList.add('hidden')
    iconX.classList.remove('hidden')
    menuHam.style.transform = 'translateX(0)'
})

iconX.addEventListener('click', () => {
    iconX.classList.add('hidden')
    iconList.classList.remove('hidden')
    menuHam.style.transform = 'translateX(-1000px)'
})
// event 


  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });