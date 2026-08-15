import { handleCanonicalFetch } from '../src/lib/canonical-host.js';

/** Pages Functions path — same HTTPS/apex rules as src/worker.js. */
export async function onRequest(context) {
	return handleCanonicalFetch(context.request, () => context.next());
}
