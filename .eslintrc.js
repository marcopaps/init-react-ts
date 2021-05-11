module.exports = {
    extends: [
        "airbnb-typescript-prettier"
    ],
    rules: {
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "import/prefer-default-export": 0,
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto"
            }
        ],
        "import/no-named-as-default": 0,
        "react/jsx-props-no-spreading": 0
    },
};