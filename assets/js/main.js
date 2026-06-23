/* ===================================================
   MAIN.JS — Entry Point & Page-Detection Orchestrator
   M SOHAIB ISHAQUE — Portfolio
   =================================================== */

'use strict';

window.addEventListener('load', () => {
	setTimeout(() => {
		const pre = document.getElementById('preloader');
		if (pre) pre.classList.add('hidden');
	}, Portfolio.CONSTANTS.ANIM.preloaderDelay);
});

document.addEventListener('DOMContentLoaded', () => {
	Portfolio.INTERACTIONS.initSmoothScroll();
});

Portfolio.UTILS.injectStyles('si-univ-kf', `
  @keyframes siHeroFloat {
    0%   { transform: translateY(0)      rotate(0deg);  opacity: 0; }
    7%   { opacity: 1; }
    93%  { opacity: 1; }
    100% { transform: translateY(-110vh) rotate(14deg); opacity: 0; }
  }
  @keyframes siFooterFloat {
    0%   { transform: translateY(65px);  opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { transform: translateY(-50px); opacity: 0; }
  }
  @keyframes siDotPan {
    0%   { background-position: 0 0; }
    100% { background-position: 36px 36px; }
  }
  @keyframes siScan {
    0%   { top: -2px; opacity: 0; }
    4%   { opacity: 1; }
    96%  { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }
  @keyframes siBlob {
    0%   { transform: translate(0, 0)       scale(1);   }
    100% { transform: translate(22px, 30px) scale(1.1); }
  }
  @keyframes siBracket {
    0%, 100% { opacity: .12; }
    50%       { opacity: .32; }
  }
  @keyframes siRipple {
    0%   { width: 6px;  height: 6px;  opacity: 1;   border-width: 1.5px; }
    40%  {               opacity: 0.7;               border-width: 1px;   }
    100% { width: 64px; height: 64px; opacity: 0;   border-width: 0.5px; }
  }
  @keyframes siBurst {
    0%   { transform: translate(-50%,-50%) translate(0px, 0px)          scale(1);   opacity: 1; }
    60%  { opacity: 0.8; }
    100% { transform: translate(-50%,-50%) translate(var(--tx), var(--ty)) scale(0.3); opacity: 0; }
  }
  @keyframes siGlowPop {
    0%   { transform: translate(-50%,-50%) scale(0.3); opacity: 0.9; }
    50%  { transform: translate(-50%,-50%) scale(1.2); opacity: 0.5; }
    100% { transform: translate(-50%,-50%) scale(2);   opacity: 0;   }
  }

  /* Ensure hero content sits above injected canvas layers */
  #home > .container,        #home > .hero-grid-bg,
  #home > .hero-glow,        .about-hero > .container,
  .skills-hero > .container, .projects-hero > .container,
  .testi-hero > .container,  .contact-hero > .container,
  .pd-hero > .container,     .project-details-hero > .container,
  footer > .container,       footer > .footer-inner-wrap {
    position: relative !important;
    z-index: 2 !important;
  }
`);

document.addEventListener('DOMContentLoaded', () => {

	Portfolio.TEXTURES.initUniversalAnimations();
	Portfolio.INTERACTIONS.initCustomCursor();
	Portfolio.INTERACTIONS.initNavbarScroll();
	Portfolio.INTERACTIONS.initMobileMenu();
	Portfolio.INTERACTIONS.initBackToTop();
	Portfolio.INTERACTIONS.initCustomizePanel();
	Portfolio.INTERACTIONS.initTiltEffects();
	Portfolio.INTERACTIONS.initContactForm();
	Portfolio.ANIMATIONS.initScrollReveal();
	Portfolio.ANIMATIONS.initCounters();
	Portfolio.ANIMATIONS.initSkillBars();

	const page = Portfolio.UTILS.getActivePage();

	switch (page) {
		case 'home':
			Portfolio.INTERACTIONS.initIndexPage();
			break;

		case 'about':
			Portfolio.INTERACTIONS.initAboutPage();
			break;

		case 'skills':
			Portfolio.INTERACTIONS.initSkillsPage();
			break;

		case 'projects':
			Portfolio.INTERACTIONS.initProjectsPage();
			break;

		case 'testimonials':
			Portfolio.INTERACTIONS.initTestimonialsPage();
			break;

		case 'contact':
			Portfolio.INTERACTIONS.initContactPage();
			break;

		case 'experience':
			Portfolio.INTERACTIONS.initExperiencePage();
			break;

		default:
			if (document.querySelector('.projects-hero')) Portfolio.INTERACTIONS.initProjectsPage();
			if (document.querySelector('.about-hero')) Portfolio.INTERACTIONS.initAboutPage();
			if (document.querySelector('.testi-hero')) Portfolio.INTERACTIONS.initTestimonialsPage();
			if (document.querySelector('.skills-hero')) Portfolio.INTERACTIONS.initSkillsPage();
			if (document.querySelector('.contact-hero')) Portfolio.INTERACTIONS.initContactPage();
			if (document.querySelector('.exp-hero')) Portfolio.INTERACTIONS.initExperiencePage();
			break;
	}

	console.log('%c M SOHAIB ISHAQUE — Portfolio', 'color:#A3FF12;font-size:1.6rem;font-weight:bold;');
	console.log('%c Full Stack Web Developer', 'color:#888;font-size:1.2rem;');
});




(function() {
	const canvas = document.getElementById('ctaSphereCanvas');
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	let W = canvas.width,
		H = canvas.height;
	let t = 0;

	function getAccent() {
		const a = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
		return a || '#A3FF12';
	}

	function hexToRgb(hex) {
		hex = hex.replace('#', '');
		if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
		return [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
	}

	function drawSphere(timestamp) {
		t = timestamp * 0.0004;
		ctx.clearRect(0, 0, W, H);

		const cx = W * 0.52,
			cy = H * 0.5;
		const R = Math.min(W, H) * 0.38;
		const accent = getAccent();
		const [r, g, b] = hexToRgb(accent);

		const glowSteps = 5;
		for (let i = glowSteps; i >= 1; i--) {
			const grad = ctx.createRadialGradient(cx, cy, R * 0.1, cx, cy, R * (1 + i * 0.2));
			grad.addColorStop(0, `rgba(${r},${g},${b},${0.06/i})`);
			grad.addColorStop(1, 'rgba(0,0,0,0)');
			ctx.fillStyle = grad;
			ctx.fillRect(0, 0, W, H);
		}

		const latLines = 14;
		for (let i = 0; i <= latLines; i++) {
			const phi = (i / latLines) * Math.PI;
			const y = cy + R * Math.cos(phi);
			const rLat = R * Math.sin(phi);
			if (rLat < 2) continue;

			const alpha = 0.08 + 0.18 * Math.sin(phi) * (0.6 + 0.4 * Math.sin(t * 1.5 + phi));
			ctx.beginPath();
			ctx.ellipse(cx, y, rLat, rLat * 0.3, 0, 0, Math.PI * 2);
			ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
			ctx.lineWidth = 0.5;
			ctx.stroke();
		}

		const lonLines = 18;
		for (let i = 0; i < lonLines; i++) {
			const theta = (i / lonLines) * Math.PI * 2 + t * 0.5;
			const alpha = 0.06 + 0.14 * Math.abs(Math.cos(theta + t));

			ctx.beginPath();
			for (let j = 0; j <= 60; j++) {
				const phi = (j / 60) * Math.PI;
				const x = cx + R * Math.sin(phi) * Math.cos(theta);
				const y = cy + R * Math.cos(phi);
				const z = Math.sin(phi) * Math.sin(theta);
				const scale = 0.88 + z * 0.12;
				const px = cx + (x - cx) * scale;
				if (j === 0) ctx.moveTo(px, y);
				else ctx.lineTo(px, y);
			}
			ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
			ctx.lineWidth = 0.5;
			ctx.stroke();
		}
		ctx.beginPath();
		ctx.ellipse(cx, cy, R, R * 0.28, 0, 0, Math.PI * 2);
		ctx.strokeStyle = `rgba(${r},${g},${b},0.35)`;
		ctx.lineWidth = 1;
		ctx.stroke();

		const dots = 30;
		for (let i = 0; i < dots; i++) {
			const angle = (i / dots) * Math.PI * 2 + t * 0.3;
			const dist = R * (1.05 + 0.15 * Math.sin(angle * 3 + t));
			const px = cx + dist * Math.cos(angle);
			const py = cy + dist * 0.4 * Math.sin(angle);
			const sz = 1 + Math.sin(i + t * 2) * 0.8;
			const a = 0.3 + 0.4 * Math.sin(i * 0.7 + t);
			ctx.beginPath();
			ctx.arc(px, py, sz, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
			ctx.fill();
		}

		const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.5);
		cg.addColorStop(0, `rgba(${r},${g},${b},0.08)`);
		cg.addColorStop(1, 'rgba(0,0,0,0)');
		ctx.fillStyle = cg;
		ctx.fillRect(0, 0, W, H);

		requestAnimationFrame(drawSphere);
	}

	requestAnimationFrame(drawSphere);
})();