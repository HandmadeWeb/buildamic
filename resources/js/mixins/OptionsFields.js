import Vue from 'vue'
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

import { getDeep, setDeep } from '../functions/objectHelpers'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["breakpoint"])
    },
    methods: {
        getDeep,
        updateField({ path, val }, responsive) {
            const fullPath = responsive ? `${path}.${this.breakpoint}` : path
            return setDeep(this.field.config, fullPath, val)
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
                {}
            );
            return Object.assign({ 'none': 'N/A' }, options);
        },
    }
}
