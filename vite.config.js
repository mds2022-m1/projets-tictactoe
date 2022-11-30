import { sveltekit } from '@sveltejs/kit/vite';
import configServerWebsocket from './config';
import {Server} from 'socket.io';

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
