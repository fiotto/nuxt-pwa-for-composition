module.exports = {
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'ignores']
      }
    ],
    indentation: 2,
    'number-leading-zero': null,
    'unit-whitelist': ['px', 'deg', 'em', 'rem', 's']
  }
}
