import { trpcServer } from '$lib/server/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	await trpcServer.todos.list.ssr();
};
