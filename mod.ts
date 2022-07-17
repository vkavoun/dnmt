new Worker(new URL('./src/manifest-worker.ts', import.meta.url).href, { type: 'module' });
