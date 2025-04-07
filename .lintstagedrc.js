import path from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const runTsValidation = () => "tsc -p tsconfig.json --noEmit";

const lintStagedConfig = {
  "*.{js,jsx,mjs,cjs,ts,tsx}": [
    "prettier --write",
    runTsValidation,
    buildEslintCommand,
  ],
};

export default lintStagedConfig;
