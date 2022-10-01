
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const apiMovies = document.querySelector('.api-movies');
  const mobileHamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileNavLi = document.querySelector('.mobile-nav-link')

  mobileHamburger.addEventListener('click', ()=>{
    mobileHamburger.classList.toggle('is-active');
    mobileNav.classList.toggle('is-active');
  })

  mobileNavLi.forEach((link)=>{
    link.addEventListener('click', ()=>{
      mobileHamburger.classList.toggle('is-active');
      mobileNav.classList.toggle('is-active');
    })
  })


