import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../../../vendor/statamic/cms/tailwind.config.js";


const fullConfig = resolveConfig(tailwindConfig);

import { getDeep, setDeep } from '../functions/objectHelpers'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["breakpoint"])
    },
    methods: {
        getDeep(e, obj = this.field.config.buildamic_settings) {
            return getDeep(obj, e)
        },
        updateField({ path, key = '', val, vm = this }, responsive) {
            const fullPath = responsive ? `${path}.${this.breakpoint}` : path
            const localPath = `${path}.${key}`.split('.').filter(path => path)

            // Update local value
            localPath.reduce((a, b, i) => {
                i++
                if (i !== localPath.length) {
                    return a[b]
                }
                a[b].value = val
            }, vm);

            // Update actual field settings
            return setDeep(this.field.config.buildamic_settings, fullPath, val)
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
