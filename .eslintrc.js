module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "plugins": [
    "react",
  ],
  "globals": {
    "graphql": false,
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/no-multi-comp": "off",
    "no-underscore-dangle": "off",
    "object-curly-newline": "off",
    "react/no-unescaped-entities": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "jsx-a11y/accessible-emoji": "off",
    "import/prefer-default-export": "warn",
    "no-param-reassign": "warn",
    "react/jsx-one-expression-per-line": "off",
    "jsx-a11y/anchor-is-valid": "warn",
    "react/destructuring-assignment": "off",
    "no-shadow": "warn",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-tabindex": "off",
    "jsx-a11y/label-has-for": "off",
    "react/prefer-stateless-function": "off",
    "jsx-a11y/alt-text": "off",
    "react/button-has-type": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "max-len": [
      "error",
      {
        "code": 100,
        "ignoreComments": true
      }
    ],
    "no-restricted-globals": "off",
    "consistent-return": "warn",
    "react/no-array-index-key": "warn",
    "no-alert": "off",
    "camelcase": "warn",
    "react/prop-types": "off",
  }
}







