/* ===================================================
   UTILS.JS — DOM Helpers & Shared Utilities
   M SOHAIB ISHAQUE — Portfolio
   =================================================== */

'use strict';

window.Portfolio = window.Portfolio || {};

window.Portfolio.UTILS = (function() {

	const $ = (sel, ctx = document) => ctx.querySelector(sel);
	const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

	const on = (el, event, handler, opts) => {
		if (el) el.addEventListener(event, handler, opts);
	};

	const addClass = (el, ...cls) => el && el.classList.add(...cls);
	const removeClass = (el, ...cls) => el && el.classList.remove(...cls);
	const toggleClass = (el, cls, force) => el && el.classList.toggle(cls, force);
	const hasClass = (el, cls) => el && el.classList.contains(cls);

	function getActivePage() {
		const path = window.location.pathname;
		const file = path.split('/').pop().split('.')[0].toLowerCase();
		return window.Portfolio.CONSTANTS.PAGE_ROUTES[file] || file || 'home';
	}

	function isInViewport(el) {
		if (!el) return false;
		const rect = el.getBoundingClientRect();
		return rect.top < window.innerHeight && rect.bottom > 0;
	}

	function debounce(fn, delay = 100) {
		let t;
		return (...args) => {
			clearTimeout(t);
			t = setTimeout(() => fn(...args), delay);
		};
	}

	function injectStyles(id, css) {
		if (document.getElementById(id)) return;
		const st = document.createElement('style');
		st.id = id;
		st.textContent = css;
		document.head.appendChild(st);
	}

	function createLayer(cssText, ariaHidden = true) {
		const el = document.createElement('div');
		if (ariaHidden) el.setAttribute('aria-hidden', 'true');
		el.style.cssText = cssText;
		return el;
	}

	const rand = (min, max) => min + Math.random() * (max - min);

	return {
		$,
		$$,
		on,
		addClass,
		removeClass,
		toggleClass,
		hasClass,
		getActivePage,
		isInViewport,
		debounce,
		injectStyles,
		createLayer,
		rand,
	};
})();