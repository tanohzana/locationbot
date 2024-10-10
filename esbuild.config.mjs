import esbuild from "esbuild";
import start from "@es-exec/esbuild-plugin-start";

const config = {
  entryPoints: ["index.ts"],
  outfile: "bundle.js",
  bundle: true,
  treeShaking: true,
  minify: true,
  minifySyntax: true,
  sourcemap: "linked",
  legalComments: "none",
  define: {},
  loader: { ".sql": "text", ".html": "text", ".ejs": "text", ".gql": "text", ".template": "text" },
  platform: "node",
  format: "cjs",
  plugins: [],
  external: [],
};

if (!process.argv.includes("--production")) {
  config.treeShaking = false;
  config.minify = false;
  config.minifySyntax = false;
  config.plugins.push(start({ script: "node --enable-source-maps --trace-warnings bundle.js" }));
}

if (process.argv.includes("--watch")) {
  const context = await esbuild.context(config);
  context.watch().catch((err) => {
    console.error(err);
    process.exit(1);
  });
} else {
  esbuild.build(config);
}
