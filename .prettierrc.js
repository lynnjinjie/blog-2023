/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  arrowParens: "avoid",
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  endOfLine: 'lf',
  tabWidth: 2,
  trailingComma: 'none'
};
