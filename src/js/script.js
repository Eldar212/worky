'use strict';
document.addEventListener('DOMContentLoaded', () => {

	function headerTabs() {

		const slides = document.querySelectorAll('.slide-item'),
			next = document.querySelector('.next-arrow'),
			prev = document.querySelector('.prew-arrow');

		function hideTabContent() {
			slides.forEach(slide => {
				slide.classList.add('hide');
				slide.classList.remove('show');
			});
		}

		function showTabContent(i = 0) {
			slides[i].classList.remove('hide');
			slides[i].classList.add('show');
		}

		hideTabContent();
		showTabContent();

		let a = 0;
		next.addEventListener('click', () => {
			if (a < slides.length - 1) {
				a++;
				hideTabContent();
				showTabContent(a);
			} else {
				a = 0;
				hideTabContent();
				showTabContent(a);
			}
		})

		let b = slides.length - 1;
		prev.addEventListener('click', () => {
			if (b <= slides.length - 1) {
				hideTabContent();
				showTabContent(b);
				b--;
			}
			if (b < 0) {
				hideTabContent();
				showTabContent(0);
				b = slides.length - 1;
			}
		})
	}

	function scrollAnimation() {
		window.addEventListener('scroll', () => {
			if (window.scrollY >= 200) {
				document.querySelector('.about-company__text').style.animationName = 'about-company__text-animate';
				document.querySelector('.about-company__slogan').style.animationName = 'about-company__slogan-animate';
				document.querySelector('.about-company__border').style.animationName = 'about-company__border-animate';
				document.querySelector('.cards__architecture').style.animationName = 'cards__architecture-animate';
				document.querySelector('.cards__engineering').style.animationName = 'cards__engineering-animate';
				document.querySelector('.cards__interior-desighn').style.animationName = 'cards__interior-desighn-animate';
			} if (window.scrollY >= 1400) {
				document.querySelector('.box-header h4').style.animationName = 'about-company__text-animate';
				document.querySelector('.box-header p').style.animationName = 'about-company__slogan-animate';
				document.querySelector('.advantages-border').style.animationName = 'about-company__border-animate';
			} if (window.scrollY >= 2000) {
				document.querySelector('.portfolio-header__head h4').style.animationName = 'about-company__text-animate';
				document.querySelector('.portfolio-header__head h1').style.animationName = 'about-company__slogan-animate';
				document.querySelector('.portfolio-header__border').style.animationName = 'about-company__border-animate';
			} if (window.scrollY >= 3300) {
				document.querySelector('.partners p').style.animationName = 'about-company__text-animate';
				document.querySelector('.partners h1').style.animationName = 'about-company__slogan-animate';
				document.querySelector('.partners-border').style.animationName = 'about-company__border-animate';
			} if (window.scrollY >= 3500) {
				document.querySelector('.news__header p').style.animationName = 'news__header-animate';
				document.querySelector('.news__header h1').style.animationName = 'news__header-animate-h1';
				document.querySelector('.news-border').style.animationName = 'news-border-animate';
			} if (window.scrollY >= 4500) {
				document.querySelector('.contact-form-box__head h6').style.animationName = 'contact-form-box__head-h6';
				document.querySelector('.contact-form-box__head h4').style.animationName = 'contact-form-box__head-h4';
				document.querySelector('.contact-form-border').style.animationName = 'contact-form-border';
			}
		})
	}

	function bootstrappCarousel() {
		const firstCarousel = document.querySelector('#carouselExampleSlidesOnly');
		const carousel = new bootstrap.Carousel(firstCarousel, {
			interval: 5000
		})
	}

	function viewPhoto() {
		const img = document.querySelectorAll('.galery'),
					galleryBox = document.querySelector('.galery-box');

					for ( let elem of img) {
			elem.addEventListener('click', (e) => {
				let target = e.target;
				let imgPath = elem.children[0].attributes.src.nodeValue;


				function vueImage(src) {
					const gallerySlider = document.createElement('div');

					gallerySlider.classList.add('gallery-slider');

					gallerySlider.innerHTML += `
					<img class = slider-content-img src = ${src}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle" style="position: absolute;top: 1em;right: 1em; cursor: pointer"><circle cx="12" cy="12" r="10" ></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
				

					document.querySelector('body').append(gallerySlider);
					document.querySelector('body').style.overflow = 'hidden';
					gallerySlider.style.opacity = 1;


					gallerySlider.addEventListener('click', (e) => {
						const target = e.target;

						if (!target.classList.contains('slider-content-img') || target.classList.contains('feather-x-circle')) {
							gallerySlider.remove();
							document.querySelector('body').style.overflow = '';
						}
					});
				}

				vueImage(imgPath);
				
			})
		}
	}

	function postData() {
		const data = '';

	}

	headerTabs();
	scrollAnimation();
	bootstrappCarousel();
	viewPhoto();
})