import { handleCanonicalFetch } from './lib/canonical-host.js';

/**
 * Workers static-assets entry. Pages `functions/_middleware.js` does not run
 * under `npx wrangler deploy` — this Worker does, with run_worker_first.
 */
export default {
	async fetch(request, env) {
		// Always decide host/HTTPS before touching static assets.
		return handleCanonicalFetch(request, (req) => env.ASSETS.fetch(req));
	},
};
