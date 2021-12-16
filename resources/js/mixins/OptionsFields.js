import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../../../tailwind.config.js";


const fullConfig = resolveConfig(tailwindConfig);

import { getDeep, setDeep } from '../functions/objectHelpers'
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["breakpoint"]),
    },
    methods: {
        getDeep(e, obj = this.field.config.buildamic_settings, responsive = false) {
            const val = getDeep(obj, e);
            if (val) {
                return val
            }
            return false
        },
        updateField({ obj = this.field.config.buildamic_settings, path, key = '', val, vm = this }, responsive = false) {
            const fullPath = responsive ? `${path}.${this.breakpoint}` : path
            const localPath = `${path}.${key}`.split('.').filter(path => path)

            // Update local value for responsive items (to trigger UI to update)
            if (responsive) {
                localPath.reduce((a, b, i) => {
                    i++
                    if (i !== localPath.length) {
                        return a[b]
                    }
                    if (a && a[b]) {
                        a[b].value = val
                    }
                }, vm);
            }

            // console.log({
            //     obj, fullPath, val
            // })

            if (responsive) {
                if (val.indexOf(':') !== -1) {
                    //split and get
                    let raw = val.split(':')[1];
                    val = `${this.breakpoint}:${raw}`
                } else {
                    val = `${this.breakpoint}:${val}`
                }
            }

            console.log({ val, responsive, breakpoint: this.breakpoint })

            // Update actual field settings
            return setDeep(obj, fullPath, val)
        },
        getTWClasses(type, prefix) {
            const options = Object.entries(fullConfig.theme[type]).reduce(
                (acc, [key, val]) => {
                    // console.log({ key, val })
                    if (key.charAt(0) !== '-') {
                        acc[`${prefix}-${key}`] = `${prefix}-${key}`;
                    } else {
                        acc[`-${prefix}${key}`] = `-${prefix}${key}`;
                    }
                    return acc;
                },
                {}
            );
            return Object.assign({ 'none': 'N/A' }, options);
        },
    }
}
