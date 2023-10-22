//mdsvex.config.js
import path from 'path'
import {fileURLToPath} from 'node:url';

const directory_name = path.resolve(fileURLToPath(import.meta.url), '../');

const config = {
  extensions: ['.svx', '.md'],
  smartypants: {
    dashes: 'oldschool',
  },
  layout: {default: path.join(directory_name, "./src/lib/layouts/default-layout.svelte")}
};

export default config;
