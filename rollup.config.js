import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";

const formats = ["umd", "esm"];

const plugins = [
  typescript({
    tsconfig: "./tsconfig.json",
    declaration: true,
    declarationDir: "dist",
  }),
  scss({
    fileName: "bundle.css",
  }),
  terser(),
];

export default formats.map((format) => ({
  input: "./src/index.ts",
  output: {
    format: format,
    name: "suikaUi",
    file: `dist/bundle.${format}.js`,
    globals: {
      suika: "suika",
    },
  },
  plugins,
  external: ["suika"],
}));
