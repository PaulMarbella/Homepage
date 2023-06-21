const icon = document.querySelector('.icon');
const search = document.querySelector('.searchC');

icon.onclick = function(){
    search.classList.toggle('active');
}

let subMenu = document.getElementById("subMenu");

 

function toggleMenu(){
	subMenu.classList.toggle("open-menu");
	subMenu.classList.remove;
}

const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});


const swiper = new Swiper('.swiper', {
	// Optional parameters

  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });