module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      'jsx-a11y/anchor-is-valid': ['error', {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      }],
    },
  };
  