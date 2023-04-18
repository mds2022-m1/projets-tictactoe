import type { Handle } from '@sveltejs/kit';
import { db } from '$root/lib/database';

// Extend the Locals type to add a 'user' property
interface CustomLocals extends Record<string, any> {
	user?: {
		email: string;
		id: string;
	};
}

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('session');

	if (!session) {
		// if there is no session load page as normal
		return await resolve(event);
	}

	// find the user based on the session
	const user = await db.user.findUnique({
		where: { userAuthToken: session },
		select: { 
			email: true,
			id: true,
		},
	});

	// if `user` exists set `events.local`
	if (user) {
		// Cast event.locals to CustomLocals so it has the 'user' property
		(event.locals as CustomLocals).user = {
			email: user.email,
			id: user.id,
		};
	}

	// load page as normal
	return await resolve(event);
};