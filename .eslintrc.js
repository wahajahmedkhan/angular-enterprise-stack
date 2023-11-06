module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  plugins: ['@nx'],
  overrides: [
    {
      files: ['*.html'],
      extends: [
        'plugin:@angular-eslint/template/recommended',
        'plugin:@nx/angular-template',
      ],
      plugins: ['@angular-eslint/template'],
      parser: '@angular-eslint/template-parser',
      rules: {
        '@angular-eslint/template/alt-text': 'error',
        '@angular-eslint/template/conditional-complexity': [
          'error',
          {
            maxComplexity: 6,
          },
        ],
        '@angular-eslint/template/elements-content': 'error',
        '@angular-eslint/template/label-has-associated-control': 'error',
        '@angular-eslint/template/mouse-events-have-key-events': 'error',
        '@angular-eslint/template/no-any': 'error',
        '@angular-eslint/template/no-autofocus': 'error',
        '@angular-eslint/template/no-call-expression': 'off',
        '@angular-eslint/template/no-distracting-elements': 'error',
        '@angular-eslint/template/no-positive-tabindex': 'error',
        '@angular-eslint/template/table-scope': 'error',
        '@angular-eslint/template/use-track-by-function': 'error',
        '@angular-eslint/template/valid-aria': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@nx/typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@ngrx/recommended',
        'prettier',
      ],
      plugins: [
        '@typescript-eslint',
        '@angular-eslint',
        'functional',
        'import',
        'no-null',
        'rxjs',
        'unicorn',
        'prettier',
      ],
      rules: {
        '@angular-eslint/component-max-inline-declarations': [
          'error',
          {
            animations: 20,
            styles: 10,
            template: 10,
          },
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            style: 'kebab-case',
          },
        ],
        '@angular-eslint/contextual-decorator': 'error',
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            style: 'camelCase',
          },
        ],
        '@angular-eslint/no-attribute-decorator': 'error',
        '@angular-eslint/no-forward-ref': 'off',
        '@angular-eslint/no-input-prefix': 'error',
        '@angular-eslint/no-lifecycle-call': 'error',
        '@angular-eslint/no-pipe-impure': 'error',
        '@angular-eslint/no-queries-metadata-property': 'error',
        '@angular-eslint/prefer-on-push-component-change-detection': 'error',
        '@angular-eslint/prefer-output-readonly': 'error',
        '@angular-eslint/relative-url-prefix': 'error',
        '@angular-eslint/use-component-selector': 'error',
        '@angular-eslint/use-component-view-encapsulation': 'error',
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: 'type:app',
                onlyDependOnLibsWithTags: ['*'],
              },
              {
                sourceTag: 'type:type',
                onlyDependOnLibsWithTags: ['type:type'],
              },
              {
                sourceTag: 'type:ui',
                onlyDependOnLibsWithTags: ['type:ui', 'type:util', 'type:type'],
              },
              {
                sourceTag: 'type:util',
                onlyDependOnLibsWithTags: ['type:util', 'type:type'],
              },
              {
                sourceTag: 'type:feat',
                onlyDependOnLibsWithTags: [
                  'type:util',
                  'type:type',
                  'type:feat',
                  'type:ui',
                  'type:data-access',
                ],
              },
              {
                sourceTag: 'type:data-access',
                onlyDependOnLibsWithTags: [
                  'type:util',
                  'type:type',
                  'type:data-access',
                ],
              },
              {
                sourceTag: 'type:e2e',
                onlyDependOnLibsWithTags: ['scope:testing'],
              },
            ],
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'axios',
                message:
                  "Using axios is not allowed. Use Angular's HttpClient instead",
              },
              {
                name: 'rxjs/operators',
                message: 'Import RxJs operators from `rxjs` directly',
              },
            ],
          },
        ],
        '@typescript-eslint/array-type': [
          'error',
          {
            default: 'generic',
          },
        ],
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': 'error',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'no-public',
          },
        ],
        '@typescript-eslint/no-dynamic-delete': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            varsIgnorePattern: '^_',
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/unbound-method': 'off',
        'arrow-parens': ['error', 'as-needed'],
        'brace-style': ['error', '1tbs'],
        complexity: [
          'error',
          {
            max: 20,
          },
        ],
        'default-case': 'error',
        eqeqeq: ['error', 'always'],
        'functional/immutable-data': 'error',
        'import/no-default-export': 'error',
        'import/no-deprecated': 'off',
        'import/no-internal-modules': [
          'off', // FIXME check what we can do to enable this again
          {
            allow: [
              '@angular/common/http/*',
              '@angular/core/testing/*',
              '@angular/material/*',
              '@angular/platform-browser/animations/*',
              '@angular/router/testing/*',
              '@ngrx/effects/testing/*',
              '@ngrx/store/testing/*',
              'rxjs/*',
            ],
          },
        ],
        'import/no-unassigned-import': ['error'],
        'linebreak-style': ['error', 'unix'],
        'max-len': [
          'error',
          {
            code: 150,
          },
        ],
        'newline-per-chained-call': 'off',
        '@ngrx/avoid-dispatching-multiple-actions-sequentially': 'warn',
        '@ngrx/no-dispatch-in-effects': 'warn',
        '@ngrx/no-effects-in-providers': 'error',
        '@ngrx/no-multiple-actions-in-effects': 'off',
        '@ngrx/no-multiple-global-stores': 'warn',
        '@ngrx/no-reducer-in-key-names': 'warn',
        '@ngrx/no-typed-global-store': 'warn',
        '@ngrx/prefer-concat-latest-from': 'error',
        '@ngrx/prefer-inline-action-props': 'off',
        '@ngrx/prefer-effect-callback-in-block-statement': 'off',
        '@ngrx/prefix-selectors-with-select': 'off',
        '@ngrx/select-style': ['warn', 'method'],
        '@ngrx/prefer-selector-in-select': 'warn',
        '@ngrx/on-function-explicit-return-type': 'off',
        'no-debugger': 'off',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty': [
          'off',
          {
            allowEmptyCatch: true,
          },
        ],
        'no-extra-bind': 'error',
        'no-extra-semi': 'off',
        'no-irregular-whitespace': 'error',
        'no-magic-numbers': 'off',
        'no-multiple-empty-lines': 'error',
        'no-new-func': 'error',
        'no-null/no-null': 'error',
        'no-param-reassign': 'error',
        'no-plusplus': [
          'error',
          {
            allowForLoopAfterthoughts: true,
          },
        ],
        'no-restricted-globals': [
          'error',
          {
            name: 'name',
            message: 'name global variable is deprecated',
          },
          {
            name: 'event',
            message: 'event global variable is deprecated',
          },
          {
            name: 'length',
            message: 'length global variable is not allowed',
          },
          {
            name: 'spyOn',
            message: 'please use jest.spyOn',
          },
        ],
        'no-return-await': 'error',
        'no-sequences': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-void': 'error',
        'object-curly-spacing': ['error', 'always'],
        'padding-line-between-statements': [
          'error',
          {
            blankLine: 'always',
            prev: '*',
            next: 'return',
          },
        ],
        'prefer-destructuring': [
          'error',
          {
            array: true,
            object: true,
          },
        ],
        'prefer-object-spread': 'error',
        'prefer-template': 'error',
        'rxjs/no-cyclic-action': 'off', // From ngrx/recommended. This triggers on every effect, even those that don't re-emit actions, so disabled.
        'rxjs/no-unsafe-takeuntil': [
          'error',
          {
            alias: ['untilDestroyed'],
          },
        ],
        'space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            asyncArrow: 'always',
            named: 'never',
          },
        ],
        'space-in-parens': ['error', 'never'],
        'unicorn/consistent-destructuring': 'error',
        'unicorn/filename-case': 'error',
        'unicorn/no-zero-fractions': 'error',
        yoda: 'error',
      },
    },
    {
      files: ['*.spec.ts', '*.spec.tsx', '*.spec.js', '*.spec.jsx'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'jest/no-focused-tests': 'error',
        'prefer-destructuring': 'off',
        'functional/immutable-data': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@angular-eslint/component-selector': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
    {
      files: ['*.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        '@nx/dependency-checks': 'error',
      },
    },
  ],
};
