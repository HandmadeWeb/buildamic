import { getDeep, setDeep } from '../functions/objectHelpers'

export default {
    methods: {
        getDeep(e, obj = this.field) {
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
                if (a && a[b]) {
                    a[b].value = val
                }
            }, vm);

            // Update actual field settings
            return setDeep(this.field, fullPath, val)
        },
    }
}
