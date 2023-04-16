import { redirect } from '@sveltejs/kit';
interface CustomLocals extends Record<string, any> {
	user?: {
		email: string;
		id: string;
	};
}
export const load = async ({ locals }: { locals: CustomLocals }) => {

	// redirect user if not logged in
	if (!locals.user) {
		throw redirect(302, '/');
	}
};
