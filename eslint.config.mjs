import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([{
    extends: [...nextCoreWebVitals],

    rules: {
        "no-var": "error",
        "prefer-const": "error",

        "no-console": ["warn", {
            allow: ["warn", "error"],
        }],

        "no-eval": "error",
        "no-implied-eval": "error",
        "no-new-func": "error",
        "no-script-url": "error",

        // Disable overly strict React Compiler rules
        // These flag standard React patterns like mounting state and localStorage sync
        "react-hooks/set-state-in-effect": "off",
    },
}]);