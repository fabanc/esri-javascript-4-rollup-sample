import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/main.js",
  output: {
    chunkFileNames: "chunks/[name]-[hash].js",
    dir: "public",
    format: "es",
    generatedCode: "es2015",
	sourcemap: true
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    del({ targets: ["public/chunks"], runOnce: true, verbose: true }),
    resolve(),
    typescript(), 
    terser()
  ],
  preserveEntrySignatures: false
};