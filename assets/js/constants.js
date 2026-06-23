/* ===================================================
   CONSTANTS.JS — Configuration, Tokens & Symbol Banks
   M SOHAIB ISHAQUE — Portfolio
   =================================================== */

'use strict';

window.Portfolio = window.Portfolio || {};

window.Portfolio.CONSTANTS = (function() {

	function getCurrentAccent() {
		const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
		return accent || '#A3FF12';
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

	function getAccentRgbaPrefix() {
		const accent = getCurrentAccent();
		const rgb = hexToRgb(accent);
		if (rgb) {
			return `rgba(${rgb.r},${rgb.g},${rgb.b},`;
		}
		return 'rgba(163,255,18,';
	}

	const DESIGN = {
		get accent() {
			return getCurrentAccent();
		},
		get accentRgba() {
			return getAccentRgbaPrefix();
		},
		bg: '#080808',
		bgCard: '#111111',
		navH: 70,
		transition: 0.35,
	};

	const ANIM = {
		preloaderDelay: 1500,
		counterDuration: 1800,
		counterStep: 16,
		typewriterSpeed: 30,
		formSubmitDelay: 1800,
		formSuccessDur: 4500,
		glitchInterval: 40,
		rippleDuration: 700,
		burstDuration: 650,
		glowDuration: 500,
	};

	const CANVAS = {
		hero: {
			countDesktop: 70,
			countMobile: 35,
			linkDist: 148,
			maxAlpha: 0.20,
			speedRange: [0.13, 0.30],
			radiusRange: [0.7, 2.0],
		},
		footer: {
			countDesktop: 44,
			countMobile: 22,
			linkDist: 100,
			maxAlpha: 0.09,
			speedRange: [0.05, 0.13],
			radiusRange: [0.55, 1.05],
		},
		experience: {
			countDesktop: 55,
			countMobile: 28,
			linkDist: 140,
		},
	};

	const FILTER_CATS = ['all', 'wordpress', 'web', 'ecommerce', 'desktop', 'tools'];

	const PAGE_ROUTES = {
		'index': 'home',
		'': 'home',
		'about': 'about',
		'skills': 'skills',
		'projects': 'projects',
		'testimonials': 'testimonials',
		'contact': 'contact',
		'experience': 'experience',
		'project-details': 'project-details',
	};

	const SYMS = {

		home: [
			'C#', '.NET Core', 'Angular', 'TypeScript', 'WordPress',
			'SQL Server', 'Entity Framework', 'REST API', 'JWT',
			'</>', '{}', '()', '[];', '=>', '::', '&&', '||', '!==', '===',
			'git push', 'npm run dev', 'docker run', 'postman',
			'I BUILD', 'DIGITAL', 'FULL STACK', 'WEB DEV',
			'@Component', 'DbContext', 'LINQ', 'async/await',
			'HTML5', 'CSS3', 'Bootstrap', 'PHP', 'MySQL',
			'◆', '▸', '⬡', '◇', '△', '▷', '⬢', '⬟',
		],

		about: [
			'{ name: "Sohaib" }', 'role: "Full Stack Dev"',
			'location: "Rawalpindi"', 'experience: "4+ yrs"',
			'nationality: "Pakistani"', 'DOB: 27-MAY-2000',
			'BS Software Eng', 'UAJ&K · 2017-2021',
			'Oxygen Soft', 'Media@Marsons', 'Islamabad, PK',
			'Cert: WordPress', 'Cert: Freelancing', 'Cert: Graphic Design',
			'Clean Code', 'Problem Solving', 'Team Work', 'Leadership',
			'Continuous Learning', 'User-First', 'Scalable Solutions',
			'May 2021', 'May 2022', 'Dec 2023', '3+ Companies',
			'20+ Projects', '10+ Clients', 'Growth', 'Journey',
			'{ passion: true }', 'self.improve()', 'new Skills()',
			'◆', '▸', '△', '◇', '○', '□',
		],

		skills: [
			'HTML5 · 95%', 'CSS3 · 90%', 'Angular · 92%',
			'TypeScript · 88%', 'React · 85%', 'Bootstrap · 90%',
			'.NET Core · 92%', 'C# · 88%', 'Node.js · 90%',
			'PHP · 80%', 'ASP.NET MVC', 'RESTful APIs',
			'SQL Server · 88%', 'MySQL · 85%', 'Entity Framework',
			'Firebase', 'LINQ', 'DbContext',
			'WordPress · 93%', 'Elementor Pro', 'WP Bakery',
			'Custom Theme', 'Custom Plugin', 'Shortcodes', 'ACF',
			'Git · 95%', 'Docker', 'Postman', 'Swagger',
			'VS Code', 'Figma · 90%', 'Adobe XD', 'Photoshop',
			'WPF', 'WinForms', 'Desktop App', 'Unit Testing',
			'Frontend', 'Backend', 'Database', 'CMS', 'DevOps',
			'◆', '▸', '⬡', '□', '○', '△',
		],

		projects: [
			'Web Application', 'REST API', 'SPA', 'MVC', 'Dashboard',
			'.NET Desktop', 'CMS Site', 'E-Commerce', 'WPF App',
			'Al Tahaluf', 'Simplicity Academy', 'Gossips App',
			'Online Quiz', 'QRMF', 'Angular + .NET',
			'git clone', 'npm start', 'dotnet run', 'wp activate',
			'design', 'develop', 'test', 'deploy', 'ship it!',
			'All Projects', 'WordPress', 'E-Commerce', 'Tools',
			'v1.0.0', 'v2.0.0', 'main branch', 'feature/new',
			'npm install', 'dotnet restore', 'docker build .',
			'useEffect()', 'HttpClient', 'WP_Query()', 'CRUD',
			'◆', '▸', '⬡', '◇', '△', '▷',
		],

		testimonials: [
			'★★★★★', '5 / 5', '100% Satisfied', '⭐⭐⭐⭐⭐',
			'"Outstanding!"', '"Highly Professional"', '"Flawless"',
			'"Delivered on Time"', '"Amazing Experience"',
			'"Strong Technical"', '"Exceeded Expectations"',
			'Excellent!', 'Reliable', 'Trusted', 'Recommended',
			'Quality Work', 'On Schedule', 'Client-First',
			'Angular/.NET ✓', 'Fast & Responsive', 'Zero Issues',
			'Communication ✓', 'Problem Solving ✓', 'Team Player',
			'{ rating: 5 }', 'review.approved', 'stars: [5,5,5]',
			'Great Work!', 'Will hire again', 'Top Developer',
			'◆', '▸', '△', '○', '◇', '□',
		],

		contact: [
			'Hello!', 'Hi There!', "Let's Talk", 'Hire Me!', 'Say Hi!',
			'Available for Work', 'Open to Freelance', 'Full-Time / Part-Time',
			'name: ""', 'email: ""', 'subject: ""', 'message: ""',
			'send()', 'submit()', 'validate()', 'response(200)',
			'Rawalpindi, Pakistan', '+92 303-8464315', '+92 317-9227811',
			'engineer.sohaibishaque@', 'github/Sohaib-Ishaque',
			'linkedin/sohaibishaque', 'engineersohaibishaque.com',
			'Connect', 'Collaborate', 'Build Together', 'New Project?',
			'{ status: "available" }', 'ping(me)', 'reach.out()',
			'◆', '▸', '△', '○', '◇', '□',
		],

		'project-details': [
			'React', 'Chart.js', 'Node.js', 'MongoDB', 'Dashboard',
			'E-Commerce', 'Analytics', 'Real-Time', 'KPI', 'Metrics',
			'Wireframe', 'Prototype', 'MVP', 'Iterate', 'Deploy',
			'git branch feature/', 'git merge main', 'npm test',
			'docker build .', 'CI/CD', 'GitHub Actions',
			'Performance: 98', 'SEO: 100', 'LCP < 1.2s', 'A11y: ✓',
			'Clean Code', 'DRY', 'SOLID', 'MVC Pattern',
			'useEffect()', 'useState()', 'async/await', 'fetch(API)',
			'Chart.line()', 'aggregate()', 'Schema', 'mongoose',
			'◆', '▸', '⬡', '◇', '△', '▷',
		],
	};

	const FOOTER_SYMS = [
		'@Component({ selector:', 'providers: [AppService]',
		'[HttpPost] public async', 'Task<IActionResult>',
		'ModelState.IsValid', 'services.AddScoped<>()',
		'app.UseRouting();', 'builder.Build()',
		'await Task.Run()', 'IEnumerable<T>',
		'entity.SaveChanges()', 'new DbContext(options)',
		'.AsNoTracking()', 'var result = await ctx.',
		'add_filter("init",', 'wp_enqueue_script(',
		'register_taxonomy(', 'npm run build',
		'git commit -m "feat:"', 'docker-compose up -d',
		'SELECT TOP 10 *', 'INNER JOIN roles ON id',
		'.subscribe((res) =>', '.pipe(map(x => x.data))',
		'takeUntil(this.destroy$)', 'ngOnDestroy()',
		'catchError(err =>', 'firstValueFrom(obs)',
		'interface IRepository<T>', 'catch (Exception ex)',
		'{ "status": 200, "ok": true }', 'Authorization: Bearer',
	];

	const EXP_HERO_SYMS = [
		'</>', '{}', '()', '[];', '=>', '::', '&&', '||', '!==', '===',
		'.NET', 'C#', 'SQL', 'API', 'Git', 'PHP', 'CSS', 'HTML',
		'◆', '▸', '⬡', '⬢', '◇', '⬟', '△', '▷',
		'0x', '01', '10', '++', '--', '**',
		'M12', 'L24', 'Z', 'rx', 'xmlns',
	];

	return {
		DESIGN,
		ANIM,
		CANVAS,
		FILTER_CATS,
		PAGE_ROUTES,
		SYMS,
		FOOTER_SYMS,
		EXP_HERO_SYMS,
	};
})();