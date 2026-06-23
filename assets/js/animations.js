/* ===================================================
   ANIMATIONS.JS — Scroll Reveals, Counters, Typewriter, Glitch
   M SOHAIB ISHAQUE — Portfolio
   =================================================== */

'use strict';

window.Portfolio = window.Portfolio || {};

window.Portfolio.ANIMATIONS = (function() {
	const {
		$,
		$$,
		on
	} = window.Portfolio.UTILS;
	const {
		ANIM
	} = window.Portfolio.CONSTANTS;

	function initScrollReveal() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		});

		$$('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
			el.style.transitionDelay = (i % 4) * 0.1 + 's';
			observer.observe(el);
		});
	}

	function animateCounter(el) {
		const target = parseInt(el.dataset.target, 10);
		const inc = target / (ANIM.counterDuration / ANIM.counterStep);
		let cur = 0;

		const timer = setInterval(() => {
			cur += inc;
			if (cur >= target) {
				cur = target;
				clearInterval(timer);
			}
			el.textContent = Math.floor(cur) + (el.dataset.suffix || '');
		}, ANIM.counterStep);
	}

	function initCounters() {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.4
		});

		const metricsSection = document.getElementById('metrics');
		const aboutMiniStats = $('.about-mini-stats');
		const expHighlights = $('.exp-highlights-grid');

		if (metricsSection) observer.observe(metricsSection);
		if (aboutMiniStats) observer.observe(aboutMiniStats);
		if (expHighlights) observer.observe(expHighlights);
	}

	function initSkillBars() {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.querySelectorAll('.skill-cat-bar-fill, .skill-bar-fill').forEach(bar => {
						const w = bar.dataset.width || bar.dataset.w || '85%';
						setTimeout(() => {
							bar.style.width = w + (w.includes('%') ? '' : '%');
						}, 200);
					});
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.25
		});

		const skillsIndex = document.getElementById('skills');
		if (skillsIndex) observer.observe(skillsIndex);

		$$('.skill-cat-box').forEach(box => observer.observe(box));
	}

	function glitchEffect() {
		const el = $('.hero-headline');
		if (!el) return;
		const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

		el.querySelectorAll('.glitch-word').forEach(span => {
			const orig = span.dataset.orig;
			let iter = 0;
			const interval = setInterval(() => {
				span.textContent = orig.split('').map((c, i) => {
					if (i < iter) return orig[i];
					return c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)];
				}).join('');
				if (iter >= orig.length) clearInterval(interval);
				iter += 0.5;
			}, ANIM.glitchInterval);
		});
	}

	function typeWriter(el, text, speed = ANIM.typewriterSpeed) {
		if (!el) return;
		el.textContent = '';
		let i = 0;
		const type = () => {
			if (i < text.length) {
				el.textContent += text[i++];
				setTimeout(type, speed);
			}
		};
		type();
	}

	function initParallaxNumbers() {
		window.addEventListener('scroll', () => {
			const y = window.scrollY;
			$$('.section-num').forEach(el => {
				el.style.transform = `translateY(${y * 0.04}px)`;
			});
		});
	}

	return {
		initScrollReveal,
		animateCounter,
		initCounters,
		initSkillBars,
		glitchEffect,
		typeWriter,
		initParallaxNumbers,
	};
})();