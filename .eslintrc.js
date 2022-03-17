module.exports = {
  extends: ['@ly-js', './.eslintrc-auto-import.json'],
  env: {},
  globals: {
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $shallowRef: 'readonly',
    $computed: 'readonly',
    $customRef: 'readonly',
    $toRef: 'readonly',
    defineOptions: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
}
