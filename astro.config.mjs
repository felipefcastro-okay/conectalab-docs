// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.conectalab.cc',
	integrations: [
		starlight({
			title: 'ConectaLab',
			description: 'Central de ajuda dos produtos ConectaLab.',
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			defaultLocale: 'root',
			locales: {
				root: { label: 'Português (Brasil)', lang: 'pt-BR' },
				en: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
			},
			sidebar: [
				{
					label: 'Ajuda',
					translations: { en: 'Help', es: 'Ayuda' },
					items: [{ autogenerate: { directory: 'guides' } }],
				},
			],
		}),
	],
});
