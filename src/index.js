
var swiper = new Swiper(".Home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });






const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ba691afffmsh9f5f80a5281a9fdp1b50b6jsnffaa16c4011a',
		'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
	}
};

fetch('https://unogs-unogs-v1.p.rapidapi.com/search/deleted', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));