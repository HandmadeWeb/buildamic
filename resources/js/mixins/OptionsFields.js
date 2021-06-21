import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

import { setDeep } from '../functions/objectHelpers'

export default {
    methods: {
        updateField({ option, key, val }) {
            console.log(`${option}.${key}`)
            if (option) {
                return setDeep(this.field.config, `${option}.${key}`, val)
            }
            setDeep(this.field.config, `${key}`, val)
        },
        getTWClasses(type, prefix) {
            const options = Object.keys(fullConfig.theme[type]).reduce(
                (acc, cur) => {
                    if (cur.charAt(0) !== '-') {
                        acc[`${cur}`] = `${prefix}-${cur}`;
                    } else {
                        acc[`-${cur}`] = `-${prefix}${cur}`;
                    }
                    return acc;
                },
                { "N/A": "N/A" }
            );
            return options;
        },
    }
}
