/* ===================================================
   INTERACTIONS.JS — User Interactions & Page Features
   M SOHAIB ISHAQUE — Portfolio
   =================================================== */

'use strict';

window.Portfolio = window.Portfolio || {};

window.Portfolio.INTERACTIONS = (function() {
	const {
		$,
		$$,
		on
	} = window.Portfolio.UTILS;
	const {
		ANIM
	} = window.Portfolio.CONSTANTS;

	function initCustomCursor() {
		const cursor = $('.cursor');
		const cursorRing = $('.cursor-ring');
		if (!cursor || !cursorRing || window.innerWidth <= 768) return;

		let mx = 0,
			my = 0,
			rx = 0,
			ry = 0;

		document.addEventListener('mousemove', e => {
			mx = e.clientX;
			my = e.clientY;
			cursor.style.left = mx + 'px';
			cursor.style.top = my + 'px';
		});

		(function animRing() {
			rx += (mx - rx) * 0.12;
			ry += (my - ry) * 0.12;
			cursorRing.style.left = rx + 'px';
			cursorRing.style.top = ry + 'px';
			requestAnimationFrame(animRing);
		})();

		const interactives = 'a, button, .project-card, .value-card, .skill-cat-box, ' +
			'.other-skill-card, .tool-item, .pg-card, .ci-card, .belief-card, ' +
			'.edu-card, .cert-item, .testi-card';

		$$(interactives).forEach(el => {
			on(el, 'mouseenter', () => {
				cursor.style.width = cursor.style.height = '14px';
				cursorRing.style.width = cursorRing.style.height = '48px';
			});
			on(el, 'mouseleave', () => {
				cursor.style.width = cursor.style.height = '';
				cursorRing.style.width = cursorRing.style.height = '';
			});
		});
	}

	function initNavbarScroll() {
		const navbar = $('.navbar');
		const sections = $$('section[id]');
		const navLinks = $$('.nav-link');
		const backTop = $('.back-top');

		window.addEventListener('scroll', () => {
			navbar && navbar.classList.toggle('scrolled', window.scrollY > 50);

			if (sections.length && navLinks.length) {
				let current = '';
				sections.forEach(s => {
					if (window.scrollY >= s.offsetTop - 120) current = s.id;
				});
				navLinks.forEach(l => {
					const href = l.getAttribute('href');
				});
			}

			backTop && backTop.classList.toggle('show', window.scrollY > 500);
		});
	}

	function initMobileMenu() {
		const hamburger = $('.hamburger');
		const mobileMenu = $('.mobile-menu');
		if (!hamburger || !mobileMenu) return;

		on(hamburger, 'click', () => {
			hamburger.classList.toggle('open');
			mobileMenu.classList.toggle('open');
			document.body.style.overflow =
				mobileMenu.classList.contains('open') ? 'hidden' : '';
		});

		$$('.mobile-nav-link').forEach(link => {
			on(link, 'click', () => {
				hamburger.classList.remove('open');
				mobileMenu.classList.remove('open');
				document.body.style.overflow = '';
			});
		});
	}

	function initBackToTop() {
		const btn = $('.back-top');
		on(btn, 'click', () => window.scrollTo({
			top: 0,
			behavior: 'smooth'
		}));
	}

	function initSmoothScroll() {
		$$('a[href^="#"]').forEach(a => {
			on(a, 'click', e => {
				const targetId = a.getAttribute('href');
				if (targetId && targetId !== '#') {
					const target = document.querySelector(targetId);
					if (target) {
						e.preventDefault();
						target.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						});
					}
				}
			});
		});
	}

	function initTiltEffects() {
		$$('.project-card, .pg-card').forEach(card => {
			on(card, 'mousemove', e => {
				const r = card.getBoundingClientRect();
				const x = e.clientX - r.left - r.width / 2;
				const y = e.clientY - r.top - r.height / 2;
				const tx = (y / r.height) * 6;
				const ty = -(x / r.width) * 6;
				card.style.transform =
					`perspective(800px) rotateX(${tx}deg) rotateY(${ty}deg) translateY(-6px)`;
			});
			on(card, 'mouseleave', () => {
				card.style.transform = '';
			});
		});
	}

	function initContactForm() {
		const form = document.getElementById('contactForm');
		const successMsg = $('.form-success');
		if (!form) return;

		on(form, 'submit', e => {
			e.preventDefault();
			const btn = form.querySelector('.form-submit, .cf-submit');
			const orig = btn?.innerHTML;
			if (btn) {
				btn.innerHTML = 'SENDING...';
				btn.disabled = true;
			}

			setTimeout(() => {
				if (btn) {
					btn.innerHTML = orig;
					btn.disabled = false;
				}
				form.reset();
				if (successMsg) {
					successMsg.classList.add('show');
					setTimeout(() => successMsg.classList.remove('show'), ANIM.formSuccessDur);
				}
			}, ANIM.formSubmitDelay);
		});
	}


	function initIndexPage() {
		window.addEventListener('load', () => {
			const sub = $('.hero-sub');
			if (sub) {
				const txt = sub.dataset.text ||
					'I craft fast, responsive and scalable web applications with modern technologies and clean code.';
				setTimeout(() => window.Portfolio.ANIMATIONS.typeWriter(sub, txt, 25), 1800);
			}
		});

		window.Portfolio.ANIMATIONS.glitchEffect();
		window.Portfolio.ANIMATIONS.initParallaxNumbers();
		window.Portfolio.TEXTURES.createIndexParticles();
	}

	function initProjectsPage() {
		const tabs = $$('.filter-tab');
		const cards = $$('.pg-card');

		if (tabs.length && cards.length) {
			tabs.forEach(tab => {
				on(tab, 'click', () => {
					const filter = tab.dataset.filter;
					tabs.forEach(t => {
						t.classList.remove('active');
						t.setAttribute('aria-selected', 'false');
					});
					tab.classList.add('active');
					tab.setAttribute('aria-selected', 'true');

					let delay = 0;
					cards.forEach(card => {
						const cats = card.dataset.category || '';
						const show = filter === 'all' || cats.includes(filter);

						card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
						card.style.transitionDelay = show ? delay * 0.06 + 's' : '0s';

						if (show) {
							card.style.opacity = '0';
							card.style.transform = 'translateY(16px)';
							card.classList.remove('hidden');
							requestAnimationFrame(() => requestAnimationFrame(() => {
								card.style.opacity = '1';
								card.style.transform = 'translateY(0)';
							}));
							delay++;
						} else {
							card.style.opacity = '0';
							card.style.transform = 'translateY(16px)';
							setTimeout(() => card.classList.add('hidden'), 300);
						}
					});
				});
			});

			let sortOrder = 'latest';
			const sortBtn = $('.filter-sort');
			if (sortBtn) {
				on(sortBtn, 'click', function() {
					sortOrder = sortOrder === 'latest' ? 'oldest' : 'latest';
					this.innerHTML = `Sort By: ${sortOrder === 'latest' ? 'Latest' : 'Oldest'}
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 5l3 3 3-3" stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;

					const arr = Array.from(cards);
					if (sortOrder === 'oldest') arr.reverse();
					else arr.sort((a, b) =>
						parseInt(a.querySelector('.pg-num')?.textContent || '0') -
						parseInt(b.querySelector('.pg-num')?.textContent || '0')
					);
					arr.forEach((c, i) => {
						c.style.order = i;
						c.style.transition = 'opacity 0.3s ease';
						c.style.opacity = '0';
						setTimeout(() => {
							c.style.opacity = '1';
						}, i * 60);
					});
				});
			}
		}

		window.Portfolio.TEXTURES.createPageParticles('.projects-hero', 'floatPP',
			'@keyframes floatPP{0%{transform:translate(0,0);opacity:.5;}100%{transform:translate(10px,-30px);opacity:0;}}', 14);
	}

	function initAboutPage() {
		window.Portfolio.TEXTURES.createPageParticles('.about-hero', 'floatP',
			'@keyframes floatP{0%{transform:translate(0,0);opacity:.5;}100%{transform:translate(10px,-30px);opacity:0;}}', 12);
	}

	function initTestimonialsPage() {
		const prevBtn = document.getElementById('prevBtn');
		const nextBtn = document.getElementById('nextBtn');
		const grid = $('.testi-cards-grid');

		if (prevBtn && nextBtn && grid) {
			on(prevBtn, 'click', () => grid.scrollBy({
				left: -320,
				behavior: 'smooth'
			}));
			on(nextBtn, 'click', () => grid.scrollBy({
				left: 320,
				behavior: 'smooth'
			}));
		}
	}

	function initSkillsPage() {
		window.Portfolio.TEXTURES.createPageParticles('.skills-hero', 'fpDot',
			'@keyframes fpDot{0%{transform:translate(0,0);opacity:.5;}100%{transform:translate(12px,-35px);opacity:0;}}', 14);
	}

	function initContactPage() {
		const form = document.getElementById('contactForm');
		const successMsg = $('.form-success');
		if (!form) return;

		on(form, 'submit', e => {
			e.preventDefault();

			const name = form.querySelector('#name');
			const email = form.querySelector('#email');
			const subject = form.querySelector('#subject');
			const message = form.querySelector('#message');
			let valid = true;

			[name, email, subject, message].forEach(field => {
				if (field && !field.value.trim()) {
					field.style.borderColor = '#ff4444';
					valid = false;
					on(field, 'input', () => {
						field.style.borderColor = '';
					}, {
						once: true
					});
				}
			});

			if (email?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
				email.style.borderColor = '#ff4444';
				valid = false;
			}

			if (!valid) return;

			const btn = form.querySelector('.cf-submit');
			const btnSpan = btn?.querySelector('span');
			if (btnSpan) btnSpan.textContent = 'Sending...';
			if (btn) btn.disabled = true;

			setTimeout(() => {
				if (btnSpan) btnSpan.textContent = 'Send Message';
				if (btn) btn.disabled = false;
				form.reset();
				if (successMsg) {
					successMsg.classList.add('show');
					setTimeout(() => successMsg.classList.remove('show'), ANIM.formSuccessDur);
				}
			}, ANIM.formSubmitDelay);
		});
	}

	function initExperiencePage() {
		window.Portfolio.TEXTURES.initExperienceCanvas();
		window.Portfolio.TEXTURES.initExperienceHeroSymbols();
	}

	function initCustomizePanel() {
		const btn = document.getElementById('customizeBtn');
		const panel = document.getElementById('customizePanel');
		const overlay = document.getElementById('customizeOverlay');
		const closeBtn = document.getElementById('customizePanelClose');
		if (!btn || !panel) return;

		function openPanel() {
			panel.classList.add('open');
			overlay.classList.add('open');
			panel.setAttribute('aria-hidden', 'false');
			btn.setAttribute('aria-expanded', 'true');
			btn.classList.add('active');

			document.body.style.overflow = 'hidden';
		}

		function closePanel() {
			panel.classList.remove('open');
			overlay.classList.remove('open');
			panel.setAttribute('aria-hidden', 'true');
			btn.setAttribute('aria-expanded', 'false');
			btn.classList.remove('active');

			document.body.style.overflow = '';
		}

		on(btn, 'click', (e) => {
			e.stopPropagation();
			panel.classList.contains('open') ? closePanel() : openPanel();
		});

		on(closeBtn, 'click', (e) => {
			e.stopPropagation();
			closePanel();
		});

		document.addEventListener('click', (e) => {
			if (!panel.contains(e.target) && e.target !== btn) {
				closePanel();
			}
		});

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && panel.classList.contains('open')) {
				closePanel();
				btn.focus();
			}
		});

		const themeCards = panel.querySelectorAll('.cp-theme-card');
		themeCards.forEach(card => {
			on(card, 'click', () => {
				themeCards.forEach(c => {
					c.classList.remove('active');
					c.setAttribute('aria-checked', 'false');
				});
				card.classList.add('active');
				card.setAttribute('aria-checked', 'true');
				const theme = card.dataset.theme;
				applyTheme(theme);
			});
			on(card, 'keydown', (e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					card.click();
				}
			});
		});

		const swatchBoxes = panel.querySelectorAll('.cp-swatch-box');
		swatchBoxes.forEach(box => {
			on(box, 'click', () => {
				swatchBoxes.forEach(b => b.classList.remove('active'));
				box.classList.add('active');
				const swatch = box.closest('.cp-swatch');
				if (swatch) applyPreset(swatch.dataset.swatch);
			});
		});


		let _sysMqlListener = null;
		const _sysMql = window.matchMedia('(prefers-color-scheme: dark)');

		function _applyLightClass(isDark) {
			document.documentElement.classList.toggle('theme-light', !isDark);
		}

		function applyTheme(theme) {
			const html = document.documentElement;

			if (_sysMqlListener) {
				_sysMql.removeEventListener('change', _sysMqlListener);
				_sysMqlListener = null;
			}

			html.setAttribute('data-theme', theme);
			try {
				localStorage.setItem('si-theme', theme);
			} catch (_) {}

			if (theme === 'light') {
				html.classList.add('theme-light');
			} else if (theme === 'dark') {
				html.classList.remove('theme-light');
			} else if (theme === 'system') {
				_applyLightClass(_sysMql.matches);
				_sysMqlListener = (e) => _applyLightClass(e.matches);
				_sysMql.addEventListener('change', _sysMqlListener);
			}
		}

		function applyPreset(preset) {
			document.documentElement.setAttribute('data-preset', preset);
			try {
				localStorage.setItem('si-preset', preset);
			} catch (_) {}

			const presetAccents = {
				'deep-violet': '#A3FF12',
				'electric-blue': '#184fc4',
				'warm-amber': '#e29104',
				'soft-rose': '#f73152',
				'ocean-teal': '#0e9c8c',
				'royal-indigo': '#372fd3',
				'sunset-orange': '#ca4c08',
			};

			const colour = presetAccents[preset];
			if (colour) {
				document.documentElement.style.setProperty('--accent', colour);

				const rgb = hexToRgb(colour);
				if (rgb) {
					document.documentElement.style.setProperty('--accent-dim', `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.12)`);
				}

				const encodedColor = colour.replace('#', '%23');
				const faviconSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='${encodedColor}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='central' text-anchor='middle' font-family='sans-serif' font-weight='900' font-size='14' fill='%23000'%3ESI%3C/text%3E%3C/svg%3E`;
				let faviconEl = document.querySelector("link[rel='icon']");
				if (!faviconEl) {
					faviconEl = document.createElement('link');
					faviconEl.rel = 'icon';
					faviconEl.type = 'image/svg+xml';
					document.head.appendChild(faviconEl);
				}
				faviconEl.href = faviconSvg;

				document.dispatchEvent(new CustomEvent('si:accentChanged', {
					detail: {
						colour,
						preset
					}
				}));
			}
		}

		function hexToRgb(hex) {
			hex = hex.replace(/^#/, '');

			if (hex.length === 3) {
				hex = hex.split('').map(c => c + c).join('');
			}

			const r = parseInt(hex.substring(0, 2), 16);
			const g = parseInt(hex.substring(2, 4), 16);
			const b = parseInt(hex.substring(4, 6), 16);

			if (isNaN(r) || isNaN(g) || isNaN(b)) {
				return null;
			}

			return {
				r,
				g,
				b
			};
		}

		try {
			const savedTheme = localStorage.getItem('si-theme');
			const savedPreset = localStorage.getItem('si-preset');

			if (savedTheme) {
				const savedCard = panel.querySelector(`.cp-theme-card[data-theme="${savedTheme}"]`);
				if (savedCard) {
					themeCards.forEach(c => {
						c.classList.remove('active');
						c.setAttribute('aria-checked', 'false');
					});
					savedCard.classList.add('active');
					savedCard.setAttribute('aria-checked', 'true');
					applyTheme(savedTheme);
				}
			}

			if (savedPreset) {
				const savedBox = panel.querySelector(`.cp-swatch[data-swatch="${savedPreset}"] .cp-swatch-box`);
				if (savedBox) {
					swatchBoxes.forEach(b => b.classList.remove('active'));
					savedBox.classList.add('active');
					applyPreset(savedPreset);
				}
			}
		} catch (_) {}
	}

	return {
		initCustomCursor,
		initNavbarScroll,
		initMobileMenu,
		initBackToTop,
		initSmoothScroll,
		initTiltEffects,
		initContactForm,
		initCustomizePanel,
		initIndexPage,
		initProjectsPage,
		initAboutPage,
		initTestimonialsPage,
		initSkillsPage,
		initContactPage,
		initExperiencePage,
	};
})();