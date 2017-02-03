const nav = document.querySelector('#nav');
const product = document.querySelector('.products');
const topOfProduct =  product.offsetTop;

function fixNav () {
	if (window.scrollY >= topOfProduct) {
		document.body.style.paddingTop = nav.offsetHeight + 'px';
		document.body.classList.add('fixed-nav');
	} else {
		document.body.style.paddingTop = 0;
		document.body.classList.remove('fixed-nav');
	}
}

window.addEventListener('scroll', fixNav);