import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import { InlineDefaults, AttributeDefaults } from '../factories/modules/moduleDefaults';
const fullConfig = resolveConfig(tailwindConfig);
import { getDeep, setDeep, mergeDeep } from '../functions/objectHelpers'
import { mapGetters, mapActions } from 'vuex'
import { bus } from '../eventBus'

const removeXSPrefixFromValue = (value) => {
    return value.indexOf(':') === -1 ? value : value.split(':')[1];
}

export default {
    computed: {
        ...mapGetters(["breakpoint", "dirtyFields"]),
        settings() {
            return this.field.config.buildamic_settings
        }
    },
    created: function () {
        this.setDirtyFields([]);
        if (this.field) {
            // Backwards Compatibility with older versions of the addon
            if (!this.settings?.inline || InlineDefaults.version !== this.settings.inline?.version) {
                this.setInlineDefaults();
            }
            if (!this.settings?.attributes || AttributeDefaults.version !== this.settings.attributes?.version) {
                this.setAttributeDefaults();
            }
        }
    },
    methods: {
        ...mapActions(['setDirtyFields']),
        setDeep,
        getDeep(e, obj = this.settings) {
            const val = getDeep(obj, e);
            return val ? val : false
        },
        saveFields() {
            return true
        },
        updateField({ obj = this.settings, path, type = null, key = '', val, vm = this }, responsive = false) {
            if (type === 'asset' && !val.length) return
            const fullPath = responsive ? `${path}.${this.breakpoint}` : path

            // We have an XS option for responsive sizes but tailwind has no prefix for the smallest size so
            // we need to remove xs from the value
            if (responsive && typeof val === 'string' && val !== 'none' && val && this.breakpoint === 'xs') {
                val = removeXSPrefixFromValue(val);
            }

            // When choosing the "none" option in select fields, remove the value
            if (val === 'none') {
                val = ''
            }

            // Get the fields value when first opening the stack and add that
            // to the dirty fields array allowing reverting changes if not saved.
            const existingIndex = this.dirtyFields.findIndex(el => el.obj.uuid, obj.uuid);
            const oldValue = { obj, fullPath, val: (getDeep(obj, fullPath) ?? '') };
            if (existingIndex === -1) {
                this.setDirtyFields([...this.dirtyFields, oldValue]);
            }

            // Set the value in pagebuilder JSON and validate the field
            setDeep(obj, fullPath, val);
            this.$nextTick(() => {
                bus.$emit('validate-fields', { val });
            })
        },
        updateMeta({ obj = this.settings, path, val }, responsive = false) {
            const fullPath = responsive ? `${path}.${this.breakpoint}` : path
            if (fullPath) {
                setDeep(obj, fullPath, val);
            }
        },
        getTWClasses(type, prefix) {
            const options = Object.entries(fullConfig.theme[type]).reduce(
                (acc, [key, val]) => {
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
        setInlineDefaults() {
            this.setDeep(this.settings, 'inline', mergeDeep(JSON.parse(JSON.stringify(InlineDefaults)), (this.settings?.inline || {})));
        },
        setAttributeDefaults() {
            this.setDeep(this.settings, 'attributes', mergeDeep(JSON.parse(JSON.stringify(AttributeDefaults)), (this.settings?.attributes || {})));
        }
    },

}
