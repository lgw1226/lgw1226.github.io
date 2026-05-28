export const profile = {
	fullName: 'Gawon Lee',
	title: 'PhD Candidate',
	institute: 'SNU',
	author_name: 'Gawon Lee', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'Reinforcement Learning', description: 'Goal-Conditioned RL, Multi-Task RL, RL Fine-Tuning VLA Models', field: 'engineering' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'lgw1997@snu.ac.kr',
	linkedin: '',
	x: '',
	bluesky: '',
	github: 'https://github.com/lgw1226',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AIqSsVut5qRWaMD5IF7NOcAaEXvCy2FzMnhn1e0-PyklQrO8FXumJkvo_UMXDdLgaKJikwj6Y1oqP7ygAtBdSAqS0J3N&user=ABysT4sAAAAJ',
	inspire: '',
	arxiv: '',
	orcid: '',
}

export const template = {
	website_url: 'https://lgw1226.github.io', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
	base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Gawon Lee',
	default_description: 'PhD Candidate in Reinforcement Learning',
	default_image: '/seo.png',
}
