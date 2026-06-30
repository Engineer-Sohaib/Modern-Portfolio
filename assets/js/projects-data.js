/* ===================================================
   PROJECT-DATA.JS — Data Store & Details Renderer
   M SOHAIB ISHAQUE — Portfolio
   =================================================== */
'use strict';

window.Portfolio = window.Portfolio || {};

window.Portfolio.PROJECTS = {

	
	'al-tahaluf': {
		id: 'al-tahaluf',
		num: '01',
		name: "Al Tahaluf's",
		subtitle: 'Admin Panel.',
		badgeType: 'Enterprise Platform',
		badgeYear: '2022',
		category: 'Enterprise Platform · Angular / .NET Core',
		desc: 'A full-stack enterprise web platform with a custom admin panel — featuring role-based access, RESTful APIs and a scalable Angular / .NET Core architecture for managing business operations at scale.',
		tags: ['Angular', '.NET Core', 'SQL Server', 'Entity Framework', 'RxJS'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254073/al-tahaluf-banner_p0ltyp.png',
		meta: [{
				label: 'Client',
				value: "Al Tahaluf's Group",
				accent: false
			},
			{
				label: 'Category',
				value: 'Enterprise Admin Platform',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Live & Active',
				accent: true
			},
			{
				label: 'Timeline',
				value: '8 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'Full Stack Developer',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['Angular', '.NET Core', 'SQL Server', 'EF', 'RxJS']
			},
		],
		stats: [{
				num: '8',
				suffix: 'wk',
				label: 'Delivery Time'
			},
			{
				num: '18',
				suffix: '+',
				label: 'Custom Modules'
			},
			{
				num: '97',
				suffix: '',
				label: 'Perf Score'
			},
			{
				num: '100',
				suffix: '%',
				label: 'Client Satisfaction'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782289505/Al-Tahaluf-4_di0oon.png',
				label: 'Admin Login Panel'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782289506/Al-Tahaluf-3_xkhpgh.png',
				label: 'Dashboard Overview'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782289506/Al-Tahaluf-5_lxp7iu.png',
				label: 'Data Management View'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782289505/Al-Tahaluf-1_suxlkf.png',
				label: 'Module Overview'
			},
		],
		overviewParagraphs: [
			"Al Tahaluf's is a full enterprise web platform built with Angular on the frontend and .NET Core on the backend. The system features a custom admin panel for user and content management, reusable Angular component architecture, lazy loading and RxJS-based state management.",
			"The backend exposes clean RESTful APIs backed by Entity Framework Core and SQL Server, with JWT-based authentication and role-based access control separating admin, manager and viewer permissions.",
			"The result is a scalable, maintainable system that gives the business complete control over their operations through a fast, responsive dashboard — with zero downtime since deployment.",
		],
		features: [{
				icon: 'shield',
				title: 'Secure Admin Auth',
				desc: 'JWT tokens with ASP.NET Identity and granular role-based permissions.'
			},
			{
				icon: 'code',
				title: 'RESTful API',
				desc: '.NET Core APIs with Entity Framework, LINQ and optimised SQL queries.'
			},
			{
				icon: 'zap',
				title: 'Angular Lazy Loading',
				desc: 'Module-level lazy loading for sub-second initial load times.'
			},
			{
				icon: 'database',
				title: 'SQL Server DB',
				desc: 'Optimised relational schema with stored procedures and indexes.'
			},
			{
				icon: 'monitor',
				title: 'Responsive UI',
				desc: 'Fully responsive across desktop, tablet and mobile screens.'
			},
			{
				icon: 'users',
				title: 'Role Management',
				desc: 'Admin, manager and viewer roles with live permission toggling.'
			},
		],
		techStack: [{
				abbr: 'NG',
				name: 'Angular 16',
				role: 'Frontend SPA'
			},
			{
				abbr: '.NET',
				name: '.NET Core 7',
				role: 'Backend API'
			},
			{
				abbr: 'C#',
				name: 'C#',
				role: 'Language'
			},
			{
				abbr: 'SQL',
				name: 'SQL Server',
				role: 'Database'
			},
			{
				abbr: 'EF',
				name: 'Entity Framework',
				role: 'ORM'
			},
			{
				abbr: 'RxJS',
				name: 'RxJS',
				role: 'State Management'
			},
			{
				abbr: 'JWT',
				name: 'JWT / Identity',
				role: 'Auth'
			},
			{
				abbr: 'TS',
				name: 'TypeScript',
				role: 'Language'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Discovery & Architecture',
				text: 'Mapped business workflows, designed the Angular module tree and SQL Server schema with normalised tables and stored procedures.'
			},
			{
				phase: 'Phase 02',
				heading: 'API Development',
				text: 'Built .NET Core REST endpoints with EF Core, JWT auth, RBAC middleware and Swagger documentation.'
			},
			{
				phase: 'Phase 03',
				heading: 'Frontend Build',
				text: 'Implemented all Angular modules with lazy loading, reactive forms, RxJS services and reusable component library.'
			},
			{
				phase: 'Phase 04',
				heading: 'Testing & Deployment',
				text: 'Unit tested API controllers, ran E2E tests, then deployed to IIS with CI/CD pipeline and zero-downtime swap.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Complex RBAC',
				desc: 'Permission matrix across 3 roles and 40+ screens solved with a single Angular route guard + .NET policy handler.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Performance',
				desc: '97 Lighthouse performance score achieved through lazy loading, OnPush change detection and SQL query optimisation.'
			},
			{
				icon: 'users',
				title: 'Outcome — Adoption',
				desc: '100% of admin staff adopted the new system within the first week, replacing manual spreadsheet workflows entirely.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Security',
				desc: 'Zero security incidents post-launch with JWT refresh token rotation, HTTPS and parameterised queries throughout.'
			},
		],
		template: 'v2',
		prevProject: null,
		nextProject: {
			id: 'nsric',
			name: 'NSRIC Education',
			cat: 'Educational Platform · WordPress'
		},
	},
 

	'nsric': {
		id: 'nsric',
		num: '02',
		name: 'NSRIC Education',
		subtitle: 'Online Education Platform.',
		badgeType: 'Educational Platform',
		badgeYear: '2022',
		category: 'Educational Platform · WordPress / PHP',
		desc: 'Full website for Nature Science Research and Innovation Centre — online course listings, visa consultancy, conference management, dual-timezone clock and a live scrolling announcement ticker.',
		tags: ['WordPress', 'PHP', 'JavaScript', 'MySQL'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254093/nsric-banner_ggseqj.png',
		meta: [{
				label: 'Client',
				value: 'NSRIC',
				accent: false
			},
			{
				label: 'Category',
				value: 'Educational Platform',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Live & Active',
				accent: true
			},
			{
				label: 'Timeline',
				value: '6 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'Full Stack Developer',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['WordPress', 'PHP', 'ACF', 'MySQL', 'JS']
			},
		],
		stats: [{
				num: '6',
				suffix: 'wk',
				label: 'Delivery Time'
			},
			{
				num: '12',
				suffix: '+',
				label: 'Custom Modules'
			},
			{
				num: '96',
				suffix: '',
				label: 'Perf Score'
			},
			{
				num: '100',
				suffix: '%',
				label: 'Client Satisfaction'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254093/nsric-banner_ggseqj.png',
				label: 'NSRIC Home Page'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254093/nsric-banner_ggseqj.png',
				label: 'Course Listings'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254093/nsric-banner_ggseqj.png',
				label: 'Student Portal'
			},
		],
		overviewParagraphs: [
			'NSRIC needed a comprehensive digital platform to manage online course enrolments, visa consultancy appointments and international conference registrations — all within a single, manageable WordPress installation.',
			'The challenge was building flexible content architecture that non-technical staff could update daily without developer involvement, while maintaining fast load times and a professional appearance.',
			'I delivered a fully custom WordPress solution with ACF-powered content types, a custom PHP plugin for the dual-timezone clock and announcement ticker, and a Bootstrap-based responsive theme.',
		],
		features: [{
				icon: 'activity',
				title: 'Course Listings',
				desc: 'Dynamic catalogue with category filters, enrollment CTAs and ACF-powered course details.'
			},
			{
				icon: 'users',
				title: 'Student Portal',
				desc: 'Authenticated student area with personalised dashboard and course history.'
			},
			{
				icon: 'zap',
				title: 'Live Ticker',
				desc: 'Scrolling announcement ticker powered by custom JavaScript and WP options API.'
			},
			{
				icon: 'code',
				title: 'Custom PHP Plugin',
				desc: 'Dual-timezone world clock and shortcode library as a standalone mu-plugin.'
			},
			{
				icon: 'monitor',
				title: 'Responsive Design',
				desc: 'Mobile-first Bootstrap layout accessible on all devices and screen sizes.'
			},
			{
				icon: 'shield',
				title: 'Secure Auth',
				desc: 'WordPress role-based access for students, editors and administrators.'
			},
		],
		techStack: [{
				abbr: 'WP',
				name: 'WordPress 6',
				role: 'CMS / Core'
			},
			{
				abbr: 'PHP',
				name: 'PHP 8',
				role: 'Backend Logic'
			},
			{
				abbr: 'ACF',
				name: 'ACF Pro',
				role: 'Content Fields'
			},
			{
				abbr: 'SQL',
				name: 'MySQL',
				role: 'Database'
			},
			{
				abbr: 'JS',
				name: 'JavaScript',
				role: 'Interactivity'
			},
			{
				abbr: 'BS',
				name: 'Bootstrap 5',
				role: 'Styling'
			},
			{
				abbr: 'CPT',
				name: 'CPT UI',
				role: 'Content Types'
			},
			{
				abbr: 'CF7',
				name: 'Contact Form 7',
				role: 'Forms'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Requirements & Content Map',
				text: 'Worked with NSRIC staff to map all content types — courses, conferences, visa services — and designed the WordPress data model.'
			},
			{
				phase: 'Phase 02',
				heading: 'Theme Development',
				text: 'Built a custom child theme from a Bootstrap starter with all page templates, template parts and responsive breakpoints.'
			},
			{
				phase: 'Phase 03',
				heading: 'Plugin & ACF Setup',
				text: 'Developed a custom mu-plugin for the ticker and clock, registered all CPTs and ACF field groups for non-technical editing.'
			},
			{
				phase: 'Phase 04',
				heading: 'Optimisation & Launch',
				text: 'Implemented caching, image optimisation and Cloudflare CDN. Trained staff on content management before go-live.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Daily Updates',
				desc: 'Non-technical staff needed to publish news and update courses. Solved with ACF + Gutenberg giving full editorial control.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Enrolments',
				desc: 'Online course enrolments increased 20% in the first two months after launch compared to the previous static site.'
			},
			{
				icon: 'users',
				title: 'Outcome — Staff Autonomy',
				desc: 'Zero developer involvement needed for day-to-day content updates since launch — staff manage everything independently.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Performance',
				desc: '96 Lighthouse score achieved through object caching, critical CSS and optimised image delivery via CDN.'
			},
		],
		template: 'v2',
		prevProject: {
			id: 'al-tahaluf',
			name: "Al Tahaluf's Admin",
			cat: 'Enterprise · Angular / .NET Core'
		},
		nextProject: {
			id: 'stock-management',
			name: 'Stock Management',
			cat: 'Desktop App · .NET WinForms'
		},
	},

	'stock-management': {
		id: 'stock-management',
		num: '03',
		name: 'Stock Management',
		subtitle: 'Desktop Application.',
		badgeType: 'Desktop Application',
		badgeYear: '2021',
		category: 'Desktop Application · .NET WinForms / C#',
		desc: 'Windows desktop app for stock inventory management — user authentication, stock tracking, category management, low-stock alerts, printable reports and secure SQL Server data persistence.',
		tags: ['.NET', 'WinForms', 'SQL Server', 'C#'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254080/banner-sm_sn5z7g.png',
		meta: [{
				label: 'Client',
				value: 'Internal / Business Client',
				accent: false
			},
			{
				label: 'Category',
				value: 'Desktop Inventory System',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Deployed & In Use',
				accent: true
			},
			{
				label: 'Timeline',
				value: '5 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'Desktop Developer',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['.NET', 'C#', 'WinForms', 'SQL Server', 'ADO.NET']
			},
		],
		stats: [{
				num: '5',
				suffix: 'wk',
				label: 'Delivery Time'
			},
			{
				num: '60',
				suffix: '%',
				label: 'Faster Stock Entry'
			},
			{
				num: '40',
				suffix: '%',
				label: 'Error Reduction'
			},
			{
				num: '10',
				suffix: '+',
				label: 'Daily Users'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254080/banner-sm_sn5z7g.png',
				label: 'Dashboard Overview'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254080/banner-sm_sn5z7g.png',
				label: 'Stock Entry Form'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254080/banner-sm_sn5z7g.png',
				label: 'Reports Screen'
			},
		],
		overviewParagraphs: [
			'The client was managing inventory entirely in spreadsheets — a process prone to errors, duplication and slow reporting. They needed a purpose-built desktop application that staff could learn in minutes.',
			'I built a .NET WinForms application with C# and SQL Server, featuring a full authentication flow, real-time stock tracking, category management and low-stock threshold alerts.',
			'Crystal Reports integration generates printable inventory reports and CSV exports on demand, replacing the manual spreadsheet exports the team previously spent hours preparing each week.',
		],
		features: [{
				icon: 'shield',
				title: 'Authentication',
				desc: 'Secure login with SHA-256 hashed passwords, salt and session management.'
			},
			{
				icon: 'activity',
				title: 'Stock Tracking',
				desc: 'Add, update, delete items with real-time quantity display and threshold alerts.'
			},
			{
				icon: 'database',
				title: 'SQL Server DB',
				desc: 'Relational schema with stored procedures for all CRUD operations.'
			},
			{
				icon: 'zap',
				title: 'Low-Stock Alerts',
				desc: 'Automatic notification panel when stock drops below configurable thresholds.'
			},
			{
				icon: 'users',
				title: 'Multi-User',
				desc: 'Admin and standard user roles with permission-gated screens.'
			},
			{
				icon: 'grid',
				title: 'Reports',
				desc: 'Crystal Reports integration with printable inventory and transaction reports.'
			},
		],
		techStack: [{
				abbr: '.NET',
				name: '.NET Framework 4.8',
				role: 'Platform'
			},
			{
				abbr: 'C#',
				name: 'C#',
				role: 'Language'
			},
			{
				abbr: 'WF',
				name: 'WinForms',
				role: 'UI Framework'
			},
			{
				abbr: 'SQL',
				name: 'SQL Server',
				role: 'Database'
			},
			{
				abbr: 'ADO',
				name: 'ADO.NET',
				role: 'Data Access'
			},
			{
				abbr: 'CR',
				name: 'Crystal Reports',
				role: 'Reporting'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Requirements Gathering',
				text: 'Shadowed staff using the existing spreadsheet workflow to identify every pain point and data requirement.'
			},
			{
				phase: 'Phase 02',
				heading: 'Database Design',
				text: 'Designed the SQL Server schema with normalised tables for items, categories, suppliers, transactions and users.'
			},
			{
				phase: 'Phase 03',
				heading: 'Application Build',
				text: 'Built all WinForms screens, data binding, validation, ADO.NET data layer and Crystal Reports report definitions.'
			},
			{
				phase: 'Phase 04',
				heading: 'Testing & Handover',
				text: 'Ran UAT with warehouse staff, fixed edge-case bugs, wrote user documentation and delivered a staff training session.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Data Migration',
				desc: 'Migrated 3 years of spreadsheet data into the SQL Server schema with a custom import tool and validation rules.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Speed',
				desc: 'Stock entry time reduced by 60% compared to spreadsheet workflow — measured across the first month of use.'
			},
			{
				icon: 'users',
				title: 'Outcome — Adoption',
				desc: 'All 10 warehouse staff trained and fully independent within 2 days — zero support calls after the first week.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Accuracy',
				desc: '40% reduction in stock discrepancies in the first quarter — attributed to validation rules and duplicate-item checks.'
			},
		],
		template: 'v2',
		prevProject: {
			id: 'nsric',
			name: 'NSRIC Education',
			cat: 'Educational Platform · WordPress'
		},
		nextProject: {
			id: 'qrmf',
			name: 'QRMF',
			cat: 'Medical System · PHP / MySQL'
		},
	},

	'qrmf': {
		id: 'qrmf',
		num: '04',
		name: 'QRMF',
		subtitle: 'Medical Information System.',
		badgeType: 'Medical Platform',
		badgeYear: '2022',
		category: 'Medical Information System · PHP / MySQL',
		desc: 'Medical management system with PHP, MySQL and Bootstrap — secure authentication, patient and operation records, role-based admin panel, phpMyAdmin integration and JavaScript-enhanced UI.',
		tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254094/qrmf-banner_bzaa21.png',
		meta: [{
				label: 'Client',
				value: 'QRMF — Quick Reaction Medical',
				accent: false
			},
			{
				label: 'Category',
				value: 'Medical Information System',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Live & Active',
				accent: true
			},
			{
				label: 'Timeline',
				value: '7 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'Full Stack Developer',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'jQuery']
			},
		],
		stats: [{
				num: '7',
				suffix: 'wk',
				label: 'Delivery Time'
			},
			{
				num: '50',
				suffix: '%',
				label: 'Faster Record Access'
			},
			{
				num: '200',
				suffix: '+',
				label: 'Records Managed'
			},
			{
				num: '100',
				suffix: '%',
				label: 'Client Satisfaction'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254094/qrmf-banner_bzaa21.png',
				label: 'QRMF Home Page'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254094/qrmf-banner_bzaa21.png',
				label: 'Admin Panel Dashboard'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254094/qrmf-banner_bzaa21.png',
				label: 'Patient Records'
			},
		],
		overviewParagraphs: [
			'QRMF (Quick Reaction Medical Force) needed a centralised digital platform for managing patient records, operation logs and staff data — replacing a paper-based system that was slow and error-prone.',
			'The platform required strict access control separating staff roles, a fast search capability for patient records under emergency conditions, and a straightforward admin interface for data entry.',
			'I built a clean PHP MVC application with MySQL, Bootstrap 5 and jQuery — delivering a system that staff could navigate in seconds even under pressure, with full audit logging for every record change.',
		],
		features: [{
				icon: 'shield',
				title: 'Secure Auth',
				desc: 'PHP session-based authentication with role differentiation and bcrypt passwords.'
			},
			{
				icon: 'activity',
				title: 'Patient Records',
				desc: 'Full CRUD for patient data with instant search and category filtering.'
			},
			{
				icon: 'database',
				title: 'MySQL Database',
				desc: 'Robust relational schema for medical records, staff data and audit logs.'
			},
			{
				icon: 'code',
				title: 'PHP Backend',
				desc: 'Clean server-side PHP with prepared statements and input sanitisation.'
			},
			{
				icon: 'monitor',
				title: 'Bootstrap UI',
				desc: 'Responsive Bootstrap 5 layout optimised for fast navigation under pressure.'
			},
			{
				icon: 'zap',
				title: 'JS Interactivity',
				desc: 'Dynamic search, sortable tables, modals and form validation with jQuery.'
			},
		],
		techStack: [{
				abbr: 'PHP',
				name: 'PHP 8',
				role: 'Backend'
			},
			{
				abbr: 'SQL',
				name: 'MySQL 8',
				role: 'Database'
			},
			{
				abbr: 'BS',
				name: 'Bootstrap 5',
				role: 'UI Framework'
			},
			{
				abbr: 'JS',
				name: 'JavaScript',
				role: 'Interactivity'
			},
			{
				abbr: 'jQ',
				name: 'jQuery',
				role: 'DOM / AJAX'
			},
			{
				abbr: 'PMA',
				name: 'phpMyAdmin',
				role: 'DB Administration'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Workflow Analysis',
				text: 'Mapped the existing paper-based record workflow and identified all data entities: patients, staff, operations, audit trail.'
			},
			{
				phase: 'Phase 02',
				heading: 'Database Design',
				text: 'Designed the normalised MySQL schema with foreign key constraints, indexes and views for common reporting queries.'
			},
			{
				phase: 'Phase 03',
				heading: 'Application Build',
				text: 'Built the PHP MVC application with all CRUD modules, role-based access, search functionality and Bootstrap responsive UI.'
			},
			{
				phase: 'Phase 04',
				heading: 'Training & Launch',
				text: 'Ran UAT with medical staff, iterated on UX feedback, then deployed to cPanel hosting with SSL and daily database backups.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Emergency Access',
				desc: 'Records needed to be retrievable in under 3 seconds under emergency conditions. Solved with MySQL full-text search indexes.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Record Speed',
				desc: 'Patient record retrieval time dropped from ~5 minutes (paper) to under 10 seconds — a 50× improvement in access speed.'
			},
			{
				icon: 'users',
				title: 'Outcome — Paperwork',
				desc: '30% reduction in administrative paperwork hours measured across the first quarter of system use.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Audit Trail',
				desc: 'Full immutable audit log of every record access and change — meeting the organisation\'s internal compliance requirements.'
			},
		],
		template: 'v2',
		prevProject: {
			id: 'stock-management',
			name: 'Stock Management',
			cat: 'Desktop App · .NET WinForms'
		},
		nextProject: {
			id: 'simplicity-trading',
			name: 'Simplicity Trading',
			cat: 'WordPress · WooCommerce'
		},
	},

	'simplicity-trading': {
		id: 'simplicity-trading',
		num: '05',
		name: 'Simplicity Trading',
		subtitle: 'WordPress / E-Commerce.',
		badgeType: 'WordPress / E-Commerce',
		badgeYear: '2023',
		category: 'WordPress / E-Commerce · Elementor / WooCommerce',
		desc: 'Conversion-focused WordPress website for Simplicity Trading Academy — membership tiers, 7-day free trial CTA, video integration, course listings, FAQ and a dark-themed responsive layout.',
		tags: ['WordPress', 'Elementor', 'PHP', 'WooCommerce'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254092/simplicity-banner_warjhz.png',
		meta: [{
				label: 'Client',
				value: 'Simplicity Trading Academy',
				accent: false
			},
			{
				label: 'Category',
				value: 'E-Commerce / Membership Site',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Live & Active',
				accent: true
			},
			{
				label: 'Timeline',
				value: '5 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'WordPress Developer',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'MySQL']
			},
		],
		stats: [{
				num: '5',
				suffix: 'wk',
				label: 'Delivery Time'
			},
			{
				num: '120',
				suffix: '+',
				label: 'Members Enrolled'
			},
			{
				num: '35',
				suffix: '%',
				label: 'Trial-to-Paid Rate'
			},
			{
				num: '100',
				suffix: '%',
				label: 'Client Satisfaction'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254092/simplicity-banner_warjhz.png',
				label: 'Home Page Hero'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254092/simplicity-banner_warjhz.png',
				label: 'Membership Page'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254092/simplicity-banner_warjhz.png',
				label: 'Course Listing Page'
			},
		],
		overviewParagraphs: [
			'Simplicity Trading Academy needed a professional website that could sell trading course memberships online, capture free-trial leads and clearly communicate the value of their programme.',
			'The main challenge was building a conversion funnel that felt premium and trustworthy — positioning the academy against established competitors while keeping the backend manageable for a small team.',
			'I delivered a dark-themed WordPress site with WooCommerce memberships, a 7-day free trial flow connected to MailChimp, Elementor Pro page designs and embedded video course previews.',
		],
		features: [{
				icon: 'shield',
				title: 'WooCommerce Memberships',
				desc: 'Tiered access plans with automated billing, content gating and renewal emails.'
			},
			{
				icon: 'activity',
				title: 'Free Trial Flow',
				desc: '7-day trial CTA linked to automated MailChimp onboarding sequence.'
			},
			{
				icon: 'code',
				title: 'Elementor Pro Builds',
				desc: 'Fully custom page designs using Elementor Pro widgets and custom CSS.'
			},
			{
				icon: 'zap',
				title: 'Video Integration',
				desc: 'Embedded course preview videos with scroll-triggered autoplay.'
			},
			{
				icon: 'users',
				title: 'Lead Generation',
				desc: 'Opt-in forms with MailChimp integration and conversion tracking.'
			},
			{
				icon: 'monitor',
				title: 'Dark Theme Design',
				desc: 'Custom dark theme with social proof sections and clear CTAs driving conversions.'
			},
		],
		techStack: [{
				abbr: 'WP',
				name: 'WordPress 6',
				role: 'CMS / Core'
			},
			{
				abbr: 'WC',
				name: 'WooCommerce',
				role: 'E-Commerce'
			},
			{
				abbr: 'EL',
				name: 'Elementor Pro',
				role: 'Page Builder'
			},
			{
				abbr: 'PHP',
				name: 'PHP 8',
				role: 'Backend Logic'
			},
			{
				abbr: 'SQL',
				name: 'MySQL',
				role: 'Database'
			},
			{
				abbr: 'MC',
				name: 'MailChimp',
				role: 'Email Marketing'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Brand & UX Strategy',
				text: 'Reviewed competitor sites, defined the conversion funnel structure and wireframed the key pages with the client.'
			},
			{
				phase: 'Phase 02',
				heading: 'WooCommerce Setup',
				text: 'Configured WooCommerce memberships, pricing tiers, content restriction rules and payment gateway integration.'
			},
			{
				phase: 'Phase 03',
				heading: 'Page Design & Build',
				text: 'Built all pages in Elementor Pro with custom animations, video blocks, testimonial sections and a mobile-optimised checkout.'
			},
			{
				phase: 'Phase 04',
				heading: 'Email Flows & Launch',
				text: 'Set up MailChimp automation sequences for trial and paid members, tested the full funnel and launched with an ad campaign.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Conversion Rate',
				desc: 'Previous landing page converted below 2%. New trial flow redesign lifted trial sign-ups to 12% of visitors.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Trial-to-Paid',
				desc: '35% of free trial sign-ups converted to paid memberships within the first 60 days post-launch.'
			},
			{
				icon: 'users',
				title: 'Outcome — Member Growth',
				desc: '120+ members enrolled within the first 3 months — exceeding the client\'s 6-month target by 2×.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Team Autonomy',
				desc: 'Client team manages all course content, pricing and promotions independently — zero ongoing developer time required.'
			},
		],
		template: 'v2',
		prevProject: {
			id: 'qrmf',
			name: 'QRMF',
			cat: 'Medical System · PHP / MySQL'
		},
		nextProject: {
			id: 'traveler',
			name: 'Traveler App',
			cat: 'Travel Booking · React / Node.js'
		},
	},

	'traveler': {
		id: 'traveler',
		num: '06',
		name: 'Traveler',
		subtitle: 'Travel Booking Platform.',
		badgeType: 'Web Application',
		badgeYear: '2023',
		category: 'Travel Booking Platform · React / Node.js',
		desc: 'Full-featured flight and stay booking web app — flight search with route, trip type, date and passenger filters, hotel listings, promo code support and a responsive React SPA.',
		tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254093/traveler-banner_yk8ndo.png',
		meta: [{
				label: 'Client',
				value: 'Internal Project',
				accent: false
			},
			{
				label: 'Category',
				value: 'Travel Booking Platform',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Live & Active',
				accent: true
			},
			{
				label: 'Timeline',
				value: '8 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'Full Stack Developer',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT']
			},
		],
		stats: [{
				num: '8',
				suffix: 'wk',
				label: 'Delivery Time'
			},
			{
				num: '1K',
				suffix: '+',
				label: 'Bookings Processed'
			},
			{
				num: '300',
				suffix: '+',
				label: 'Registered Users'
			},
			{
				num: '1.2',
				suffix: 's',
				label: 'Avg Page Load'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254093/traveler-banner_yk8ndo.png',
				label: 'Home Page Hero'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254093/traveler-banner_yk8ndo.png',
				label: 'Flight Search Results'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254093/traveler-banner_yk8ndo.png',
				label: 'Hotel Listings'
			},
		],
		overviewParagraphs: [
			'Traveler is a full-stack booking platform built with React, Node.js / Express and MongoDB — covering the complete journey from flight search through to hotel selection and booking confirmation.',
			'The core challenge was building a fast, intuitive search experience with complex filter combinations (route, trip type, date range, passenger count, cabin class) that returned results in under a second.',
			'I implemented a React SPA with React Router, a Node.js REST API backed by MongoDB, JWT authentication, promo code validation and a fully responsive UI with smooth loading states throughout.',
		],
		features: [{
				icon: 'activity',
				title: 'Flight Search',
				desc: 'One-way, return and multi-city search with date pickers and passenger/class selectors.'
			},
			{
				icon: 'users',
				title: 'User Accounts',
				desc: 'JWT-authenticated accounts with booking history, saved trips and profile management.'
			},
			{
				icon: 'code',
				title: 'Node.js REST API',
				desc: 'Express API with full CRUD for bookings, users and flight/hotel data.'
			},
			{
				icon: 'database',
				title: 'MongoDB',
				desc: 'Document database for flexible booking and availability data schemas.'
			},
			{
				icon: 'zap',
				title: 'Promo Codes',
				desc: 'Server-side promo validation with percentage and fixed-amount discount support.'
			},
			{
				icon: 'monitor',
				title: 'React SPA',
				desc: 'Single-page app with React Router, optimised renders and skeleton loading states.'
			},
		],
		techStack: [{
				abbr: 'Re',
				name: 'React 18',
				role: 'Frontend SPA'
			},
			{
				abbr: 'RR',
				name: 'React Router',
				role: 'Routing'
			},
			{
				abbr: 'ND',
				name: 'Node.js',
				role: 'Runtime'
			},
			{
				abbr: 'EX',
				name: 'Express.js',
				role: 'API Framework'
			},
			{
				abbr: 'MG',
				name: 'MongoDB',
				role: 'Database'
			},
			{
				abbr: 'MN',
				name: 'Mongoose',
				role: 'ODM'
			},
			{
				abbr: 'JWT',
				name: 'JWT',
				role: 'Auth'
			},
			{
				abbr: 'TW',
				name: 'Tailwind CSS',
				role: 'Styling'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Architecture & API Design',
				text: 'Designed the MongoDB schemas, REST API endpoints and React component hierarchy before writing a line of code.'
			},
			{
				phase: 'Phase 02',
				heading: 'API Development',
				text: 'Built all Express routes for flights, hotels, bookings, auth and promo codes — fully tested with Postman.'
			},
			{
				phase: 'Phase 03',
				heading: 'React Frontend',
				text: 'Implemented all React pages, components, React Router navigation, custom hooks and Tailwind UI with loading states.'
			},
			{
				phase: 'Phase 04',
				heading: 'Testing & Optimisation',
				text: 'Load tested the API, optimised MongoDB queries with indexes, achieved 1.2s average load and deployed to cloud hosting.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Search Speed',
				desc: 'Complex multi-filter queries were initially slow. Solved with MongoDB compound indexes and result caching on the API.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Performance',
				desc: '1.2s average page load achieved — well within the <2s target set at the project kickoff.'
			},
			{
				icon: 'users',
				title: 'Outcome — User Growth',
				desc: '300+ registered users and 1,000+ bookings processed within the first 3 months after launch.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Reliability',
				desc: '99.9% uptime since deployment with JWT refresh token rotation and robust MongoDB Atlas failover configuration.'
			},
		],
		template: 'v2',
		prevProject: {
			id: 'simplicity-trading',
			name: 'Simplicity Trading',
			cat: 'WordPress · WooCommerce'
		},
		nextProject: {
			id: 'online-quiz',
			name: 'Online Quiz System',
			cat: 'Web App · ASP.NET / C#'
		},
	},

	'online-quiz': {
		id: 'online-quiz',
		num: '07',
		name: 'Online Quiz System',
		subtitle: 'Web Application.',
		badgeType: 'Web Application',
		badgeYear: '2022',
		category: 'Web Application · ASP.NET MVC / C#',
		desc: 'Feature-rich quiz platform with ASP.NET MVC and C# — admin quiz builder, multiple question types, per-question time limits, real-time score calculation and a results analytics dashboard.',
		tags: ['.NET', 'C#', 'SQL Server', 'Admin Panel'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254075/bnner-oqs_itk88l.png',
		meta: [{
				label: 'Client',
				value: 'Academic Institution',
				accent: false
			},
			{
				label: 'Category',
				value: 'Online Assessment Platform',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Live & In Use',
				accent: true
			},
			{
				label: 'Timeline',
				value: '6 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'Full Stack Developer',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['ASP.NET MVC', 'C#', 'SQL Server', 'Bootstrap', 'jQuery']
			},
		],
		stats: [{
				num: '6',
				suffix: 'wk',
				label: 'Delivery Time'
			},
			{
				num: '300',
				suffix: '+',
				label: 'Students Assessed'
			},
			{
				num: '50',
				suffix: '+',
				label: 'Quizzes Created'
			},
			{
				num: '80',
				suffix: '%',
				label: 'Paper Test Reduction'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254075/bnner-oqs_itk88l.png',
				label: 'Quiz Dashboard'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254075/bnner-oqs_itk88l.png',
				label: 'Quiz Taking View'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254075/bnner-oqs_itk88l.png',
				label: 'Results Analytics'
			},
		],
		overviewParagraphs: [
			'The institution was running all assessments on paper — a slow, costly process that gave no insight into student performance trends. They needed a digital platform that could replace paper tests entirely.',
			'The platform had to support multiple question types with configurable scoring, enforce time limits per question, and provide staff with instant results and analytics without any manual grading.',
			'I built an ASP.NET MVC application with C# and SQL Server, featuring a drag-and-drop quiz builder for admins, a timed student quiz interface and a results dashboard with score breakdowns and rankings.',
		],
		features: [{
				icon: 'shield',
				title: 'Auth System',
				desc: 'Separate login flows for students and administrators with ASP.NET Identity.'
			},
			{
				icon: 'activity',
				title: 'Quiz Builder',
				desc: 'Admin panel with ordering, bulk import and multiple question type support.'
			},
			{
				icon: 'code',
				title: 'Question Types',
				desc: 'MCQ, True/False and fill-in-the-blank with configurable per-question scoring.'
			},
			{
				icon: 'zap',
				title: 'Timed Questions',
				desc: 'Per-question countdown timer with auto-submit on expiry and JavaScript enforcement.'
			},
			{
				icon: 'database',
				title: 'SQL Server',
				desc: 'Normalised schema for quizzes, questions, answers, attempts and results.'
			},
			{
				icon: 'grid',
				title: 'Analytics',
				desc: 'Score breakdown, leaderboard, pass/fail rates and performance trend charts.'
			},
		],
		techStack: [{
				abbr: 'MVC',
				name: 'ASP.NET MVC 5',
				role: 'Framework'
			},
			{
				abbr: 'C#',
				name: 'C#',
				role: 'Language'
			},
			{
				abbr: 'SQL',
				name: 'SQL Server',
				role: 'Database'
			},
			{
				abbr: 'EF',
				name: 'Entity Framework',
				role: 'ORM'
			},
			{
				abbr: 'BS',
				name: 'Bootstrap 5',
				role: 'UI Framework'
			},
			{
				abbr: 'jQ',
				name: 'jQuery',
				role: 'JS / Timer'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Requirements & Schema',
				text: 'Documented all assessment types, scoring rules and access requirements. Designed the SQL Server schema and admin wireframes.'
			},
			{
				phase: 'Phase 02',
				heading: 'Backend Development',
				text: 'Built all ASP.NET MVC controllers and EF data layer for quiz CRUD, attempts, scoring and user management.'
			},
			{
				phase: 'Phase 03',
				heading: 'Student Interface',
				text: 'Built the timed student quiz UI with JavaScript countdown, answer persistence and auto-submit on time expiry.'
			},
			{
				phase: 'Phase 04',
				heading: 'Analytics & Launch',
				text: 'Implemented the results dashboard with Chart.js analytics, ran UAT with staff and students, then deployed to production.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Timer Integrity',
				desc: 'Timer needed to be server-enforced to prevent cheating. Solved with server-side attempt timestamps validated on submission.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Grading Speed',
				desc: 'Instant automated grading replaced 2–3 hours of manual paper marking per quiz session — saving staff significant time.'
			},
			{
				icon: 'users',
				title: 'Outcome — Scale',
				desc: '300+ students assessed and 50+ quizzes created since launch — exceeding the planned capacity by 50%.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Paper Reduction',
				desc: '80% of assessments moved from paper to the platform within the first semester of use.'
			},
		],
		template: 'v2',
		prevProject: {
			id: 'traveler',
			name: 'Traveler App',
			cat: 'Travel Booking · React / Node.js'
		},
		nextProject: {
			id: 'mila-lifestyle',
			name: 'Mila Lifestyle',
			cat: 'E-Commerce · WooCommerce'
		},
	},

	'mila-lifestyle': {
		id: 'mila-lifestyle',
		num: '08',
		name: 'Mila Lifestyle',
		subtitle: 'E-Commerce Store.',
		badgeType: 'E-Commerce',
		badgeYear: '2023',
		category: 'E-Commerce Store · WooCommerce / WordPress',
		desc: 'Wholesale lifestyle accessories e-commerce platform — product categories, wishlist, cart, search, promotional banners, buyer account system and a clean multi-level navigation.',
		tags: ['WooCommerce', 'WordPress', 'PHP', 'MySQL'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254089/mila-banner_p2wdvm.png',
		meta: [{
				label: 'Client',
				value: 'Mila Lifestyle',
				accent: false
			},
			{
				label: 'Category',
				value: 'Wholesale E-Commerce',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Live & Active',
				accent: true
			},
			{
				label: 'Timeline',
				value: '6 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'WordPress / WooCommerce Dev',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JS']
			},
		],
		stats: [{
				num: '200',
				suffix: '+',
				label: 'Products Listed'
			},
			{
				num: '800',
				suffix: '+',
				label: 'Monthly Shoppers'
			},
			{
				num: '40',
				suffix: '%',
				label: 'Increase in Orders'
			},
			{
				num: '1.5',
				suffix: 's',
				label: 'Avg Page Load'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254089/mila-banner_p2wdvm.png',
				label: 'Store Home Page'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254089/mila-banner_p2wdvm.png',
				label: 'Product Catalogue'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254089/mila-banner_p2wdvm.png',
				label: 'Cart & Checkout'
			},
		],
		overviewParagraphs: [
			'Mila Lifestyle sells wholesale fashion accessories and needed a professional online store to replace their manual WhatsApp-based ordering process that was becoming unmanageable as the business scaled.',
			'The store needed to handle 200+ products across multiple categories, support buyer account registration, display promotional banners for seasonal sales and load fast on mobile connections.',
			'I built a custom WordPress + WooCommerce store with a bespoke child theme, hierarchical product categories, wishlist functionality, promotional banner scheduling and an optimised checkout flow.',
		],
		features: [{
				icon: 'grid',
				title: 'Product Catalogue',
				desc: 'Hierarchical categories with filters, sorting, search and WooCommerce product galleries.'
			},
			{
				icon: 'activity',
				title: 'Wishlist & Cart',
				desc: 'Persistent wishlist and cart with real-time quantity updates and stock status display.'
			},
			{
				icon: 'shield',
				title: 'Buyer Accounts',
				desc: 'Registered accounts with order history, saved addresses and re-order functionality.'
			},
			{
				icon: 'zap',
				title: 'Promo Banners',
				desc: 'Dynamic homepage banners with seasonal promotion scheduling via the WP admin.'
			},
			{
				icon: 'code',
				title: 'Custom Theme',
				desc: 'Bespoke WordPress child theme with custom WooCommerce templates and shortcodes.'
			},
			{
				icon: 'monitor',
				title: 'Mobile-First',
				desc: 'Fully responsive design with touch-friendly galleries and one-step mobile checkout.'
			},
		],
		techStack: [{
				abbr: 'WP',
				name: 'WordPress 6',
				role: 'CMS / Core'
			},
			{
				abbr: 'WC',
				name: 'WooCommerce',
				role: 'E-Commerce'
			},
			{
				abbr: 'PHP',
				name: 'PHP 8',
				role: 'Backend Logic'
			},
			{
				abbr: 'SQL',
				name: 'MySQL',
				role: 'Database'
			},
			{
				abbr: 'JS',
				name: 'JavaScript',
				role: 'Interactivity'
			},
			{
				abbr: 'PP',
				name: 'PayPal / Bank',
				role: 'Payments'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Product & Category Mapping',
				text: 'Catalogued all 200+ products, defined the category hierarchy and planned the WooCommerce attribute and variation structure.'
			},
			{
				phase: 'Phase 02',
				heading: 'Theme & Template Build',
				text: 'Built a custom child theme with bespoke WooCommerce archive, single product and checkout templates matching the brand identity.'
			},
			{
				phase: 'Phase 03',
				heading: 'Plugin Config & Data Import',
				text: 'Configured WooCommerce settings, payment gateways and wishlist plugin, then bulk-imported all products with images and metadata.'
			},
			{
				phase: 'Phase 04',
				heading: 'Optimisation & Launch',
				text: 'Implemented caching, image compression and CDN delivery to achieve 1.5s load times. Trained client and launched with a sale campaign.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Bulk Import',
				desc: '200+ products needed importing with images, variants and custom attributes. Solved with a WP All Import CSV pipeline.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Order Volume',
				desc: '40% increase in online orders within the first 2 months compared to the previous WhatsApp-based process.'
			},
			{
				icon: 'users',
				title: 'Outcome — Customer Base',
				desc: '800+ unique monthly shoppers within 3 months of launch — predominantly mobile users from Instagram referrals.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Performance',
				desc: '1.5s average page load on mobile networks — critical for the client\'s mobile-first customer base.'
			},
		],
		template: 'v2',
		prevProject: {
			id: 'online-quiz',
			name: 'Online Quiz System',
			cat: 'Web App · ASP.NET / C#'
		},
		nextProject: {
			id: 'kf-movement',
			name: 'KF Movement',
			cat: 'Non-Profit · WordPress'
		},
	},

	'kf-movement': {
		id: 'kf-movement',
		num: '09',
		name: 'KF Movement',
		subtitle: 'Non-Profit Website.',
		badgeType: 'Non-Profit',
		badgeYear: '2023',
		category: 'Non-Profit Organisation · WordPress / Custom Theme',
		desc: 'The Kashmir Freedom Movement — a digital platform for integration, mobilisation and empowerment of the people of Jammu & Kashmir toward the self-determination cause.',
		tags: ['WordPress', 'Custom Theme', 'ACF/CPT', 'PHP'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254080/kfm-banner_cbicqy.png',
		meta: [{
				label: 'Client',
				value: 'KF Movement',
				accent: false
			},
			{
				label: 'Category',
				value: 'Non-Profit Awareness Platform',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Live & Active',
				accent: true
			},
			{
				label: 'Timeline',
				value: '6 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'Full Stack Developer',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['WordPress', 'PHP', 'ACF', 'CPT', 'MySQL', 'Stripe']
			},
		],
		stats: [{
				num: '5K',
				suffix: '+',
				label: 'Supporters Reached'
			},
			{
				num: '30',
				suffix: '+',
				label: 'Campaigns Published'
			},
			{
				num: '100',
				suffix: '+',
				label: 'News Articles'
			},
			{
				num: '99',
				suffix: '%',
				label: 'Platform Uptime'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782296891/kfm-3_eynhtd.png',
				label: 'KFM Kashmir Histry'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782296888/kfm-1_r3edha.png',
				label: 'About Mabool Shaheed'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782296895/kfm-5_ku9k9z.png',
				label: 'KFM Books'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782296887/kfm-2_gczyog.png',
				label: 'KFM Info'
			},
		],
		overviewParagraphs: [
			'The Kashmir Freedom Movement needed a credible digital presence to coordinate campaigns, publish news and receive donations from supporters worldwide — all manageable by non-technical volunteers.',
			'The platform had to handle traffic spikes during major protest events and provide a clear, structured content hierarchy for campaigns, press releases, events and a donation module.',
			'I delivered a custom WordPress theme and mu-plugin with ACF/CPT content architecture, Stripe donation integration, WPML-ready multilingual structure and Cloudflare caching for high-traffic resilience.',
		],
		features: [{
				icon: 'grid',
				title: 'Custom CPTs',
				desc: 'ACF and CPT UI for news, campaigns, press releases and events with custom taxonomies.'
			},
			{
				icon: 'shield',
				title: 'Donation Module',
				desc: 'Secure Stripe donation form with one-time and recurring contribution options.'
			},
			{
				icon: 'activity',
				title: 'Campaign Manager',
				desc: 'Admin-managed campaigns with progress tracking, goal display and supporter counters.'
			},
			{
				icon: 'code',
				title: 'Custom Plugin',
				desc: 'Bespoke mu-plugin for all movement-specific features, shortcodes and AJAX handlers.'
			},
			{
				icon: 'zap',
				title: 'News Feed',
				desc: 'Dynamic news section with category filtering, pagination and social sharing.'
			},
			{
				icon: 'monitor',
				title: 'Responsive',
				desc: 'Mobile-first design accessible across all devices for a global supporter base.'
			},
		],
		techStack: [{
				abbr: 'WP',
				name: 'WordPress 6',
				role: 'CMS / Core'
			},
			{
				abbr: 'PHP',
				name: 'PHP 8',
				role: 'Backend Logic'
			},
			{
				abbr: 'ACF',
				name: 'ACF Pro',
				role: 'Content Fields'
			},
			{
				abbr: 'CPT',
				name: 'CPT UI',
				role: 'Content Types'
			},
			{
				abbr: 'SQL',
				name: 'MySQL',
				role: 'Database'
			},
			{
				abbr: 'STR',
				name: 'Stripe',
				role: 'Donations'
			},
			{
				abbr: 'CF',
				name: 'Cloudflare',
				role: 'CDN & Security'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Content Architecture',
				text: 'Mapped all content types with the committee — campaigns, demands, news, events — and designed the WordPress data model and ACF field groups.'
			},
			{
				phase: 'Phase 02',
				heading: 'Theme Development',
				text: 'Built a bespoke WordPress theme from a custom starter implementing the full Figma design with PHP templates and reusable template parts.'
			},
			{
				phase: 'Phase 03',
				heading: 'Plugin & Donation Layer',
				text: 'Developed the mu-plugin registering all CPTs, shortcodes and AJAX handlers; integrated Stripe for one-time and recurring donations.'
			},
			{
				phase: 'Phase 04',
				heading: 'Optimisation & Launch',
				text: 'Implemented Cloudflare caching, load-tested for viral traffic spikes, and launched timed with a major protest event for maximum impact.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Traffic Spikes',
				desc: 'Site survived viral sharing during protests thanks to Cloudflare caching rules serving static HTML on high-traffic pages.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Editorial Freedom',
				desc: 'Volunteers publish news and events independently — zero developer involvement for day-to-day content since launch.'
			},
			{
				icon: 'users',
				title: 'Outcome — Reach',
				desc: '5,000+ unique supporters reached within the first month — becoming the primary digital hub for the movement.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Donations',
				desc: 'Stripe donation module successfully receiving contributions from supporters across 12+ countries since launch.'
			},
		],
		template: 'v2',
		prevProject: {
			id: 'mila-lifestyle',
			name: 'Mila Lifestyle',
			cat: 'E-Commerce · WooCommerce'
		},
		nextProject: {
			id: 'jkjaac',
			name: 'JKJAAC',
			cat: 'Non-Profit · WordPress'
		},
	},

	'jkjaac': {
		id: 'jkjaac',
		num: '10',
		name: 'JKJAAC',
		subtitle: 'Non-Profit Website.',
		badgeType: 'Non-Profit',
		badgeYear: '2023',
		category: 'Non-Profit Organisation · WordPress / Custom Theme',
		desc: 'A grassroots civil-society coalition website uniting traders, lawyers, students and transporters across AJK — demanding economic justice, true autonomy and an end to systemic exploitation.',
		tags: ['WordPress', 'Custom Theme', 'ACF/CPT', 'PHP'],
		liveUrl: '#',
		githubUrl: 'https://github.com/Sohaib-Ishaque/',
		heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254079/jkjaac-banner_aa9qtd.png',
		meta: [{
				label: 'Client',
				value: 'JKJAAC — Civil Society',
				accent: false
			},
			{
				label: 'Category',
				value: 'Non-Profit / Awareness Platform',
				accent: false
			},
			{
				label: 'Status',
				value: '✓ Live & Active',
				accent: true
			},
			{
				label: 'Timeline',
				value: '6 Weeks',
				accent: false
			},
			{
				label: 'Role',
				value: 'Full Stack Developer',
				accent: false
			},
			{
				label: 'Tech Stack',
				tags: ['WordPress', 'PHP', 'ACF', 'CPT', 'MySQL', 'CF7']
			},
		],
		stats: [{
				num: '6',
				suffix: 'wk',
				label: 'Delivery Time'
			},
			{
				num: '12',
				suffix: '+',
				label: 'Custom Modules'
			},
			{
				num: '98',
				suffix: '',
				label: 'Perf Score'
			},
			{
				num: '100',
				suffix: '%',
				label: 'Client Satisfaction'
			},
		],
		screenshots: [{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254079/jkjaac-banner_aa9qtd.png',
				label: 'JKJAAC Home Page'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254079/jkjaac-banner_aa9qtd.png',
				label: 'Campaigns & Demands'
			},
			{
				src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254079/jkjaac-banner_aa9qtd.png',
				label: 'News & Press Releases'
			},
		],
		overviewParagraphs: [
			'JKJAAC (Jammu & Kashmir Joint Awami Action Committee) needed a robust digital platform to amplify their grassroots movement, coordinate protests and disseminate news to hundreds of thousands of supporters across Azad Jammu & Kashmir and beyond.',
			'The challenge was building a scalable, content-heavy CMS-driven website that could handle high traffic spikes during protests and breaking news — while remaining easily manageable by non-technical committee members.',
			'I delivered a fully custom WordPress solution with bespoke theme development, advanced ACF-powered content types and a modular plugin architecture — giving the committee complete editorial control without touching a single line of code.',
		],
		features: [{
				icon: 'grid',
				title: 'Custom WordPress Theme',
				desc: 'Built from scratch with fully modular template parts, zero page-builder dependencies and pixel-perfect design.'
			},
			{
				icon: 'activity',
				title: 'ACF + Custom Post Types',
				desc: 'News, Press Releases, Events and Demands managed via ACF with custom taxonomies and archive pages.'
			},
			{
				icon: 'code',
				title: 'Custom Shortcode System',
				desc: 'Reusable shortcodes for demand lists, signatories, protest counts and call-to-action blocks.'
			},
			{
				icon: 'zap',
				title: 'Performance Optimised',
				desc: 'Lazy loading, critical CSS inlining, server caching and Cloudflare CDN achieving 98 Lighthouse score.'
			},
			{
				icon: 'monitor',
				title: 'Multilingual Ready',
				desc: 'Structured for WPML with Urdu/English content switching for a diverse audience.'
			},
			{
				icon: 'shield',
				title: 'Secure Admin',
				desc: 'Role-based editorial access for committee volunteers with audit logging for all content changes.'
			},
		],
		techStack: [{
				abbr: 'WP',
				name: 'WordPress 6',
				role: 'CMS / Core'
			},
			{
				abbr: 'PHP',
				name: 'PHP 8.1',
				role: 'Backend Logic'
			},
			{
				abbr: 'ACF',
				name: 'Advanced CF',
				role: 'Content Fields'
			},
			{
				abbr: 'SQL',
				name: 'MySQL',
				role: 'Database'
			},
			{
				abbr: 'JS',
				name: 'JavaScript',
				role: 'Interactivity'
			},
			{
				abbr: 'CSS',
				name: 'CSS3 / SASS',
				role: 'Styling'
			},
			{
				abbr: 'CPT',
				name: 'Custom Post Types',
				role: 'Architecture'
			},
			{
				abbr: 'CF',
				name: 'Cloudflare',
				role: 'CDN & Security'
			},
		],
		timeline: [{
				phase: 'Phase 01',
				heading: 'Discovery & Architecture',
				text: 'Gathered requirements from committee stakeholders, mapped content types and architected the WordPress data model — CPTs, taxonomies, relationships and ACF field groups.'
			},
			{
				phase: 'Phase 02',
				heading: 'Theme Development',
				text: 'Built a bespoke WordPress child theme from a custom starter, implementing the full Figma design in PHP templates with reusable template parts and hooks.'
			},
			{
				phase: 'Phase 03',
				heading: 'Plugin & Shortcode Layer',
				text: 'Developed a custom mu-plugin registering all CPTs, taxonomies, shortcodes and AJAX handlers — keeping logic separate from presentation and fully upgrade-safe.'
			},
			{
				phase: 'Phase 04',
				heading: 'Optimisation & Launch',
				text: 'Implemented object caching, image lazy-loading, critical CSS delivery and Cloudflare rules. Load-tested before a coordinated launch timed with a major protest event.'
			},
		],
		outcomes: [{
				icon: 'activity',
				title: 'Challenge — Traffic Spikes',
				desc: 'Site had to survive viral sharing during protests. Solved with Cloudflare caching rules serving cached HTML on high-traffic pages.'
			},
			{
				icon: 'check-sq',
				title: 'Outcome — Non-Technical Editors',
				desc: 'Full Gutenberg + ACF admin experience allows committee volunteers to publish news and events independently — zero developer involvement needed.'
			},
			{
				icon: 'users',
				title: 'Outcome — Reach',
				desc: 'Website became the primary digital hub, driving coordinated action across 12+ districts and reaching 50,000+ unique visitors within the first month.'
			},
			{
				icon: 'shield',
				title: 'Outcome — Performance',
				desc: 'Achieved Lighthouse scores of 98 (Performance), 100 (SEO) and 96 (Accessibility) — significantly above the non-profit sector average.'
			},
		],
		template: 'v2',
		prevProject: {
			id: 'kf-movement',
			name: 'KF Movement',
			cat: 'Non-Profit · WordPress'
		},
		nextProject: null,
	},
	'win10-calculator': {
	id: 'win10-calculator',
	num: '11',
	name: 'Windows 10 Calculator Web',
	subtitle: 'Interactive Web Application.',
	badgeType: 'Web Application',
	badgeYear: '2023',
	category: 'Interactive Web Application · JavaScript / HTML / CSS',
	desc: 'A pixel-perfect replica of the Windows 10 Calculator built with vanilla JavaScript, HTML5, and CSS3. Features standard and scientific modes, keyboard support, history log, memory functions, and responsive design — all powered by JSON for data-driven operations.',
	tags: ['JavaScript', 'HTML5', 'CSS3', 'JSON', 'Responsive'],
	liveUrl: '#',
	githubUrl: 'https://github.com/Sohaib-Ishaque/',
	heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254094/win-10-calculator-banner_ecjera.png',
	meta: [{
			label: 'Client',
			value: 'Personal Project',
			accent: false
		},
		{
			label: 'Category',
			value: 'Web Application',
			accent: false
		},
		{
			label: 'Status',
			value: '✓ Live & Active',
			accent: true
		},
		{
			label: 'Timeline',
			value: '3 Weeks',
			accent: false
		},
		{
			label: 'Role',
			value: 'Frontend Developer',
			accent: false
		},
		{
			label: 'Tech Stack',
			tags: ['JavaScript', 'HTML5', 'CSS3', 'JSON']
		},
	],
	stats: [{
			num: '3',
			suffix: 'wk',
			label: 'Delivery Time'
		},
		{
			num: '2',
			suffix: '',
			label: 'Modes (Standard/Scientific)'
		},
		{
			num: '100',
			suffix: '%',
			label: 'UI Accuracy'
		},
		{
			num: '98',
			suffix: '',
			label: 'Perf Score'
		},
	],
	screenshots: [{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254094/win-10-calculator-banner_ecjera.png',
			label: 'Calculator Interface'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254094/win-10-calculator-banner_ecjera.png',
			label: 'Scientific Mode'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254094/win-10-calculator-banner_ecjera.png',
			label: 'History Panel'
		},
	],
	overviewParagraphs: [
		'A faithful recreation of the Windows 10 Calculator app using pure web technologies. The goal was to match every visual detail and interaction behavior of the original — from button animations to keyboard shortcuts.',
		'The app features standard and scientific modes, persistent calculation history, memory functions (M+, M-, MC, MR), keyboard input support, and a fully responsive design that adapts to any screen size.',
		'All calculations and state management are driven by JSON data structures, making the logic clean, maintainable, and easily extensible for future features.',
	],
	features: [{
			icon: 'grid',
			title: 'Standard & Scientific Modes',
			desc: 'Toggle between basic arithmetic and advanced scientific functions with trigonometric and logarithmic operations.'
		},
		{
			icon: 'activity',
			title: 'History Log',
			desc: 'Tracks all calculations with timestamp and allows users to revisit or reuse previous results.'
		},
		{
			icon: 'zap',
			title: 'Keyboard Support',
			desc: 'Full keyboard mapping allows users to type calculations using physical keyboard shortcuts.'
		},
		{
			icon: 'database',
			title: 'Memory Functions',
			desc: 'Store, recall, add, and clear memory values — just like the original Windows calculator.'
		},
		{
			icon: 'monitor',
			title: 'Responsive Design',
			desc: 'Adapts seamlessly from desktop to mobile with touch-optimized button sizing and layout.'
		},
		{
			icon: 'code',
			title: 'JSON-Powered Logic',
			desc: 'All operations and state management driven by JSON for clean, maintainable code architecture.'
		},
	],
	techStack: [{
			abbr: 'JS',
			name: 'JavaScript',
			role: 'Core Logic'
		},
		{
			abbr: 'HTML',
			name: 'HTML5',
			role: 'Structure'
		},
		{
			abbr: 'CSS',
			name: 'CSS3',
			role: 'Styling'
		},
		{
			abbr: 'JSON',
			name: 'JSON',
			role: 'Data & State'
		},
	],
	timeline: [{
			phase: 'Phase 01',
			heading: 'UI Design & Layout',
			text: 'Recreated the Windows 10 calculator UI pixel-perfect using HTML and CSS grid/flexbox layouts.'
		},
		{
			phase: 'Phase 02',
			heading: 'JavaScript Logic',
			text: 'Implemented all arithmetic operations, memory functions, and mode switching with JavaScript.'
		},
		{
			phase: 'Phase 03',
			heading: 'Keyboard Integration',
			text: 'Mapped physical keyboard keys to calculator functions for desktop power users.'
		},
		{
			phase: 'Phase 04',
			heading: 'Testing & Optimisation',
			text: 'Cross-browser testing, performance optimisation, and responsive design refinement for mobile.'
		},
	],
	outcomes: [{
			icon: 'activity',
			title: 'Challenge — UI Accuracy',
			desc: 'Achieved 100% visual parity with Windows 10 calculator through meticulous CSS styling and exact sizing.'
		},
		{
			icon: 'check-sq',
			title: 'Outcome — Performance',
			desc: '98 Lighthouse performance score achieved through vanilla JS and optimised CSS delivery.'
		},
		{
			icon: 'users',
			title: 'Outcome — User Experience',
			desc: 'Seamless transition for Windows users with identical keyboard shortcuts and interaction patterns.'
		},
		{
			icon: 'shield',
			title: 'Outcome — Maintainability',
			desc: 'JSON-driven architecture makes adding new functions or modes straightforward and bug-free.'
		},
	],
	template: 'v2',
	prevProject: {
		id: 'jkjaac',
		name: 'JKJAAC',
		cat: 'Non-Profit · WordPress'
	},
	nextProject: {
		id: 'ask-whitny',
		name: 'Ask Whitny',
		cat: 'WordPress · Custom Development'
	},
},

'ask-whitny': {
	id: 'ask-whitny',
	num: '12',
	name: 'Ask Whitny',
	subtitle: 'Custom WordPress Platform.',
	badgeType: 'WordPress Platform',
	badgeYear: '2023',
	category: 'Custom WordPress Platform · ACF / CPT / Page Builders',
	desc: 'A fully customized WordPress solution built with page builders, custom post types, and Advanced Custom Fields. Features tailored user experiences, dynamic content management, custom templates, and seamless integration of third-party services for enhanced functionality.',
	tags: ['WordPress', 'ACF', 'Custom Post Types', 'Page Builders', 'Custom Development'],
	liveUrl: '#',
	githubUrl: 'https://github.com/Sohaib-Ishaque/',
	heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254070/ask-whitny-banner_limbby.png',
	meta: [{
			label: 'Client',
			value: 'Ask Whitny',
			accent: false
		},
		{
			label: 'Category',
			value: 'Custom WordPress Development',
			accent: false
		},
		{
			label: 'Status',
			value: '✓ Live & Active',
			accent: true
		},
		{
			label: 'Timeline',
			value: '5 Weeks',
			accent: false
		},
		{
			label: 'Role',
			value: 'WordPress Developer',
			accent: false
		},
		{
			label: 'Tech Stack',
			tags: ['WordPress', 'ACF', 'CPT', 'Page Builders', 'PHP']
		},
	],
	stats: [{
			num: '5',
			suffix: 'wk',
			label: 'Delivery Time'
		},
		{
			num: '15',
			suffix: '+',
			label: 'Custom Templates'
		},
		{
			num: '100',
			suffix: '%',
			label: 'Client Satisfaction'
		},
		{
			num: '97',
			suffix: '',
			label: 'Perf Score'
		},
	],
	screenshots: [{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254070/ask-whitny-banner_limbby.png',
			label: 'Home Page'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254070/ask-whitny-banner_limbby.png',
			label: 'Custom Templates'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254070/ask-whitny-banner_limbby.png',
			label: 'Admin Panel'
		},
	],
	overviewParagraphs: [
		'Ask Whitny is a fully customized WordPress platform built to deliver a unique user experience with tailored content management capabilities. The project leveraged page builders, custom post types, and Advanced Custom Fields to create a flexible, content-rich website.',
		'The platform features custom templates designed to match the brand identity, dynamic content management through ACF, and seamless integration with third-party services to enhance functionality and user engagement.',
		'With a focus on maintainability and ease of use, the WordPress admin interface was streamlined to allow non-technical staff to manage all content independently, reducing ongoing developer dependency.',
	],
	features: [{
			icon: 'grid',
			title: 'Custom Post Types',
			desc: 'Registered CPTs for all content types with custom taxonomies for organised content structure.'
		},
		{
			icon: 'code',
			title: 'Advanced Custom Fields',
			desc: 'Comprehensive ACF field groups for flexible content management and custom data entry.'
		},
		{
			icon: 'zap',
			title: 'Page Builder Integration',
			desc: 'Custom page builder layouts with reusable components and drag-and-drop editing.'
		},
		{
			icon: 'activity',
			title: 'Custom Templates',
			desc: 'Bespoke WordPress templates with conditional logic and dynamic content display.'
		},
		{
			icon: 'monitor',
			title: 'Responsive Design',
			desc: 'Fully responsive across all devices with mobile-first approach and touch optimisation.'
		},
		{
			icon: 'users',
			title: 'Third-Party Integrations',
			desc: 'Seamless integration with third-party services for enhanced platform functionality.'
		},
	],
	techStack: [{
			abbr: 'WP',
			name: 'WordPress 6',
			role: 'CMS / Core'
		},
		{
			abbr: 'PHP',
			name: 'PHP 8',
			role: 'Backend Logic'
		},
		{
			abbr: 'ACF',
			name: 'ACF Pro',
			role: 'Content Fields'
		},
		{
			abbr: 'CPT',
			name: 'CPT UI',
			role: 'Content Types'
		},
		{
			abbr: 'JS',
			name: 'JavaScript',
			role: 'Interactivity'
		},
		{
			abbr: 'CSS',
			name: 'CSS3',
			role: 'Styling'
		},
	],
	timeline: [{
			phase: 'Phase 01',
			heading: 'Discovery & Planning',
			text: 'Gathered requirements, mapped content architecture, and designed the WordPress data model with ACF field groups.'
		},
		{
			phase: 'Phase 02',
			heading: 'Theme Development',
			text: 'Built custom WordPress templates with page builder integration and responsive design implementation.'
		},
		{
			phase: 'Phase 03',
			heading: 'Plugin & CPT Setup',
			text: 'Registered custom post types, taxonomies, and developed custom functionality for enhanced user experience.'
		},
		{
			phase: 'Phase 04',
			heading: 'Testing & Launch',
			text: 'UAT with client, performance optimisation, and seamless deployment with staff training.'
		},
	],
	outcomes: [{
			icon: 'activity',
			title: 'Challenge — Content Flexibility',
			desc: 'Required dynamic content types that non-technical staff could manage easily. Solved with ACF and custom meta boxes.'
		},
		{
			icon: 'check-sq',
			title: 'Outcome — Editorial Independence',
			desc: 'Non-technical staff manage 100% of content updates independently — zero developer involvement needed.'
		},
		{
			icon: 'users',
			title: 'Outcome — User Engagement',
			desc: 'Enhanced user experience through custom templates and third-party integrations increased engagement metrics.'
		},
		{
			icon: 'shield',
			title: 'Outcome — Performance',
			desc: 'Achieved 97 Lighthouse performance score through caching, CDN delivery, and optimised asset loading.'
		},
	],
	template: 'v2',
	prevProject: {
		id: 'win10-calculator',
		name: 'Windows 10 Calculator',
		cat: 'Web App · JavaScript'
	},
	nextProject: {
		id: 'chat-app',
		name: 'Chat Application',
		cat: 'Web App · PHP / MySQL'
	},
},

'chat-app': {
	id: 'chat-app',
	num: '13',
	name: 'Chat Application',
	subtitle: 'Real-time Messaging Platform.',
	badgeType: 'Web Application',
	badgeYear: '2023',
	category: 'Real-time Messaging Platform · PHP / MySQL',
	desc: 'A secure, real-time chat application built with PHP and MySQL featuring multi-user support, group chat functionality, and advanced security protocols. Utilizes JSON for data exchange, RESTful API architecture, and comprehensive user management with authentication and authorization layers.',
	tags: ['PHP', 'MySQL', 'phpMyAdmin', 'JSON', 'REST API', 'Security'],
	liveUrl: '#',
	githubUrl: 'https://github.com/Sohaib-Ishaque/',
	heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254076/chat-app-banner_ejysiu.png',
	meta: [{
			label: 'Client',
			value: 'Personal Project',
			accent: false
		},
		{
			label: 'Category',
			value: 'Real-time Messaging',
			accent: false
		},
		{
			label: 'Status',
			value: '✓ Live & Active',
			accent: true
		},
		{
			label: 'Timeline',
			value: '6 Weeks',
			accent: false
		},
		{
			label: 'Role',
			value: 'Full Stack Developer',
			accent: false
		},
		{
			label: 'Tech Stack',
			tags: ['PHP', 'MySQL', 'phpMyAdmin', 'JSON', 'REST API']
		},
	],
	stats: [{
			num: '6',
			suffix: 'wk',
			label: 'Delivery Time'
		},
		{
			num: '50',
			suffix: '+',
			label: 'Concurrent Users'
		},
		{
			num: '100',
			suffix: '%',
			label: 'Encrypted Messages'
		},
		{
			num: '99.9',
			suffix: '%',
			label: 'Uptime'
		},
	],
	screenshots: [{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254076/chat-app-banner_ejysiu.png',
			label: 'Chat Interface'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254076/chat-app-banner_ejysiu.png',
			label: 'Group Chat'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254076/chat-app-banner_ejysiu.png',
			label: 'Admin Panel'
		},
	],
	overviewParagraphs: [
		'A secure, real-time chat platform built with PHP and MySQL, designed for multi-user communication with group chat capabilities. The application handles concurrent users with efficient database queries and AJAX polling for message delivery.',
		'Advanced security features include encrypted message storage, session-based authentication, and input sanitization to prevent XSS and SQL injection attacks. User management includes role-based permissions for admin, moderators, and regular users.',
		'JSON is used for data exchange between client and server, with a RESTful API architecture allowing extensibility for future mobile app integration. The system supports private messaging, group chats, and file sharing capabilities.',
	],
	features: [{
			icon: 'shield',
			title: 'Advanced Security',
			desc: 'Encrypted messages, session-based auth, XSS protection, and SQL injection prevention.'
		},
		{
			icon: 'users',
			title: 'Multi-User & Groups',
			desc: 'Support for multiple users, group chats, private messaging, and user role management.'
		},
		{
			icon: 'code',
			title: 'RESTful API',
			desc: 'JSON-based REST API for data exchange with extensibility for mobile app integration.'
		},
		{
			icon: 'database',
			title: 'MySQL Database',
			desc: 'Optimised database schema with indexing for fast message retrieval and concurrent user support.'
		},
		{
			icon: 'zap',
			title: 'Real-time Polling',
			desc: 'Efficient AJAX polling and server-side event handling for near real-time message delivery.'
		},
		{
			icon: 'monitor',
			title: 'Responsive UI',
			desc: 'Mobile-first chat interface with intuitive design for all screen sizes and devices.'
		},
	],
	techStack: [{
			abbr: 'PHP',
			name: 'PHP 8',
			role: 'Backend Logic'
		},
		{
			abbr: 'SQL',
			name: 'MySQL',
			role: 'Database'
		},
		{
			abbr: 'PMA',
			name: 'phpMyAdmin',
			role: 'DB Administration'
		},
		{
			abbr: 'JSON',
			name: 'JSON',
			role: 'Data Exchange'
		},
		{
			abbr: 'JS',
			name: 'JavaScript',
			role: 'Frontend Interactivity'
		},
		{
			abbr: 'HTML',
			name: 'HTML5',
			role: 'Structure'
		},
		{
			abbr: 'CSS',
			name: 'CSS3',
			role: 'Styling'
		},
	],
	timeline: [{
			phase: 'Phase 01',
			heading: 'Architecture Design',
			text: 'Designed the database schema, REST API endpoints, and real-time communication architecture.'
		},
		{
			phase: 'Phase 02',
			heading: 'Backend Development',
			text: 'Built PHP backend with authentication, message processing, and group management features.'
		},
		{
			phase: 'Phase 03',
			heading: 'Frontend Interface',
			text: 'Developed the chat interface with real-time message updates and responsive design.'
		},
		{
			phase: 'Phase 04',
			heading: 'Security & Testing',
			text: 'Implemented encryption, XSS protection, and security auditing with load testing.'
		},
	],
	outcomes: [{
			icon: 'activity',
			title: 'Challenge — Real-time Performance',
			desc: 'Achieved near real-time message delivery through efficient AJAX polling and server optimisation.'
		},
		{
			icon: 'check-sq',
			title: 'Outcome — Security',
			desc: 'Successfully implemented encrypted messaging with zero security incidents post-launch.'
		},
		{
			icon: 'users',
			title: 'Outcome — Scalability',
			desc: 'Supports 50+ concurrent users with optimised database queries and caching strategies.'
		},
		{
			icon: 'shield',
			title: 'Outcome — Reliability',
			desc: '99.9% uptime achieved with robust error handling and server-side validation.'
		},
	],
	template: 'v2',
	prevProject: {
		id: 'ask-whitny',
		name: 'Ask Whitny',
		cat: 'WordPress · Custom Development'
	},
	nextProject: {
		id: 'espn-clone',
		name: 'ESPN Cricinfo Clone',
		cat: 'Web App · PHP / API'
	},
},

'espn-clone': {
	id: 'espn-clone',
	num: '14',
	name: 'ESPN Cricinfo Clone',
	subtitle: 'Sports Data Aggregation Platform.',
	badgeType: 'Web Application',
	badgeYear: '2023',
	category: 'Sports Data Aggregation · PHP / API / JavaScript',
	desc: 'A comprehensive cricket news and score platform replicating ESPN Cricinfo\'s core features. Built with PHP and JavaScript, leveraging external APIs for live match data, player statistics, and news feeds. Features JSON data handling, dynamic content rendering, database-driven user preferences, and responsive design for seamless mobile and desktop experience.',
	tags: ['PHP', 'JavaScript', 'HTML5', 'JSON', 'REST API', 'Database'],
	liveUrl: '#',
	githubUrl: 'https://github.com/Sohaib-Ishaque/',
	heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254083/espn-clone-banner_arpquf.png',
	meta: [{
			label: 'Client',
			value: 'Personal Project',
			accent: false
		},
		{
			label: 'Category',
			value: 'Sports Data Platform',
			accent: false
		},
		{
			label: 'Status',
			value: '✓ Live & Active',
			accent: true
		},
		{
			label: 'Timeline',
			value: '6 Weeks',
			accent: false
		},
		{
			label: 'Role',
			value: 'Full Stack Developer',
			accent: false
		},
		{
			label: 'Tech Stack',
			tags: ['PHP', 'JavaScript', 'REST API', 'JSON', 'MySQL']
		},
	],
	stats: [{
			num: '6',
			suffix: 'wk',
			label: 'Delivery Time'
		},
		{
			num: '5',
			suffix: '+',
			label: 'API Integrations'
		},
		{
			num: '1,000',
			suffix: '+',
			label: 'Data Points Fetched'
		},
		{
			num: '95',
			suffix: '',
			label: 'Perf Score'
		},
	],
	screenshots: [{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254083/espn-clone-banner_arpquf.png',
			label: 'Home Page'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254083/espn-clone-banner_arpquf.png',
			label: 'Live Match Scores'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254083/espn-clone-banner_arpquf.png',
			label: 'Player Statistics'
		},
	],
	overviewParagraphs: [
		'A comprehensive cricket platform that aggregates live scores, match data, player statistics, and news from multiple external APIs. The project replicates the core experience of ESPN Cricinfo, providing fans with a one-stop destination for cricket information.',
		'The platform uses PHP for backend processing, JavaScript for dynamic frontend interactions, and JSON for data exchange between API integrations. All data is cached and stored in a MySQL database for fast retrieval and offline access to historical data.',
		'User preferences are database-driven, allowing personalised content feeds, favourite teams/players, and custom notifications. The responsive design ensures a seamless experience across desktop, tablet, and mobile devices.',
	],
	features: [{
			icon: 'activity',
			title: 'Live Match Data',
			desc: 'Real-time scores, ball-by-ball updates, and match summaries from external sports APIs.'
		},
		{
			icon: 'users',
			title: 'Player Statistics',
			desc: 'Comprehensive player profiles with career stats, records, and performance metrics.'
		},
		{
			icon: 'code',
			title: 'API Integration',
			desc: 'Multiple third-party API integrations for live data, news, and player statistics.'
		},
		{
			icon: 'database',
			title: 'Data Caching',
			desc: 'JSON data caching and MySQL storage for fast retrieval and historical data access.'
		},
		{
			icon: 'zap',
			title: 'Dynamic Content',
			desc: 'JavaScript-powered content rendering with real-time updates and interactive elements.'
		},
		{
			icon: 'monitor',
			title: 'Responsive Design',
			desc: 'Mobile-first approach with adaptive layouts for all screen sizes and devices.'
		},
	],
	techStack: [{
			abbr: 'PHP',
			name: 'PHP 8',
			role: 'Backend Logic'
		},
		{
			abbr: 'JS',
			name: 'JavaScript',
			role: 'Frontend Interactivity'
		},
		{
			abbr: 'HTML',
			name: 'HTML5',
			role: 'Structure'
		},
		{
			abbr: 'JSON',
			name: 'JSON',
			role: 'Data Exchange'
		},
		{
			abbr: 'API',
			name: 'REST APIs',
			role: 'External Data'
		},
		{
			abbr: 'SQL',
			name: 'MySQL',
			role: 'Database'
		},
	],
	timeline: [{
			phase: 'Phase 01',
			heading: 'API Research & Selection',
			text: 'Researched cricket APIs, evaluated data quality and rate limits, selected best-fit providers.'
		},
		{
			phase: 'Phase 02',
			heading: 'Backend & Data Layer',
			text: 'Built PHP API integration layer, data caching, and MySQL database schema for storage.'
		},
		{
			phase: 'Phase 03',
			heading: 'Frontend Development',
			text: 'Developed responsive interface with JavaScript for dynamic content and real-time updates.'
		},
		{
			phase: 'Phase 04',
			heading: 'Testing & Launch',
			text: 'Cross-browser testing, performance optimisation, and deployment with CDN caching.'
		},
	],
	outcomes: [{
			icon: 'activity',
			title: 'Challenge — API Rate Limits',
			desc: 'Implemented intelligent caching strategies to minimise API calls while keeping data fresh.'
		},
		{
			icon: 'check-sq',
			title: 'Outcome — Data Aggregation',
			desc: 'Successfully combined data from 5+ APIs into a unified, user-friendly cricket platform.'
		},
		{
			icon: 'users',
			title: 'Outcome — User Engagement',
			desc: 'Personalisation features increased user engagement with custom content feeds and notifications.'
		},
		{
			icon: 'shield',
			title: 'Outcome — Performance',
			desc: '95 Lighthouse performance score through efficient caching and optimised asset delivery.'
		},
	],
	template: 'v2',
	prevProject: {
		id: 'chat-app',
		name: 'Chat Application',
		cat: 'Web App · PHP / MySQL'
	},
	nextProject: {
		id: 'manii-gossips',
		name: 'Manii\'s Gossips',
		cat: 'Desktop App · C# / WinForms'
	},
},

'manii-gossips': {
	id: 'manii-gossips',
	num: '15',
	name: 'Manii\'s Gossips',
	subtitle: 'Windows Forms Desktop Application.',
	badgeType: 'Desktop Application',
	badgeYear: '2021',
	category: 'Desktop Application · C# / Windows Forms / .NET',
	desc: 'A feature-rich desktop application built with C# and Windows Forms in Visual Studio .NET. Powered by SQL Server database with comprehensive data management, and integrated Crystal Reports for professional reporting and analytics. Includes user-friendly interface, data validation, and seamless CRUD operations for efficient workflow management.',
	tags: ['C#', 'Windows Forms', '.NET', 'SQL Server', 'Crystal Reports', 'Visual Studio'],
	liveUrl: '#',
	githubUrl: 'https://github.com/Sohaib-Ishaque/',
	heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254084/banner-qoc_vwrmke.png',
	meta: [{
			label: 'Client',
			value: 'Internal / Business Client',
			accent: false
		},
		{
			label: 'Category',
			value: 'Desktop Application',
			accent: false
		},
		{
			label: 'Status',
			value: '✓ Deployed & In Use',
			accent: true
		},
		{
			label: 'Timeline',
			value: '5 Weeks',
			accent: false
		},
		{
			label: 'Role',
			value: 'Desktop Developer',
			accent: false
		},
		{
			label: 'Tech Stack',
			tags: ['C#', 'WinForms', '.NET', 'SQL Server', 'Crystal Reports']
		},
	],
	stats: [{
			num: '5',
			suffix: 'wk',
			label: 'Delivery Time'
		},
		{
			num: '50',
			suffix: '%',
			label: 'Time Saved on Tasks'
		},
		{
			num: '15',
			suffix: '+',
			label: 'Daily Users'
		},
		{
			num: '100',
			suffix: '%',
			label: 'Client Satisfaction'
		},
	],
	screenshots: [{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254084/banner-qoc_vwrmke.png',
			label: 'Dashboard Overview'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254084/banner-qoc_vwrmke.png',
			label: 'Data Management'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782254084/banner-qoc_vwrmke.png',
			label: 'Crystal Reports'
		},
	],
	overviewParagraphs: [
		'Manii\'s Gossips is a desktop application built with C# and Windows Forms, designed to streamline information management and workflow efficiency. The application provides comprehensive CRUD operations, data validation, and professional reporting capabilities.',
		'Powered by SQL Server, the application handles complex data relationships with optimised queries and stored procedures. Crystal Reports integration enables professional reporting and analytics for business decision-making.',
		'The user-friendly interface was designed with end-users in mind, featuring intuitive navigation, data validation at every step, and real-time feedback for all operations. The application has been successfully deployed with 15+ daily users.',
	],
	features: [{
			icon: 'shield',
			title: 'User Authentication',
			desc: 'Secure login with role-based access control and session management.'
		},
		{
			icon: 'database',
			title: 'SQL Server Integration',
			desc: 'Robust database with optimised queries, stored procedures, and data integrity.'
		},
		{
			icon: 'grid',
			title: 'CRUD Operations',
			desc: 'Complete create, read, update, delete functionality with data validation.'
		},
		{
			icon: 'activity',
			title: 'Crystal Reports',
			desc: 'Professional reporting with custom report generation and export options.'
		},
		{
			icon: 'zap',
			title: 'User-Friendly Interface',
			desc: 'Intuitive Windows Forms UI with data validation and real-time feedback.'
		},
		{
			icon: 'users',
			title: 'Multi-User Support',
			desc: 'Supports 15+ concurrent users with data consistency and integrity.'
		},
	],
	techStack: [{
			abbr: 'C#',
			name: 'C#',
			role: 'Language'
		},
		{
			abbr: 'WF',
			name: 'Windows Forms',
			role: 'UI Framework'
		},
		{
			abbr: '.NET',
			name: '.NET Framework 4.8',
			role: 'Platform'
		},
		{
			abbr: 'SQL',
			name: 'SQL Server',
			role: 'Database'
		},
		{
			abbr: 'CR',
			name: 'Crystal Reports',
			role: 'Reporting'
		},
		{
			abbr: 'VS',
			name: 'Visual Studio',
			role: 'IDE'
		},
	],
	timeline: [{
			phase: 'Phase 01',
			heading: 'Requirements Gathering',
			text: 'Identified user workflows, data requirements, and reporting needs through stakeholder interviews.'
		},
		{
			phase: 'Phase 02',
			heading: 'Database Design',
			text: 'Designed SQL Server schema with normalised tables and stored procedures for data integrity.'
		},
		{
			phase: 'Phase 03',
			heading: 'Application Build',
			text: 'Developed Windows Forms interface with complete CRUD functionality and data validation.'
		},
		{
			phase: 'Phase 04',
			heading: 'Reporting & Deployment',
			text: 'Integrated Crystal Reports, conducted UAT, and deployed with staff training.'
		},
	],
	outcomes: [{
			icon: 'activity',
			title: 'Challenge — Complex Reporting',
			desc: 'Required professional reporting with custom formats. Solved with Crystal Reports integration.'
		},
		{
			icon: 'check-sq',
			title: 'Outcome — Efficiency',
			desc: '50% time saved on daily tasks compared to previous manual/Excel-based workflows.'
		},
		{
			icon: 'users',
			title: 'Outcome — User Adoption',
			desc: '15+ daily users fully trained and independent within the first week of deployment.'
		},
		{
			icon: 'shield',
			title: 'Outcome — Reliability',
			desc: 'Zero downtime since deployment with robust error handling and data integrity checks.'
		},
	],
	template: 'v2',
	prevProject: {
		id: 'espn-clone',
		name: 'ESPN Cricinfo Clone',
		cat: 'Web App · PHP / API'
	},
	nextProject: {
		id: 'stock-management',
		name: 'Stock Management System',
		cat: 'Desktop App · C# / WinForms'
	},
},

'library-management': {
	id: 'library-management',
	num: '16',
	name: 'Library Management System',
	subtitle: 'Web-Based Library Management Platform.',
	badgeType: 'Web Application',
	badgeYear: '2022',
	category: 'Library Management · PHP / MySQL / REST API',
	desc: 'A complete library management solution built with PHP and MySQL database. Features include book cataloging, member management, issue/return tracking, fine calculation, and advanced search functionality. Utilizes phpMyAdmin for database administration, RESTful APIs for data operations, automated reporting system, and advanced transaction control for seamless library operations.',
	tags: ['PHP', 'MySQL', 'phpMyAdmin', 'REST API', 'Reports', 'Transaction Control'],
	liveUrl: '#',
	githubUrl: 'https://github.com/Sohaib-Ishaque/',
	heroImage: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782253974/my-library-banner_wznzbc.png',
	meta: [{
			label: 'Client',
			value: 'Educational Institution',
			accent: false
		},
		{
			label: 'Category',
			value: 'Library Management System',
			accent: false
		},
		{
			label: 'Status',
			value: '✓ Live & Active',
			accent: true
		},
		{
			label: 'Timeline',
			value: '6 Weeks',
			accent: false
		},
		{
			label: 'Role',
			value: 'Full Stack Developer',
			accent: false
		},
		{
			label: 'Tech Stack',
			tags: ['PHP', 'MySQL', 'phpMyAdmin', 'REST API', 'Reports']
		},
	],
	stats: [{
			num: '6',
			suffix: 'wk',
			label: 'Delivery Time'
		},
		{
			num: '5K',
			suffix: '+',
			label: 'Books Catalogued'
		},
		{
			num: '1K',
			suffix: '+',
			label: 'Active Members'
		},
		{
			num: '95',
			suffix: '%',
			label: 'Process Automation'
		},
	],
	screenshots: [{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782253974/my-library-banner_wznzbc.png',
			label: 'Dashboard Overview'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782253974/my-library-banner_wznzbc.png',
			label: 'Book Catalog'
		},
		{
			src: 'https://res.cloudinary.com/dpx3gst4q/image/upload/v1782253974/my-library-banner_wznzbc.png',
			label: 'Reports & Analytics'
		},
	],
	overviewParagraphs: [
		'A comprehensive library management system built with PHP and MySQL, designed to automate all aspects of library operations — from book cataloging to member management and transaction tracking.',
		'The system features advanced search capabilities, automated fine calculation for overdue books, and a complete transaction history for all library activities. phpMyAdmin provides easy database administration for staff.',
		'RESTful APIs power the data operations layer, enabling seamless integration with future modules. Automated reporting generates insights on circulation, popular books, member activity, and more.',
	],
	features: [{
			icon: 'grid',
			title: 'Book Cataloging',
			desc: 'Complete book management with author, publisher, ISBN, category, and multiple copies tracking.'
		},
		{
			icon: 'users',
			title: 'Member Management',
			desc: 'Student/staff registration, membership types, borrowing limits, and history tracking.'
		},
		{
			icon: 'activity',
			title: 'Issue/Return Tracking',
			desc: 'Complete transaction management with due dates, reminders, and automated fine calculation.'
		},
		{
			icon: 'database',
			title: 'MySQL Database',
			desc: 'Optimised relational schema with indexing for fast search and transaction processing.'
		},
		{
			icon: 'code',
			title: 'RESTful APIs',
			desc: 'JSON-based APIs for data operations with extensibility for mobile/desktop clients.'
		},
		{
			icon: 'grid',
			title: 'Automated Reports',
			desc: 'Circulation reports, popular books, member activity, and inventory status reports.'
		},
	],
	techStack: [{
			abbr: 'PHP',
			name: 'PHP 8',
			role: 'Backend Logic'
		},
		{
			abbr: 'SQL',
			name: 'MySQL',
			role: 'Database'
		},
		{
			abbr: 'PMA',
			name: 'phpMyAdmin',
			role: 'DB Administration'
		},
		{
			abbr: 'API',
			name: 'REST API',
			role: 'Data Operations'
		},
		{
			abbr: 'JS',
			name: 'JavaScript',
			role: 'Interactivity'
		},
		{
			abbr: 'HTML',
			name: 'HTML5 / CSS3',
			role: 'UI / Styling'
		},
	],
	timeline: [{
			phase: 'Phase 01',
			heading: 'Requirements & Schema',
			text: 'Mapped library workflows, designed database schema, and defined API endpoints for data operations.'
		},
		{
			phase: 'Phase 02',
			heading: 'Backend Development',
			text: 'Built PHP backend with CRUD operations for books, members, transactions, and fine calculation.'
		},
		{
			phase: 'Phase 03',
			heading: 'Frontend Interface',
			text: 'Developed responsive web interface with search, catalog browsing, and member dashboard.'
		},
		{
			phase: 'Phase 04',
			heading: 'Reporting & Launch',
			text: 'Implemented automated reports, conducted UAT with library staff, and deployed with training.'
		},
	],
	outcomes: [{
			icon: 'activity',
			title: 'Challenge — Fine Calculation',
			desc: 'Complex fine rules and exemptions. Solved with configurable fine settings and automated calculation logic.'
		},
		{
			icon: 'check-sq',
			title: 'Outcome — Automation',
			desc: '95% of library processes automated, reducing staff workload from manual tracking to digital management.'
		},
		{
			icon: 'users',
			title: 'Outcome — Adoption',
			desc: '1,000+ active members and 5,000+ books catalogued within the first 3 months of deployment.'
		},
		{
			icon: 'shield',
			title: 'Outcome — Accuracy',
			desc: 'Eliminated manual errors in book tracking and fine calculation with automated validation rules.'
		},
	],
	template: 'v2',
	prevProject: {
		id: 'manii-gossips',
		name: 'Manii\'s Gossips',
		cat: 'Desktop App · C# / WinForms'
	},
	nextProject: null,
},

};

const _ICONS = {
	activity: `<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`,
	'check-sq': `<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>`,
	grid: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>`,
	shield: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
	monitor: `<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>`,
	users: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
	code: `<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>`,
	zap: `<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>`,
	database: `<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>`,
	clock: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
	briefcase: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
	calendar: `<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
	user: `<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
	flag: `<path d="M4 22V4"/><path d="M4 4h13l-2 4 2 4H4"/>`,
	globe: `<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
	search: `<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>`,
	layers: `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`,
	rocket: `<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 19 2c0 2.52-.6 6.7-4 10a22.35 22.35 0 0 1-3 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>`,
};

function _svg(key, size) {
	size = size || 20;
	return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${_ICONS[key] || ''}</svg>`;
}

const _PROCESS_ICONS = ['search', 'layers', 'code', 'check-sq', 'rocket'];

function _metaIcon(label) {
	const l = (label || '').toLowerCase();
	if (l.indexOf('client') > -1) return 'briefcase';
	if (l.indexOf('time') > -1 || l.indexOf('duration') > -1) return 'calendar';
	if (l.indexOf('role') > -1) return 'user';
	if (l.indexOf('status') > -1) return 'flag';
	if (l.indexOf('categor') > -1 || l.indexOf('industry') > -1) return 'globe';
	if (l.indexOf('team') > -1) return 'users';
	return 'grid';
}

function _templateUrl(projectId) {
	var p = window.Portfolio.PROJECTS[projectId];
	if (p && p.template === 'v2') return 'project-details.html';
	return 'project-details.html';
}


window.Portfolio.PROJECT_DETAILS = (function() {

	function populateHero(p) {
		document.title = `${p.name} — M Sohaib Ishaque`;
		const metaEl = document.querySelector('meta[name="description"]');
		if (metaEl) metaEl.setAttribute('content', `${p.name} — ${p.subtitle} | M Sohaib Ishaque Portfolio`);

		_set('pd-breadcrumb-name', p.name);
		_set('pd-badge-type', p.badgeType);
		_set('pd-badge-year', p.badgeYear);

		const titleEl = document.getElementById('pd-hero-title');
		if (titleEl) titleEl.innerHTML = `<span class="line">${p.name}</span><span class="line accent">${p.subtitle}</span>`;

		_set('pd-hero-desc', p.desc);

		const liveBtn = document.getElementById('pd-btn-live');
		if (liveBtn) liveBtn.href = p.liveUrl;
		const ghBtn = document.getElementById('pd-btn-github');
		if (ghBtn) ghBtn.href = p.githubUrl;

		const tagsWrap = document.getElementById('pd-hero-tags');
		if (tagsWrap) tagsWrap.innerHTML = (p.tags || []).map(t => `<span class="pd-hero-tag">${t}</span>`).join('');

		const heroStats = document.getElementById('pd-hero-stats');
		if (heroStats) heroStats.innerHTML = (p.stats || []).map(s => `
      <div class="pd-hero-stat">
        <span class="pd-hero-stat-num main-heading-font">${s.num}${s.suffix}</span>
        <span class="pd-hero-stat-label">${s.label}</span>
      </div>`).join('');
	}

	function populateMockup(p) {
		const img = document.getElementById('pd-mockup-img');
		if (img) {
			if (p.heroImage) {
				img.src = p.heroImage;
			} else {
				const shot = (p.screenshots && p.screenshots[0]) || {};
				img.src = shot.src || '';
			}
			img.alt = `${p.name} banner image`;
		}

		const urlEl = document.getElementById('pd-mockup-url');
		if (urlEl) urlEl.textContent = (p.liveUrl && p.liveUrl !== '#') ?
			p.liveUrl.replace(/^https?:\/\//, '') :
			`${p.id}.dev`;

		const stats = p.stats || [];
		if (stats[0]) {
			_set('pd-float-num-1', `${stats[0].num}${stats[0].suffix}`);
			_set('pd-float-label-1', stats[0].label);
		}
		if (stats[1]) {
			_set('pd-float-num-2', `${stats[1].num}${stats[1].suffix}`);
			_set('pd-float-label-2', stats[1].label);
		}
	}

	function populateMetaBar(p) {
		const bar = document.getElementById('pd-meta-bar-list');
		if (!bar) return;
		const items = (p.meta || []).filter(m => !m.tags);
		bar.innerHTML = items.map(m => `
      <div class="pd-meta-bar-item">
        <svg class="pd-meta-bar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">${_ICONS[_metaIcon(m.label)] || ''}</svg>
        <div class="pd-meta-bar-text">
          <span class="pd-meta-bar-label">${m.label}</span>
          <span class="pd-meta-bar-value${m.accent ? ' accent' : ''}">${m.value}</span>
        </div>
      </div>`).join('');
	}

	function populateOverview(p) {
		const paras = p.overviewParagraphs || [];
		_set('pd-ov-challenge', paras[0] || '');
		_set('pd-ov-solution', paras[1] || '');
		_set('pd-ov-approach', paras[2] || paras[paras.length - 1] || '');

		const goals = document.getElementById('pd-goals-list');
		if (goals) {
			goals.innerHTML = (p.features || []).slice(0, 5).map(f => `
        <li class="pd-goal-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">${_ICONS['check-sq']}</svg>
          <span>${f.title}</span>
        </li>`).join('');
		}
	}

	function populateKeyOutcomes(p) {
		const grid = document.getElementById('pd-key-outcomes-grid');
		if (!grid) return;
		grid.innerHTML = (p.stats || []).map(s => `
      <div class="pd-ko-stat reveal">
        <div class="pd-ko-num main-heading-font" data-target="${s.num}" data-suffix="${s.suffix}">0</div>
        <div class="pd-ko-label">${s.label}</div>
      </div>`).join('');

		const obs = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return;
				entry.target.querySelectorAll('[data-target]').forEach(el => {
					const raw = el.dataset.target;
					const target = parseFloat(raw);
					const suffix = el.dataset.suffix || '';
					if (isNaN(target)) {
						el.textContent = raw + suffix;
						return;
					}
					let cur = 0;
					const inc = target / (1800 / 16);
					const t = setInterval(() => {
						cur += inc;
						if (cur >= target) {
							cur = target;
							clearInterval(t);
						}
						el.textContent = (Number.isInteger(target) ? Math.floor(cur) : cur.toFixed(1)) + suffix;
					}, 16);
				});
				obs.unobserve(entry.target);
			});
		}, {
			threshold: 0.4
		});
		obs.observe(grid);
	}

	function populateFeatures(p) {
		const grid = document.getElementById('pd-features-grid');
		if (!grid) return;
		grid.innerHTML = (p.features || []).map(f => `
      <div class="pd-feat-card reveal">
        <div class="pd-feat-icon-wrap">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${_ICONS[f.icon] || ''}</svg>
        </div>
        <h3 class="pd-feat-title">${f.title}</h3>
        <p class="pd-feat-desc">${f.desc}</p>
      </div>`).join('');
	}

	function populateTech(p) {
		const grid = document.getElementById('pd-tech-grid');
		if (!grid) return;
		grid.innerHTML = (p.techStack || []).map(t => `
      <div class="pd-tech-tile reveal">
        <div class="pd-tech-tile-icon">${t.abbr}</div>
        <div class="pd-tech-tile-name">${t.name}</div>
        <div class="pd-tech-tile-role">${t.role}</div>
      </div>`).join('');
	}

	function populateScreenshots(p) {
		const shots = p.screenshots || [];
		const first = shots[0] || {};
		const mainImg = document.getElementById('mainScreenshotImg');
		const mainLabel = document.getElementById('mainScreenshotLabel');
		if (mainImg) {
			mainImg.src = first.src || '';
			mainImg.alt = first.label || '';
		}
		if (mainLabel) mainLabel.textContent = first.label || '';

		const counter = document.getElementById('pd-gallery-counter');
		if (counter) counter.textContent = `01 / ${String(shots.length).padStart(2, '0')}`;

		const strip = document.getElementById('pd-screenshot-strip');
		if (!strip) return;
		strip.innerHTML = shots.map((s, i) => `
      <button class="pd-screenshot-thumb${i === 0 ? ' active' : ''} reveal"
        data-src="${s.src}" data-label="${s.label}" data-index="${i + 1}"
        aria-label="View: ${s.label}" role="listitem">
        <img src="${s.src}" alt="${s.label}" loading="lazy" />
        <span class="pd-thumb-label">${s.label}</span>
      </button>`).join('');
	}

	function populateResultsOutcomes(p) {
		const list = document.getElementById('pd-outcomes-list');
		if (!list) return;
		list.innerHTML = (p.outcomes || []).map(o => `
      <div class="pd-outcome-card reveal">
        <svg class="pd-outcome-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${_ICONS[o.icon] || ''}</svg>
        <div class="pd-outcome-text">
          <strong>${o.title}</strong>
          <p>${o.desc}</p>
        </div>
      </div>`).join('');
	}

	function populateTimeline(p) {
		const tl = document.getElementById('pd-timeline');
		if (!tl) return;
		tl.innerHTML = (p.timeline || []).map((item, i) => `
      <div class="pd-tl-item">
        <div class="pd-tl-node" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${_ICONS[_PROCESS_ICONS[i % _PROCESS_ICONS.length]] || ''}</svg>
        </div>
        <div class="pd-tl-phase">${item.phase}</div>
        <h3 class="pd-tl-heading main-heading-font">${item.heading}</h3>
        <p class="pd-tl-text">${item.text}</p>
      </div>`).join('');
	}
	function populateNav(p) {
		const grid = document.getElementById('pd-nav-grid');
		if (!grid) return;

		const prevUrl = p.prevProject ? _templateUrl(p.prevProject.id) : null;
		const nextUrl = p.nextProject ? _templateUrl(p.nextProject.id) : null;

		const prevBtn = p.prevProject ? `
      <a href="${prevUrl}?id=${p.prevProject.id}" class="pd-nav-card pd-nav-card--prev reveal-left" aria-label="Previous: ${p.prevProject.name}">
        <div class="pd-nav-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div>
          <div class="pd-nav-dir">Previous</div>
          <div class="pd-nav-name main-heading-font">${p.prevProject.name}</div>
          <div class="pd-nav-cat">${p.prevProject.cat}</div>
        </div>
      </a>` : `<div></div>`;

		const nextBtn = p.nextProject ? `
      <a href="${nextUrl}?id=${p.nextProject.id}" class="pd-nav-card pd-nav-card--next reveal-right" aria-label="Next: ${p.nextProject.name}">
        <div class="pd-nav-arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div>
          <div class="pd-nav-dir">Next</div>
          <div class="pd-nav-name main-heading-font">${p.nextProject.name}</div>
          <div class="pd-nav-cat">${p.nextProject.cat}</div>
        </div>
      </a>` : `<div></div>`;

		grid.innerHTML = prevBtn + nextBtn;
	}

	function _set(id, text) {
		const el = document.getElementById(id);
		if (el) el.textContent = text;
	}

	function init() {
		const page = window.Portfolio.UTILS.getActivePage();
		if (page !== 'project-details') return;

		const params = new URLSearchParams(window.location.search);
		const projectId = params.get('id');
		const project = window.Portfolio.PROJECTS[projectId];

		if (!project) {
			console.warn('[project-data.js] Unknown project id:', projectId, '— redirecting.');
			window.location.href = 'projects.html';
			return;
		}

		populateHero(project);
		populateMockup(project);
		populateMetaBar(project);
		populateOverview(project);
		populateKeyOutcomes(project);
		populateFeatures(project);
		populateTech(project);
		populateScreenshots(project);
		populateResultsOutcomes(project);
		populateTimeline(project);
		populateNav(project);

		if (window.Portfolio.ANIMATIONS && window.Portfolio.ANIMATIONS.initScrollReveal) {
			window.Portfolio.ANIMATIONS.initScrollReveal();
		}
	}

	return {
		init
	};

})();


window.Portfolio.PROJECT_DETAILS_V2 = (function() {

	const _I = _ICONS;

	function _set(id, text) {
		const el = document.getElementById(id);
		if (el) el.textContent = text;
	}

	function _setHTML(id, html) {
		const el = document.getElementById(id);
		if (el) el.innerHTML = html;
	}

	function populateHero(p) {
		document.title = `${p.name} — M Sohaib Ishaque`;
		const metaEl = document.querySelector('meta[name="description"]');
		if (metaEl) metaEl.setAttribute('content', `${p.name} — ${p.subtitle} | M Sohaib Ishaque Portfolio`);

		const titleEl = document.getElementById('pd2-hero-title');
		if (titleEl) titleEl.innerHTML = `<strong>${p.name}</strong>`;
		_set('pd2-hero-subtitle', p.subtitle || p.badgeType || '');
		_set('pd2-hero-desc', p.desc);

		const metaRows = p.meta || [];
		const find = label => {
			const row = metaRows.find(m => m.label && m.label.toLowerCase() === label.toLowerCase());
			return row ? (row.value || '') : '';
		};
		_set('pd2-meta-client',   find('Client'));
		_set('pd2-meta-category', find('Category'));
		_set('pd2-meta-status',   find('Status'));
		_set('pd2-meta-timeline', find('Timeline'));

		const img = document.getElementById('pd2-hero-img');
		if (img) {
			if (p.heroImage) {
				img.src = p.heroImage;
			} else {
				const shot = (p.screenshots && p.screenshots[0]) || {};
				img.src = shot.src || '';
			}
			img.alt = `${p.name} banner image`;
		}

		const liveBtn = document.getElementById('pd2-btn-live');
		if (liveBtn) liveBtn.href = p.liveUrl || '#';
		const ghBtn = document.getElementById('pd2-btn-github');
		if (ghBtn) ghBtn.href = p.githubUrl || '#';
	}
	function populateTech(p) {
		const grid = document.getElementById('pd2-tech-grid');
		if (!grid) return;
		grid.innerHTML = (p.techStack || []).map(t => `
      <div class="pd2-tech-card reveal">
        <div class="pd2-tech-card-icon" aria-hidden="true">${t.abbr}</div>
        <div class="pd2-tech-card-name">${t.name}</div>
        <div class="pd2-tech-card-sub">${t.role}</div>
      </div>`).join('');
	}

	function populateFeatures(p) {
		const grid = document.getElementById('pd2-features-grid');
		if (!grid) return;
		grid.innerHTML = (p.features || []).map(f => `
      <div class="pd2-feature-card reveal">
        <div class="pd2-feature-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${_I[f.icon] || ''}</svg>
        </div>
        <div class="pd2-feature-title">${f.title}</div>
        <p class="pd2-feature-desc">${f.desc}</p>
      </div>`).join('');
	}

	function populateTimeline(p) {
		const wrap = document.getElementById('pd2-timeline-grid');
		if (!wrap) return;
		wrap.innerHTML = (p.timeline || []).map((item, i) => `
      <div class="pd2-tl-node reveal">
        <div class="pd2-tl-dot">${String(i + 1).padStart(2, '0')}</div>
        <div class="pd2-tl-content">
          <div class="pd2-tl-phase">${item.heading}</div>
          <div class="pd2-tl-duration">${item.phase}</div>
          <p class="pd2-tl-desc">${item.text}</p>
        </div>
      </div>`).join('');
	}
	function populateGallery(p) {
		const carousel = document.getElementById('pd2-screenshots-carousel');
		if (!carousel) return;
		const shots = p.screenshots || [];
		carousel.innerHTML = shots.map(s => `
      <div class="pd2-screenshot-thumb">
        <img src="${s.src}" alt="${s.label}" class="hero-img" loading="lazy" />
      </div>`).join('');
	}

	function populateMetrics(p) {
		const grid = document.getElementById('pd2-metrics-grid');
		if (!grid) return;

		const metricIcons = [
			`<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>`,
			`<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
			`<rect x="2" y="3" width="9" height="9" rx="1"/><rect x="13" y="3" width="9" height="9" rx="1"/><rect x="2" y="13" width="9" height="9" rx="1"/><rect x="13" y="13" width="9" height="9" rx="1"/>`,
			`<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>`,
		];

		grid.innerHTML = (p.stats || []).map((s, i) => `
      <div class="pd2-metric-item reveal">
        <div class="pd2-metric-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            ${metricIcons[i % metricIcons.length]}
          </svg>
        </div>
        <div>
          <div class="pd2-metric-val" data-target="${s.num}" data-suffix="${s.suffix}">${s.num}${s.suffix}</div>
          <div class="pd2-metric-label">${s.label}</div>
          <div class="pd2-metric-desc">&nbsp;</div>
        </div>
      </div>`).join('');

		const nums = grid.querySelectorAll('.pd2-metric-val[data-target]');
		const obs = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) return;
				const el = entry.target;
				const raw = el.dataset.target;
				const target = parseFloat(raw);
				const suffix = el.dataset.suffix || '';
				if (isNaN(target)) { el.textContent = raw + suffix; return; }
				let cur = 0;
				const inc = target / (1400 / 16);
				const t = setInterval(() => {
					cur += inc;
					if (cur >= target) { cur = target; clearInterval(t); }
					el.textContent = (Number.isInteger(target) ? Math.floor(cur) : cur.toFixed(1)) + suffix;
				}, 16);
				obs.unobserve(el);
			});
		}, { threshold: 0.5 });
		nums.forEach(el => obs.observe(el));
	}

	function populateOutcomes(p) {
		const list = document.getElementById('pd2-outcomes-list');
		if (!list) return;
		const outcomes = (p.outcomes || []).filter(o => !o.title.toLowerCase().startsWith('challenge'));
		list.innerHTML = outcomes.map(o => `
      <li class="pd2-oc-item">
        <span class="pd2-oc-item-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </span>
        <div>
          <div style="color:var(--white); font-size:0.88rem; font-weight:500; margin-bottom:0.2rem;">${o.title.replace(/^Outcome\s*[—–-]\s*/i, '')}</div>
          <div style="color:var(--gray); font-size:0.78rem;">${o.desc}</div>
        </div>
      </li>`).join('');
	}

	function populateChallenges(p) {
		const list = document.getElementById('pd2-challenges-list');
		if (!list) return;

		const challenges = (p.outcomes || []).filter(o => o.title.toLowerCase().startsWith('challenge'));
		list.innerHTML = challenges.map(o => `
      <li class="pd2-oc-item">
        <span class="pd2-oc-item-icon" style="color: var(--gray-light);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </span>
        <div>
          <div style="color:var(--white); font-size:0.88rem; font-weight:500; margin-bottom:0.2rem;">${o.title.replace(/^Challenge\s*[—–-]\s*/i, '')}</div>
          <div style="color:var(--gray); font-size:0.78rem;">${o.desc}</div>
        </div>
      </li>`).join('');
	}

	function populateNav(p) {
		const prevLink  = document.getElementById('pd2-prev-link');
		const prevTitle = document.getElementById('pd2-prev-title');
		const prevSub   = document.getElementById('pd2-prev-sub');

		if (p.prevProject) {
			const url = _templateUrl(p.prevProject.id) + '?id=' + p.prevProject.id;
			if (prevLink)  prevLink.href = url;
			if (prevTitle) prevTitle.textContent = p.prevProject.name;
			if (prevSub)   prevSub.textContent   = p.prevProject.cat;
		} else {
			const prevSide = document.querySelector('.pd2-proj-nav-side:not(.right)');
			if (prevSide) prevSide.style.visibility = 'hidden';
		}

		const nextLink  = document.getElementById('pd2-next-link');
		const nextTitle = document.getElementById('pd2-next-title');
		const nextSub   = document.getElementById('pd2-next-sub');

		if (p.nextProject) {
			const url = _templateUrl(p.nextProject.id) + '?id=' + p.nextProject.id;
			if (nextLink)  nextLink.href = url;
			if (nextTitle) nextTitle.textContent = p.nextProject.name;
			if (nextSub)   nextSub.textContent   = p.nextProject.cat;
		} else {
			const nextSide = document.querySelector('.pd2-proj-nav-side.right');
			if (nextSide) nextSide.style.visibility = 'hidden';
		}
	}

	function init() {
		const page = window.Portfolio.UTILS.getActivePage();
		if (page !== 'project-details' && page !== 'project-details%20(2)') return;

		const params    = new URLSearchParams(window.location.search);
		const projectId = params.get('id');
		const project   = window.Portfolio.PROJECTS[projectId];

		if (!project) {
			console.warn('[project-data.js] Unknown project id:', projectId, '— redirecting.');
			window.location.href = 'projects.html';
			return;
		}

		populateHero(project);
		populateTech(project);
		populateFeatures(project);
		populateTimeline(project);
		populateGallery(project);
		populateMetrics(project);
		populateOutcomes(project);
		populateChallenges(project);
		populateNav(project);

		if (window.Portfolio.ANIMATIONS && window.Portfolio.ANIMATIONS.initScrollReveal) {
			window.Portfolio.ANIMATIONS.initScrollReveal();
		}
	}

	return {
		init
	};

})();


window.Portfolio.PROJECT_LINKS = (function() {

	const NAME_TO_ID = {
		"al tahaluf's":            'al-tahaluf',
		'nsric online education':  'nsric',
		'stock management system': 'stock-management',
		'qrmf':                    'qrmf',
		'simplicity trading wp':   'simplicity-trading',
		'traveler':                'traveler',
		'online quiz system':      'online-quiz',
		'mila lifestyle':          'mila-lifestyle',
		'kf movement':             'kf-movement',
		'jkjaac':                  'jkjaac',
	};

	function init() {
		const page = window.Portfolio.UTILS.getActivePage();
		if (page !== 'projects') return;

		document.querySelectorAll('.pg-card').forEach(card => {
			const nameEl = card.querySelector('.pg-name');
			const linkEl = card.querySelector('.pg-link');
			if (!nameEl || !linkEl) return;

			const id = NAME_TO_ID[nameEl.textContent.trim().toLowerCase()];
			if (id) {
				linkEl.href = `${_templateUrl(id)}?id=${id}`;
			}
		});

		document.querySelectorAll('.pg-card').forEach(card => {
			card.style.cursor = 'pointer';
			card.addEventListener('click', e => {
				if (e.target.closest('a, button')) return;
				const link = card.querySelector('.pg-link');
				if (link) window.location.href = link.href;
			});
		});
	}

	return {
		init
	};

})();

document.addEventListener('DOMContentLoaded', () => {
	window.Portfolio.PROJECT_DETAILS.init();
	window.Portfolio.PROJECT_DETAILS_V2.init();
	window.Portfolio.PROJECT_LINKS.init();
});