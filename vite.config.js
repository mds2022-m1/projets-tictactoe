import { sveltekit } from '@sveltejs/kit/vite';
import configServerWebsocket from './config';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		{
			name: 'webSocketServer',
			configureServer(server) {
				configServerWebsocket(server.httpServer);
			}
		},
	],
};

export default config;
