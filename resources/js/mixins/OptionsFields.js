import resolveConfig from "tailwindcss/resolveConfig";
// import tailwindConfig from "../../../../../../tailwind.config.js";
import tailwindConfig from "../../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

import { getDeep, setDeep } from '../functions/objectHelpers'
import { mapGetters, mapActions } from 'vuex'

import { bus } from '../eventBus'

export default {
    computed: {
        ...mapGetters(["breakpoint", "dirtyFields"]),
    },
    created: function () {
        this.setDirtyFields([]);
    },
    methods: {
        ...mapActions(['setDirtyFields']),
        setDeep,
        getDeep(e, obj = this.field.config.buildamic_settings) {
            const val = getDeep(obj, e);
            if (val) {
                return val
            }
            return false
        },

        saveFields() {
            return true
        },
        updateField({ obj = this.field.config.buildamic_settings, path, type = null, key = '', val, vm = this }, responsive = false) {
            if (type === 'asset' && !val.length) return

            const fullPath = responsive ? `${path}.${this.breakpoint}` : path

            if (responsive && typeof val === 'string' && val !== 'none' && val) {
                if (val.indexOf(':') !== -1) {
                    let raw = val.split(':')[1];
                    val = this.breakpoint !== 'xs' ? `${this.breakpoint}:${raw}` : raw
                } else {
                    val = this.breakpoint !== 'xs' ? `${this.breakpoint}:${val}` : val
                }
            }

            if (val === 'none') {
                val = ''
            }

            const existingIndex = this.dirtyFields.findIndex(el => el.obj.uuid, obj.uuid);
            const oldValue = { obj, fullPath, val: (getDeep(obj, path) ?? '') };

            if (existingIndex === -1) {
                this.setDirtyFields([...this.dirtyFields, oldValue]);
            }


            setDeep(obj, fullPath, val);

            this.$nextTick(() => {
                bus.$emit('validate-fields', { val });
            })
        },
        updateMeta({ obj = this.field.config.buildamic_settings, path, key = '', val, vm = this }, responsive = false) {
            const fullPath = responsive ? `${path}.${this.breakpoint}` : path
            if (fullPath) {
                setDeep(obj, fullPath, val);
            }
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
    },

}
