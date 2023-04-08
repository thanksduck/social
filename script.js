const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
	img.addEventListener('error', () => {
		img.style.display = 'none';
	});
});
