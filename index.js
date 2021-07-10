module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-recommended', 'stylelint-config-recess-order'],
  rules: {
    // Variables
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-dollar-variable'],
        ignore: ['after-comment'],
        severity: 'error'
      }
    ],
    'scss/dollar-variable-colon-newline-after': [
      'always-multi-line',
      { severity: 'error' }
    ],
    'scss/dollar-variable-colon-space-after': [
      'always-single-line',
      { severity: 'error' }
    ],
    'scss/dollar-variable-colon-space-before': ['never', { severity: 'error' }]
  }
}
