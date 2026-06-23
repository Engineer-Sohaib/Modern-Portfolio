/* ===================================================
   TEXTURES.JS — Canvas & Procedural Visual Effects
   M SOHAIB ISHAQUE — Portfolio
   =================================================== */

'use strict';

window.Portfolio = window.Portfolio || {};

window.Portfolio.TEXTURES = (function() {
	const {
		$,
		$$,
		rand,
		injectStyles,
		createLayer
	} = window.Portfolio.UTILS;
	const {
		CANVAS: CFG,
		SYMS,
		FOOTER_SYMS,
		EXP_HERO_SYMS,
		ANIM
	} = window.Portfolio.CONSTANTS;

	function getAccentDimColor(alpha) {
		const accentDim = getComputedStyle(document.documentElement).getPropertyValue('--accent-dim').trim();
		if (accentDim && accentDim !== '') {
			const rgbaMatch = accentDim.match(/rgba?\(([^,]+),([^,]+),([^,]+),?([^)]+)?\)/);
			if (rgbaMatch) {
				const r = rgbaMatch[1];
				const g = rgbaMatch[2];
				const b = rgbaMatch[3];
				return `rgba(${r},${g},${b},${alpha})`;
			}
		}
		const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
		const rgb = hexToRgb(accent || '#A3FF12');
		return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
	}

	function getCurrentAccentRGB() {
		const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
		const rgb = hexToRgb(accent || '#A3FF12');
		return rgb ? `${rgb.r},${rgb.g},${rgb.b}` : '163,255,18';
	}

	function ACC(opacity) {
		return getAccentDimColor(opacity);
	}

	function hexToRgb(hex) {
		hex = hex.replace(/^#/, '');
		if (hex.length === 3) {
			hex = hex.split('').map(c => c + c).join('');
		}
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);
		if (isNaN(r) || isNaN(g) || isNaN(b)) return null;
		return {
			r,
			g,
			b
		};
	}

	function getHeroSyms(section) {
		const id = section.id || '';
		const cls = section.className || '';
		if (cls.includes('about-hero')) return SYMS.about;
		if (cls.includes('skills-hero')) return SYMS.skills;
		if (cls.includes('projects-hero')) return SYMS.projects;
		if (cls.includes('testi-hero')) return SYMS.testimonials;
		if (cls.includes('pd-hero')) return SYMS['project-details'];
		if (cls.includes('contact-hero')) return SYMS.contact;
		if (id === 'home') {
			const path = window.location.pathname.toLowerCase();
			return path.includes('contact') ? SYMS.contact : SYMS.home;
		}
		return SYMS.home;
	}

	function createCanvas(parent, isFooter) {
		const canvas = document.createElement('canvas');
		canvas.setAttribute('aria-hidden', 'true');
		canvas.style.cssText =
			'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;';
		parent.insertBefore(canvas, parent.firstChild);

		const ctx = canvas.getContext('2d');
		const c = isFooter ? CFG.footer : CFG.hero;
		const mobile = window.innerWidth < 768;
		let W = 0,
			H = 0;

		const resize = () => {
			W = canvas.width = parent.offsetWidth || 1200;
			H = canvas.height = parent.offsetHeight || 600;
		};
		try {
			new ResizeObserver(resize).observe(parent);
		} catch (e) {
			resize();
		}
		resize();

		const COUNT = isFooter ?
			(mobile ? c.countMobile : c.countDesktop) :
			(mobile ? c.countMobile : c.countDesktop);

		const nodes = Array.from({
			length: COUNT
		}, () => {
			const ang = Math.random() * Math.PI * 2;
			const sp = rand(c.speedRange[0], c.speedRange[1]);
			return {
				x: Math.random() * W,
				y: Math.random() * H,
				r: rand(c.radiusRange[0], c.radiusRange[1]),
				vx: Math.cos(ang) * sp,
				vy: Math.sin(ang) * sp,
				pulse: Math.random() * Math.PI * 2,
				pSpd: 0.013 + Math.random() * 0.018,
				variant: Math.random() < 0.72 ? 0 : (Math.random() < 0.55 ? 1 : 2),
			};
		});

		(function loop() {
			ctx.clearRect(0, 0, W, H);

			nodes.forEach(n => {
				n.x += n.vx;
				n.y += n.vy;
				n.pulse += n.pSpd;
				if (n.x < -12) n.x = W + 12;
				if (n.x > W + 12) n.x = -12;
				if (n.y < -12) n.y = H + 12;
				if (n.y > H + 12) n.y = -12;
			});

			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const dx = nodes[i].x - nodes[j].x;
					const dy = nodes[i].y - nodes[j].y;
					const d = Math.sqrt(dx * dx + dy * dy);
					if (d < c.linkDist) {
						ctx.beginPath();
						ctx.strokeStyle = ACC((1 - d / c.linkDist) * c.maxAlpha);
						ctx.lineWidth = 0.65;
						ctx.moveTo(nodes[i].x, nodes[i].y);
						ctx.lineTo(nodes[j].x, nodes[j].y);
						ctx.stroke();
					}
				}
			}

			nodes.forEach(n => {
				const a = 0.30 + 0.24 * Math.sin(n.pulse);
				if (!isFooter) {
					const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 6.5);
					g.addColorStop(0, ACC(a * 0.38));
					g.addColorStop(1, ACC(0));
					ctx.beginPath();
					ctx.arc(n.x, n.y, n.r * 6.5, 0, Math.PI * 2);
					ctx.fillStyle = g;
					ctx.fill();
				}

				ctx.fillStyle = ACC(isFooter ? a * 0.52 : a);

				if (!isFooter && n.variant === 1) {
					const s = n.r * 3.5;
					ctx.fillRect(n.x - s / 2, n.y - s / 2, s, s);
					ctx.strokeStyle = ACC(a * 0.5);
					ctx.lineWidth = 0.6;
					ctx.beginPath();
					ctx.moveTo(n.x + s / 2, n.y);
					ctx.lineTo(n.x + s * 1.6, n.y);
					ctx.moveTo(n.x, n.y - s / 2);
					ctx.lineTo(n.x, n.y - s * 1.6);
					ctx.stroke();
				} else if (!isFooter && n.variant === 2) {
					const s = n.r * 4;
					ctx.strokeStyle = ACC(a);
					ctx.lineWidth = 0.7;
					ctx.strokeRect(n.x - s / 2, n.y - s / 2, s, s);
					ctx.beginPath();
					ctx.moveTo(n.x - s, n.y);
					ctx.lineTo(n.x + s, n.y);
					ctx.moveTo(n.x, n.y - s);
					ctx.lineTo(n.x, n.y + s);
					ctx.stroke();
				} else {
					ctx.beginPath();
					ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
					ctx.fill();
				}
			});

			requestAnimationFrame(loop);
		})();
	}


	function spawnRipple(parent, x, y) {
		const ring = document.createElement('div');
		ring.setAttribute('aria-hidden', 'true');
		ring.style.cssText = `position:absolute;left:${x}px;top:${y}px;width:6px;height:6px;
      border-radius:50%;background:transparent;border:1.5px solid ${ACC(0.85)};
      transform:translate(-50%,-50%) scale(1);pointer-events:none;z-index:10;
      animation:siRipple 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards;`;
		parent.appendChild(ring);
		ring.addEventListener('animationend', () => ring.remove());
	}

	function spawnBurst(parent, x, y) {
		const chars = ['+', '×', '·', '◆', '▸', '○', '◇'];
		for (let i = 0; i < 7; i++) {
			const shard = document.createElement('span');
			shard.setAttribute('aria-hidden', 'true');
			const angle = (i / 7) * Math.PI * 2;
			const dist = 28 + Math.random() * 22;
			const tx = Math.cos(angle) * dist;
			const ty = Math.sin(angle) * dist;
			shard.textContent = chars[Math.floor(Math.random() * chars.length)];
			shard.style.cssText = `position:absolute;left:${x}px;top:${y}px;
        font-family:'JetBrains Mono',monospace;
        font-size:${0.5 + Math.random() * 0.4}rem;
        color:${ACC(0.7 + Math.random() * 0.3)};
        pointer-events:none;z-index:10;transform:translate(-50%,-50%);
        animation:siBurst 0.65s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        --tx:${tx}px;--ty:${ty}px;`;
			parent.appendChild(shard);
			shard.addEventListener('animationend', () => shard.remove());
		}
	}

	function spawnGlow(parent, x, y) {
		const glow = document.createElement('div');
		glow.setAttribute('aria-hidden', 'true');
		glow.style.cssText = `position:absolute;left:${x}px;top:${y}px;
      width:60px;height:60px;border-radius:50%;
      background:radial-gradient(circle,${ACC(0.35)} 0%,transparent 70%);
      transform:translate(-50%,-50%) scale(0.4);pointer-events:none;z-index:9;
      filter:blur(6px);animation:siGlowPop 0.5s ease-out forwards;`;
		parent.appendChild(glow);
		glow.addEventListener('animationend', () => glow.remove());
	}

	function makeSymbolInteractive(el, container, baseSize, baseAlpha) {
		el.style.pointerEvents = 'auto';
		el.style.cursor = 'crosshair';
		el.style.transition =
			'transform 0.2s cubic-bezier(0.34,1.56,0.64,1), color 0.2s, text-shadow 0.2s, filter 0.2s';

		el.addEventListener('mouseenter', e => {
			el.style.transform = 'scale(0.35) rotate(-8deg)';
			el.style.color = ACC(0.95);
			el.style.textShadow = `0 0 12px ${ACC(0.9)}, 0 0 24px ${ACC(0.5)}`;
			const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
			el.style.filter = `brightness(1.6) drop-shadow(0 0 6px ${accentColor || '#A3FF12'})`;

			const rect = container.getBoundingClientRect();
			spawnRipple(container, e.clientX - rect.left, e.clientY - rect.top);
			spawnBurst(container, e.clientX - rect.left, e.clientY - rect.top);
			spawnGlow(container, e.clientX - rect.left, e.clientY - rect.top);
		});

		el.addEventListener('mouseleave', () => {
			el.style.transform = '';
			el.style.color = ACC(baseAlpha);
			el.style.textShadow = '';
			el.style.filter = '';
		});
	}

	function spawnSymbols(container, syms, count, isFooter) {
		const anim = isFooter ? 'siFooterFloat' : 'siHeroFloat';
		for (let i = 0; i < count; i++) {
			const el = document.createElement('span');
			const size = 0.50 + Math.random() * 0.55;
			const alpha = 0.06 + Math.random() * 0.16;
			const dur = (isFooter ? 20 : 14) + Math.random() * 22;
			const delay = Math.random() * 24;
			el.setAttribute('aria-hidden', 'true');
			el.textContent = syms[Math.floor(Math.random() * syms.length)];
			el.style.cssText = `
        position:absolute;font-family:'JetBrains Mono','Courier New',monospace;
        font-size:${size}rem;color:${ACC(alpha)};white-space:nowrap;user-select:none;
        pointer-events:${isFooter ? 'none' : 'auto'};
        left:${(Math.random() * 93).toFixed(1)}%;
        ${isFooter ? 'bottom:0' : `top:${(86 + Math.random() * 22).toFixed(0)}%`};
        animation:${anim} ${dur.toFixed(1)}s linear -${delay.toFixed(1)}s infinite;
        z-index:0;letter-spacing:0.05em;`;
			container.appendChild(el);
			el.addEventListener('animationiteration', () => {
				el.style.left = (Math.random() * 93).toFixed(1) + '%';
				el.textContent = syms[Math.floor(Math.random() * syms.length)];
			});
			if (!isFooter) makeSymbolInteractive(el, container, size, alpha);
		}
	}

	function addDotGrid(parent, alpha, size) {
		const el = createLayer(`
      position:absolute;inset:0;pointer-events:none;z-index:0;
      background-image:radial-gradient(circle,${ACC(alpha)} 1px,transparent 1px);
      background-size:${size}px ${size}px;
      animation:siDotPan ${(size * 0.62).toFixed(0)}s linear infinite;`);
		parent.insertBefore(el, parent.firstChild);
	}

	function addGlowBlobs(parent) {
		[{
				w: 420,
				top: '-90px',
				left: '-70px',
				delay: '0s'
			},
			{
				w: 300,
				top: 'auto',
				left: 'auto',
				right: '4%',
				bottom: '0',
				delay: '-4s'
			},
		].forEach(({
			w,
			top,
			left,
			right,
			bottom,
			delay
		}) => {
			const el = createLayer(`
        position:absolute;border-radius:50%;pointer-events:none;z-index:0;
        width:${w}px;height:${w}px;
        background:radial-gradient(circle,${ACC(0.055)} 0%,transparent 70%);
        filter:blur(80px);
        top:${top || 'auto'};left:${left || 'auto'};
        right:${right || 'auto'};bottom:${bottom || 'auto'};
        animation:siBlob ${(8 + Math.random() * 5).toFixed(1)}s ease-in-out ${delay} infinite alternate;`);
			parent.appendChild(el);
		});
	}

	function addScanLine(parent) {
		const el = createLayer(`
      position:absolute;left:0;right:0;height:1px;
      background:linear-gradient(90deg,transparent,${ACC(0.24)},transparent);
      pointer-events:none;z-index:0;animation:siScan 7s linear infinite;`);
		parent.appendChild(el);
	}

	function addBrackets(parent) {
		const navH = 'calc(var(--nav-h, 70px) + 14px)';
		[
			[`top:${navH}`, 'left:60px', 'border-top:1px solid', 'border-left:1px solid'],
			[`top:${navH}`, 'right:60px', 'border-top:1px solid', 'border-right:1px solid'],
			['bottom:12px', 'left:60px', 'border-bottom:1px solid', 'border-left:1px solid'],
			['bottom:12px', 'right:60px', 'border-bottom:1px solid', 'border-right:1px solid'],
		].forEach(([v, h, b1, b2], idx) => {
			const el = createLayer(`
        position:absolute;${v};${h};width:48px;height:48px;
        ${b1} ${ACC(0.22)};${b2} ${ACC(0.22)};
        pointer-events:none;z-index:0;
        animation:siBracket 4.5s ease-in-out ${idx * 1.1}s infinite;`);
			parent.appendChild(el);
		});
	}

	function augmentHero(section) {
		if (!section || section.dataset.siAnim) return;
		if (section.querySelector('canvas')) {
			section.dataset.siAnim = '1';
			return;
		}

		section.dataset.siAnim = '1';
		section.style.position = 'relative';
		section.style.overflow = 'hidden';

		createCanvas(section, false);
		addDotGrid(section, 0.055, 36);

		const symBox = createLayer(
			'position:absolute;inset:0;pointer-events:none;z-index:2;overflow:hidden;');
		section.appendChild(symBox);
		spawnSymbols(symBox, getHeroSyms(section), 44, false);

		addGlowBlobs(section);
		addScanLine(section);
		addBrackets(section);
	}

	function initFooterHexNetwork(footer) {
		if (!footer || footer.dataset.siHexNet) return;
		if (footer.querySelector('canvas')) {
			footer.dataset.siHexNet = '1';
			return;
		}
		footer.dataset.siHexNet = '1';

		const canvas = document.createElement('canvas');
		canvas.setAttribute('aria-hidden', 'true');
		canvas.style.cssText =
			'position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:.15;';
		footer.insertBefore(canvas, footer.firstChild);
		const ctx = canvas.getContext('2d');

		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const HEX_CLUSTERS = [{
				cxF: 0.66,
				cyF: 0.12,
				rxF: 0.33,
				ryF: 0.40
			},
			{
				cxF: 0.27,
				cyF: 0.92,
				rxF: 0.35,
				ryF: 0.42
			}
		];

		let nodes = [],
			edges = [],
			pulses = [];
		let currentHexSize = 32;
		let dpr = Math.max(1, window.devicePixelRatio || 1);
		let cssWidth = 0,
			cssHeight = 0;
		let resizeTimer = null;
		let rafId = null;
		let startTime = performance.now();
		const mouse = {
			x: 0,
			y: 0,
			active: false
		};
		let mouseGlowAlpha = 0;

		function hashNoise(a, b, seed) {
			let x = Math.sin(a * 12.9898 + b * 78.233 + seed * 37.719) * 43758.5453;
			return x - Math.floor(x);
		}

		function axialToPixel(q, r, size) {
			return {
				x: size * 1.5 * q,
				y: size * (Math.sqrt(3) * (r + q / 2))
			};
		}

		function hexCorner(cx, cy, size, i) {
			const angle = (Math.PI / 180) * (60 * i);
			return {
				x: cx + size * Math.cos(angle),
				y: cy + size * Math.sin(angle)
			};
		}

		function clusterInfluence(px, py, clustersPx) {
			let maxInf = 0;
			for (const c of clustersPx) {
				const dx = (px - c.cx) / c.rx;
				const dy = (py - c.cy) / c.ry;
				const d = Math.sqrt(dx * dx + dy * dy);
				const inf = Math.max(0, 1 - d);
				if (inf > maxInf) maxInf = inf;
			}
			return maxInf;
		}

		function buildPattern(width, height) {
			nodes = [];
			edges = [];
			pulses = [];

			const hexSize = Math.min(46, Math.max(22, width / 32));
			currentHexSize = hexSize;

			const clustersPx = HEX_CLUSTERS.map(c => ({
				cx: c.cxF * width,
				cy: c.cyF * height,
				rx: c.rxF * width,
				ry: c.ryF * height
			}));

			const marginCells = 3;
			const qMin = -marginCells - 2;
			const qMax = Math.ceil(width / (hexSize * 1.5)) + marginCells;
			const rMin = -marginCells - Math.ceil(qMax / 2);
			const rMax = Math.ceil(height / (hexSize * Math.sqrt(3))) + marginCells + Math.ceil(qMax / 2);

			const vertexMap = new Map();

			function getOrCreateNode(x, y) {
				const key = Math.round(x) + ',' + Math.round(y);
				let idx = vertexMap.get(key);
				if (idx !== undefined) return idx;

				const isHub = hashNoise(x, y, 3) > 0.92;
				idx = nodes.length;
				nodes.push({
					bx: x,
					by: y,
					r: isHub ? 3.4 + hashNoise(x, y, 4) * 2.2 : 1.3 + hashNoise(x, y, 5) * 1.6,
					phase: hashNoise(x, y, 6) * Math.PI * 2,
					freq: 0.25 + hashNoise(x, y, 7) * 0.35,
					ampX: 1.2 + hashNoise(x, y, 8) * 1.6,
					ampY: 1.2 + hashNoise(x, y, 9) * 1.6,
					pulsePhase: hashNoise(x, y, 10) * Math.PI * 2,
					hub: isHub,
					baseAlpha: 0.7 + hashNoise(x, y, 11) * 0.3,
					glow: 0
				});
				vertexMap.set(key, idx);
				return idx;
			}

			const seenEdges = new Set();

			function addEdge(i, j) {
				if (i === j) return;
				const key = i < j ? i + '_' + j : j + '_' + i;
				if (seenEdges.has(key)) return;
				seenEdges.add(key);
				edges.push([i, j]);
			}


			for (let q = qMin; q <= qMax; q++) {
				for (let r = rMin; r <= rMax; r++) {
					const center = axialToPixel(q, r, hexSize);
					const px = center.x;
					const py = center.y;

					const pad = hexSize * (marginCells + 1);
					if (px < -pad || px > width + pad || py < -pad || py > height + pad) continue;

					const influence = clusterInfluence(px, py, clustersPx);
					if (influence < 0.16) continue;
					const probability = 0.42 + Math.pow(influence, 1.15) * 0.55;
					if (hashNoise(q, r, 1) > probability) continue;

					const jitter = 0.9 + hashNoise(q, r, 2) * 0.16;
					const corners = [];
					for (let i = 0; i < 6; i++) {
						const c = hexCorner(px, py, hexSize * jitter, i);
						corners.push(getOrCreateNode(c.x, c.y));
					}
					for (let i = 0; i < 6; i++) {
						addEdge(corners[i], corners[(i + 1) % 6]);
					}
				}
			}


			const area = width * height;
			const strayCount = Math.min(140, Math.max(30, Math.round(area / 9000)));
			const strays = [];
			for (let i = 0; i < strayCount; i++) {
				const x = hashNoise(i, 101, 21) * (width + hexSize * 4) - hexSize * 2;
				const y = hashNoise(i, 202, 22) * (height + hexSize * 4) - hexSize * 2;
				const influence = clusterInfluence(x, y, clustersPx);
				if (influence > 0.2 && hashNoise(i, 303, 23) > 0.08) continue;

				const idx = nodes.length;
				nodes.push({
					bx: x,
					by: y,
					r: 1 + hashNoise(x, y, 24) * 1.6,
					phase: hashNoise(x, y, 25) * Math.PI * 2,
					freq: 0.2 + hashNoise(x, y, 26) * 0.3,
					ampX: 1 + hashNoise(x, y, 27) * 1.4,
					ampY: 1 + hashNoise(x, y, 28) * 1.4,
					pulsePhase: hashNoise(x, y, 29) * Math.PI * 2,
					hub: false,
					baseAlpha: 0.4 + hashNoise(x, y, 30) * 0.3,
					glow: 0
				});
				strays.push(idx);
			}


			const maxLinkDist = hexSize * 2.1;
			for (let a = 0; a < strays.length; a++) {
				const nodeA = nodes[strays[a]];
				let linked = 0;
				let best = [];
				for (let b = 0; b < strays.length; b++) {
					if (a === b) continue;
					const nodeB = nodes[strays[b]];
					const dx = nodeA.bx - nodeB.bx;
					const dy = nodeA.by - nodeB.by;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < maxLinkDist) best.push([dist, strays[b]]);
				}
				best.sort((p1, p2) => p1[0] - p2[0]);
				for (const [, bIdx] of best) {
					if (linked >= 2) break;
					addEdge(strays[a], bIdx);
					linked++;
				}
			}


			const honeycombNodeCount = nodes.length - strays.length;
			for (const sIdx of strays) {
				if (hashNoise(sIdx, 404, 31) > 0.1) continue;
				const s = nodes[sIdx];
				let bestDist = Infinity,
					bestIdx = -1;
				const step = Math.max(1, Math.floor(honeycombNodeCount / 60));
				for (let i = 0; i < honeycombNodeCount; i += step) {
					const n = nodes[i];
					const dx = s.bx - n.bx,
						dy = s.by - n.by;
					const d = dx * dx + dy * dy;
					if (d < bestDist) {
						bestDist = d;
						bestIdx = i;
					}
				}
				if (bestIdx !== -1 && Math.sqrt(bestDist) < hexSize * 2.2) {
					addEdge(sIdx, bestIdx);
				}
			}


			const pulseCount = Math.min(16, Math.max(4, Math.round(edges.length / 14)));
			for (let i = 0; i < pulseCount; i++) {
				pulses.push({
					edgeIndex: Math.floor(hashNoise(i, 505, 41) * edges.length),
					t: hashNoise(i, 606, 42),
					speed: 0.12 + hashNoise(i, 707, 43) * 0.18
				});
			}
		}

		function currentPos(node, t) {
			return {
				x: node.bx + Math.sin(t * node.freq + node.phase) * node.ampX,
				y: node.by + Math.cos(t * node.freq * 0.85 + node.phase) * node.ampY
			};
		}

		function draw(t, dt) {
			ctx.clearRect(0, 0, cssWidth, cssHeight);

			const positions = new Array(nodes.length);
			for (let i = 0; i < nodes.length; i++) {
				positions[i] = currentPos(nodes[i], t);
			}

			const ease = 1 - Math.exp(-8 * Math.max(0.001, dt));
			mouseGlowAlpha += ((mouse.active ? 1 : 0) - mouseGlowAlpha) * ease;

			const glowRadius = currentHexSize * 4.5;
			const glowRadiusSq = glowRadius * glowRadius;

			for (let i = 0; i < nodes.length; i++) {
				const n = nodes[i];
				let target = 0;
				if (mouse.active) {
					const dx = positions[i].x - mouse.x;
					const dy = positions[i].y - mouse.y;
					const d2 = dx * dx + dy * dy;
					if (d2 < glowRadiusSq) {
						const d = Math.sqrt(d2) / glowRadius;
						const linear = 1 - d;
						target = linear * linear * (3 - 2 * linear);
					}
				}
				n.glow += (target - n.glow) * ease;
			}

			if (mouseGlowAlpha > 0.01) {
				const spotlightR = glowRadius * 1.7;
				const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, spotlightR);
				gradient.addColorStop(0, ACC(0.10 * mouseGlowAlpha));
				gradient.addColorStop(1, ACC(0));
				ctx.fillStyle = gradient;
				ctx.beginPath();
				ctx.arc(mouse.x, mouse.y, spotlightR, 0, Math.PI * 2);
				ctx.fill();
			}

			for (const [a, b] of edges) {
				const pa = positions[a],
					pb = positions[b];
				const edgeGlow = Math.max(nodes[a].glow, nodes[b].glow);
				const stray = nodes[a].r < 1.7 && nodes[b].r < 1.7;
				if (edgeGlow > 0.02) {
					ctx.strokeStyle = ACC(0.22 + edgeGlow * 0.55);
					ctx.lineWidth = 1 + edgeGlow * 1.3;
				} else {
					ctx.strokeStyle = ACC(stray ? 0.12 : 0.18);
					ctx.lineWidth = 1;
				}
				ctx.beginPath();
				ctx.moveTo(pa.x, pa.y);
				ctx.lineTo(pb.x, pb.y);
				ctx.stroke();
			}

			for (let i = 0; i < nodes.length; i++) {
				const n = nodes[i];
				const p = positions[i];
				const pulse = 0.75 + 0.25 * Math.sin(t * 0.6 + n.pulsePhase);
				const baseAlphaMul = n.hub ? 1 : 0.7;
				const alpha = Math.min(1, n.baseAlpha * pulse * baseAlphaMul * (1 + n.glow * 0.7));
				const dotR = n.r * (1 + n.glow * 0.85);

				if (n.glow > 0.03) {
					ctx.beginPath();
					ctx.fillStyle = ACC(0.22 * n.glow);
					ctx.arc(p.x, p.y, dotR * 2.6, 0, Math.PI * 2);
					ctx.fill();
				}

				ctx.beginPath();
				ctx.fillStyle = ACC(alpha);
				ctx.arc(p.x, p.y, dotR, 0, Math.PI * 2);
				ctx.fill();
			}

			for (const pulse of pulses) {
				const [a, b] = edges[pulse.edgeIndex] || [];
				if (a === undefined) continue;
				const pa = positions[a],
					pb = positions[b];
				const x = pa.x + (pb.x - pa.x) * pulse.t;
				const y = pa.y + (pb.y - pa.y) * pulse.t;
				const glow = Math.sin(pulse.t * Math.PI);
				ctx.beginPath();
				ctx.fillStyle = ACC(glow * 0.8);
				ctx.arc(x, y, 1.6 + glow * 0.8, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		function advancePulses(dt) {
			for (const pulse of pulses) {
				pulse.t += pulse.speed * dt;
				if (pulse.t >= 1) {
					pulse.t = 0;
					pulse.edgeIndex = Math.floor(rand(0, edges.length));
				}
			}
		}

		let lastFrameTime = performance.now();

		function loop(now) {
			const dt = (now - lastFrameTime) / 1000;
			lastFrameTime = now;
			const t = (now - startTime) / 1000;
			advancePulses(dt);
			draw(t, dt);
			rafId = requestAnimationFrame(loop);
		}

		function resizeCanvas() {
			cssWidth = Math.max(1, footer.offsetWidth);
			cssHeight = Math.max(1, footer.offsetHeight);
			dpr = Math.max(1, window.devicePixelRatio || 1);

			canvas.width = Math.round(cssWidth * dpr);
			canvas.height = Math.round(cssHeight * dpr);
			canvas.style.width = cssWidth + 'px';
			canvas.style.height = cssHeight + 'px';
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

			buildPattern(cssWidth, cssHeight);
			draw((performance.now() - startTime) / 1000, 0.016);

			if (!prefersReducedMotion && rafId === null) {
				lastFrameTime = performance.now();
				rafId = requestAnimationFrame(loop);
			}
		}

		function onResize() {
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(resizeCanvas, 150);
		}

		try {
			new ResizeObserver(onResize).observe(footer);
		} catch (e) {
			window.addEventListener('resize', onResize);
		}

		function setMouseFromClient(clientX, clientY) {
			const rect = canvas.getBoundingClientRect();
			mouse.x = clientX - rect.left;
			mouse.y = clientY - rect.top;
			mouse.active = true;
		}

		function redrawIfStatic() {
			if (rafId === null) {
				draw((performance.now() - startTime) / 1000, 0.05);
			}
		}

		footer.addEventListener('mousemove', (e) => {
			setMouseFromClient(e.clientX, e.clientY);
			redrawIfStatic();
		});
		footer.addEventListener('mouseenter', (e) => {
			setMouseFromClient(e.clientX, e.clientY);
			redrawIfStatic();
		});
		footer.addEventListener('mouseleave', () => {
			mouse.active = false;
			redrawIfStatic();
		});

		footer.addEventListener('touchstart', (e) => {
			if (e.touches[0]) setMouseFromClient(e.touches[0].clientX, e.touches[0].clientY);
			redrawIfStatic();
		}, {
			passive: true
		});
		footer.addEventListener('touchmove', (e) => {
			if (e.touches[0]) setMouseFromClient(e.touches[0].clientX, e.touches[0].clientY);
			redrawIfStatic();
		}, {
			passive: true
		});
		footer.addEventListener('touchend', () => {
			mouse.active = false;
			redrawIfStatic();
		});
		footer.addEventListener('touchcancel', () => {
			mouse.active = false;
			redrawIfStatic();
		});

		if ('IntersectionObserver' in window) {
			const io = new IntersectionObserver((entries) => {
				const visible = entries[0].isIntersecting;
				if (!visible && rafId !== null) {
					cancelAnimationFrame(rafId);
					rafId = null;
				} else if (visible && rafId === null && !prefersReducedMotion) {
					lastFrameTime = performance.now();
					rafId = requestAnimationFrame(loop);
				}
			}, {
				threshold: 0.01
			});
			io.observe(footer);
		}

		resizeCanvas();
	}

	function createPageParticles(heroSel, animName, keyframes, count) {
		const hero = document.querySelector(heroSel);
		if (!hero) return;
		injectStyles('kf-' + animName, keyframes);
		for (let i = 0; i < count; i++) {
			const d = document.createElement('div');
			d.setAttribute('aria-hidden', 'true');
			d.style.cssText = `
        position:absolute;border-radius:50%;pointer-events:none;z-index:0;
        width:${Math.random() * 3 + 1}px;height:${Math.random() * 3 + 1}px;
        background:${ACC(Math.random() * 0.25 + 0.05)};
        top:${Math.random() * 100}%;left:${Math.random() * 100}%;
        animation:${animName} ${Math.random() * 5 + 5}s ease-in-out ${Math.random() * 3}s infinite alternate;`;
			hero.appendChild(d);
		}
	}

	function createIndexParticles() {
		const hero = document.getElementById('home');
		if (!hero) return;
		injectStyles('kf-floatDot', `@keyframes floatDot {
      0%   { transform: translate(0,0) scale(1);   opacity:0.5; }
      100% { transform: translate(${Math.random() * 30 - 15}px,${Math.random() * -40 - 10}px) scale(1.5); opacity:0; }
    }`);
		for (let i = 0; i < 18; i++) {
			const dot = document.createElement('div');
			dot.setAttribute('aria-hidden', 'true');
			dot.style.cssText = `
        position:absolute;border-radius:50%;pointer-events:none;z-index:0;
        width:${Math.random() * 3 + 1}px;height:${Math.random() * 3 + 1}px;
        background:${ACC(Math.random() * 0.3 + 0.05)};
        top:${Math.random() * 100}%;left:${Math.random() * 100}%;
        animation:floatDot ${Math.random() * 6 + 5}s ease-in-out ${Math.random() * 3}s infinite alternate;`;
			hero.appendChild(dot);
		}
	}

	function initExperienceCanvas() {
		const canvas = document.getElementById('hero-canvas');
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		const ecfg = CFG.experience;
		let W, H, nodes = [];

		const resize = () => {
			W = canvas.width = canvas.offsetWidth;
			H = canvas.height = canvas.offsetHeight;
		};
		window.addEventListener('resize', resize);
		resize();

		const count = window.innerWidth < 768 ? ecfg.countMobile : ecfg.countDesktop;

		function randomNode() {
			const speed = 0.18 + Math.random() * 0.28;
			const angle = Math.random() * Math.PI * 2;
			return {
				x: Math.random() * W,
				y: Math.random() * H,
				r: 1 + Math.random() * 1.8,
				vx: Math.cos(angle) * speed,
				vy: Math.sin(angle) * speed,
				pulse: Math.random() * Math.PI * 2,
				pulseSpeed: 0.02 + Math.random() * 0.02,
			};
		}

		for (let i = 0; i < count; i++) nodes.push(randomNode());

		(function draw() {
			ctx.clearRect(0, 0, W, H);
			nodes.forEach(n => {
				n.x += n.vx;
				n.y += n.vy;
				n.pulse += n.pulseSpeed;
				if (n.x < -10) n.x = W + 10;
				if (n.x > W + 10) n.x = -10;
				if (n.y < -10) n.y = H + 10;
				if (n.y > H + 10) n.y = -10;
			});

			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const dx = nodes[i].x - nodes[j].x;
					const dy = nodes[i].y - nodes[j].y;
					const dist = Math.sqrt(dx * dx + dy * dy);
					if (dist < ecfg.linkDist) {
						ctx.beginPath();
						ctx.strokeStyle = ACC((1 - dist / ecfg.linkDist) * 0.18);
						ctx.lineWidth = 0.6;
						ctx.moveTo(nodes[i].x, nodes[i].y);
						ctx.lineTo(nodes[j].x, nodes[j].y);
						ctx.stroke();
					}
				}
			}

			nodes.forEach(n => {
				const a = 0.35 + 0.25 * Math.sin(n.pulse);
				const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
				grad.addColorStop(0, ACC(a * 0.5));
				grad.addColorStop(1, ACC(0));
				ctx.beginPath();
				ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
				ctx.fillStyle = grad;
				ctx.fill();
				ctx.beginPath();
				ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
				ctx.fillStyle = ACC(a);
				ctx.fill();
			});

			requestAnimationFrame(draw);
		})();
	}

	function initExperienceHeroSymbols() {
		const container = document.getElementById('heroSymbols');
		if (!container) return;

		function createSymbol() {
			const el = document.createElement('span');
			el.className = 'hsym';
			el.textContent = EXP_HERO_SYMS[Math.floor(Math.random() * EXP_HERO_SYMS.length)];
			const size = 0.6 + Math.random() * 0.6;
			const opacity = 0.1 + Math.random() * 0.18;
			el.style.cssText = `
        left:${2 + Math.random() * 96}%;
        top:${90 + Math.random() * 20}%;
        font-size:${size}rem;
        color:${ACC(opacity)};
        animation-duration:${14 + Math.random() * 20}s;
        animation-delay:-${Math.random() * 18}s;`;
			container.appendChild(el);
			el.addEventListener('animationiteration', () => {
				el.style.left = (2 + Math.random() * 96) + '%';
			});
			makeSymbolInteractive(el, container, size, opacity);
		}

		for (let i = 0; i < 38; i++) createSymbol();
	}

	function initUniversalAnimations() {
		[
			'#home', '.about-hero', '.skills-hero', '.projects-hero',
			'.testi-hero', '.pd-hero', '.contact-hero', '.project-details-hero',
		].forEach(sel => $$(sel).forEach(augmentHero));

		const footerEl = document.querySelector('footer');
		if (footerEl) initFooterHexNetwork(footerEl);
	}

	function refreshTextureColors() {
		document.querySelectorAll(
			'#home [aria-hidden="true"], ' +
			'.about-hero [aria-hidden="true"], ' +
			'.skills-hero [aria-hidden="true"], ' +
			'.projects-hero [aria-hidden="true"], ' +
			'.testi-hero [aria-hidden="true"], ' +
			'.pd-hero [aria-hidden="true"], ' +
			'.contact-hero [aria-hidden="true"], ' +
			'.project-details-hero [aria-hidden="true"], ' +
			'footer [aria-hidden="true"]'
		).forEach(el => {
			const tag = el.tagName.toLowerCase();

			if (tag === 'span' && el.style.fontFamily && el.style.color) {
				const m = el.style.color.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
				const alpha = m ? parseFloat(m[1]) : 0.10;
				el.style.color = ACC(alpha);
			}

			if (tag === 'div' && el.style.backgroundImage && el.style.backgroundImage.includes('radial-gradient')) {
				const m = el.style.backgroundImage.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
				const alpha = m ? parseFloat(m[1]) : 0.055;
				const sizeMatch = el.style.backgroundSize ? el.style.backgroundSize.match(/(\d+)px/) : null;
				const size = sizeMatch ? parseInt(sizeMatch[1]) : 36;
				el.style.backgroundImage = `radial-gradient(circle,${ACC(alpha)} 1px,transparent 1px)`;
			}

			if (tag === 'div' && el.style.background && el.style.background.includes('radial-gradient') && el.style.filter && el.style.filter.includes('blur')) {
				const m = el.style.background.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
				const alpha = m ? parseFloat(m[1]) : 0.055;
				el.style.background = `radial-gradient(circle,${ACC(alpha)} 0%,transparent 70%)`;
			}

			if (tag === 'div' && el.style.background && el.style.background.includes('linear-gradient') && el.style.height === '1px') {
				const m = el.style.background.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
				const alpha = m ? parseFloat(m[1]) : 0.24;
				el.style.background = `linear-gradient(90deg,transparent,${ACC(alpha)},transparent)`;
			}

			if (tag === 'div' && el.style.width === '48px' && el.style.height === '48px') {
				const sides = ['borderTop', 'borderBottom', 'borderLeft', 'borderRight'];
				sides.forEach(side => {
					if (el.style[side] && el.style[side].includes('rgba')) {
						const m = el.style[side].match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
						const alpha = m ? parseFloat(m[1]) : 0.22;
						el.style[side] = `1px solid ${ACC(alpha)}`;
					}
				});
			}

			if (tag === 'div' && el.style.borderRadius === '50%' && el.style.background && !el.style.filter) {
				const m = el.style.background.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
				if (m) {
					const alpha = parseFloat(m[1]);
					el.style.background = ACC(alpha);
				}
			}
		});

		document.querySelectorAll('.fgeo-circle-solid').forEach(el => {
			const m = el.style.background.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
			const alpha = m ? parseFloat(m[1]) : 0.75;
			el.style.background = ACC(alpha);
		});

		document.querySelectorAll('.fgeo-circle-outline').forEach(el => {
			const m = el.style.borderColor.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
			const alpha = m ? parseFloat(m[1]) : 0.60;
			el.style.borderColor = ACC(alpha);
		});

		document.querySelectorAll('.fgeo-dot').forEach(el => {
			const m = el.style.backgroundColor.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
			const alpha = m ? parseFloat(m[1]) : 0.50;
			el.style.backgroundColor = ACC(alpha);
		});

		document.querySelectorAll('.fgeo-dash').forEach(el => {
			const m = el.style.background.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
			const alpha = m ? parseFloat(m[1]) : 0.40;
			el.style.background = ACC(alpha);
		});

		document.querySelectorAll('.fgeo-bar').forEach(el => {
			const m = el.style.background.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
			const alpha = m ? parseFloat(m[1]) : 0.60;
			el.style.background = ACC(alpha);
		});

		document.querySelectorAll('.fgeo-tri-outline polygon').forEach(poly => {
			const fill = poly.getAttribute('fill');
			if (fill && fill.includes('rgba')) {
				const m = fill.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
				const alpha = m ? parseFloat(m[1]) : 0.75;
				poly.setAttribute('fill', ACC(alpha));
			}
			const stroke = poly.getAttribute('stroke');
			if (stroke && stroke.includes('rgba')) {
				const m = stroke.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
				const alpha = m ? parseFloat(m[1]) : 0.60;
				poly.setAttribute('stroke', ACC(alpha));
			}
		});

		document.querySelectorAll('#heroSymbols .hsym').forEach(el => {
			const m = el.style.color && el.style.color.match(/rgba?\([^,]+,[^,]+,[^,]+,\s*([\d.]+)\)/);
			const alpha = m ? parseFloat(m[1]) : 0.12;
			el.style.color = ACC(alpha);
		});

	}

	document.addEventListener('si:accentChanged', refreshTextureColors);

	return {
		createCanvas,
		spawnRipple,
		spawnBurst,
		spawnGlow,
		makeSymbolInteractive,
		spawnSymbols,
		addDotGrid,
		addGlowBlobs,
		addScanLine,
		addBrackets,
		augmentHero,
		initFooterHexNetwork,
		createPageParticles,
		createIndexParticles,
		initExperienceCanvas,
		initExperienceHeroSymbols,
		initUniversalAnimations,
		refreshTextureColors,
	};
})();