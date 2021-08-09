module.exports = {
  extends: ['@commitlint/config-conventional'],

  verbose: true,

  rules: {
    'type-enum': [
      2,
      'always',
      [
        'style',
        'perf',
        'remove',
        'fix',
        'quickfix',
        'feature',
        'docs',
        'deploy',
        'ui',
        'init',
        'test',
        'security',
        'osx',
        'linux',
        'windows',
        'android',
        'ios',
        'release',
        'lint',
        'wip',
        'fix-ci',
        'downgrade',
        'upgrade',
        'pushpin',
        'ci',
        'analytics',
        'refactoring',
        'docker',
        'dep-add',
        'dep-rm',
        'config',
        'i18n',
        'typo',
        'poo',
        'revert',
        'merge',
        'dep-up',
        'compat',
        'mv',
        'license',
        'breaking',
        'assets',
        'review',
        'access',
        'docs-code',
        'beer',
        'texts',
        'db',
        'log-add',
        'log-rm',
        'contrib-add',
        'ux',
        'arch',
        'iphone',
        'clown-face',
        'egg',
        'see-no-evil',
        'camera-flash',
        'experiment',
        'seo',
        'k8s',
        'types',
        'seed',
        'flags',
        'animation'
      ],
    ],
  }
}
