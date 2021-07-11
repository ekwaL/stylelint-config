module.exports = {
  plugins: ['stylelint-prettier'],
  extends: ['./index.js', 'stylelint-prettier/recommended'],
  rules: {
    'prettier/prettier': [
      true,
      {
        printWidth: 80,
        tabWidth: 2,
        bracketSpacing: true,
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        quoteProps: 'consistent',
        arrowParens: 'avoid',
        htmlWhitespaceSensitivity: 'strict',
        endOfLine: 'auto'
      }
    ]
  }
}
