#!/usr/bin/env node

const [major] = process.versions.node.split(".").map(Number);

if (major < 18) {
  console.error(
    `agentkitx requires Node.js 18 or newer (you have ${process.version}).\n` +
      "Please upgrade Node (e.g. via nvm: `nvm install 18 && nvm use 18`) and try again."
  );
  process.exit(1);
}

await import("../dist/index.js");
