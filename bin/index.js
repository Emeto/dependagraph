#!/usr/bin/env node
const Parser = require('../lib/parser');

async function main() {
  let dependagraph = new Parser(process.cwd() + '/package-lock.json');

  await dependagraph.parse();

  console.log('[dependagraph] Loaded project name : ' + dependagraph.projectName);
  console.log('[dependagraph] Loaded project version : ' + dependagraph.projectVersion);
  console.log('[dependagraph] Loaded project dependency count : ' + dependagraph.getDependenciesCount());

  dependagraph.generateNodes();
  dependagraph.generateEdges();
  dependagraph.generateDocument();

  console.log('[dependagraph] Your document is ready. Please be aware that the graph could take up to a minute to render on large projects');
}

main();
