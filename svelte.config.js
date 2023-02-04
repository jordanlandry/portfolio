import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    vite: {
      optimizeDeeps: {
        include: ["loadash.get", "lodash.isequal", "lodash.clonedeep"],
      },
    },
  },
};
