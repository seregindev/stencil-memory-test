import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-memory-test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      empty: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  minifyJs: true,
  testing: {
    browserHeadless: "shell",
  },
};
