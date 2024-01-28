const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const loader = document.querySelector('.loader');
const loaderSquares = document.querySelectorAll('.loader-square');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});



function startLoader() {
  loaderSquares.forEach((square) => {
	square.style.animationPlayState = 'running';
  });
  loader.style.display = 'flex';
}

function stopLoader() {
  loaderSquares.forEach((square) => {
	square.style.animationPlayState = 'paused';
  });
  loader.style.display = 'none';
}

// Start the loader
startLoader();

// Stop the loader after a delay (e.g., 3 seconds)
setTimeout(() => {
  stopLoader();
}, 5000);


