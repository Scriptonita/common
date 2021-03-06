module.exports = {
  name: 'Polkadot JS Common',
  exclude: '**/*+(index|e2e|spec).ts',
  excludeExternals: true,
  excludeNotExported: true,
  excludeProtected: true,
  excludePrivate: true,
  hideGenerator: true,
  includeDeclarations: false,
  out: 'docs',
  module: 'commonjs',
  moduleResolution: 'node',
  stripInternal: 'true',
  theme: 'markdown'
};
