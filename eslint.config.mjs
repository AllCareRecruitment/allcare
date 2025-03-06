import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            'complexity': ['error'],
            'default-case': ['error'],
            'eqeqeq': ['error'],
            'indent': ['error', 4],
            'keyword-spacing': ['error'],
            'max-len': ['error', 2000],
            'no-console': ['error'],
            'no-else-return': ['error'],
            'no-extra-parens': ['error'],
            'no-multi-spaces': ['error'],
            'no-multiple-empty-lines': ['error', { 'max': 1 }],
            'no-unreachable-loop': ['error'],
            'no-unused-vars': ['error'],
            'no-template-curly-in-string': ['error'],
            'object-curly-spacing': ['error', 'always'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'never']
        },
    },
]

export default eslintConfig
