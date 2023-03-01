import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";

import jsx from 'acorn-jsx';

export default {
  input: "src/main.ts",
  output: {
    chunkFileNames: "chunks/[name]-[hash].js",
    dir: "public",
    format: "esm",
    generatedCode: "es2015",
	sourcemap: true
  },
  treeshake: false,
  acornInjectPlugins: [jsx()],
  plugins: [
    del({ targets: ["public/chunks"], runOnce: true, verbose: true }),
    resolve(),
    serve("public"),
    livereload({
      watch: "src/main.ts"
    }),	
    typescript()
  ],
  preserveEntrySignatures: false
};