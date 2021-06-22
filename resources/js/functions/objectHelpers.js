import Vue from 'vue'
/**
 * Dynamically sets a deeply nested value in an object.
 * Optionally "bores" a path to it if its undefined.
 * @function
 * @param {!object} obj  - The object which contains the value you want to change/set.
 * @param {!array} path  - An array representation of path to the value you want to change/set ['just','like','this'] or object dot notation "just.like.this"
 * @param {!mixed} value - The value you want to set it to.
 * @param {boolean} force - If true this will create the path/value if it doesn't already exist
 */
const setDeep = (obj, path, value, force = true, overwrite = false) => {

    // If it's already an array, good game. Otherwise make it one from the .
    !Array.isArray(path) ? path = path.split('.').filter(path => path) : path
    path.reduce((a, b, i) => {

        // Start index at 1
        i++

        // This checks if the current string is actually a number, if so turn it into a proper number
        // This makes it array compatible :)
        b = isNaN(b) ? b : parseInt(b)

        // If overwrite is true, it will delete whatever was there before, use with caution
        if (overwrite && i !== path.length) {
            // Set it as a new object reference!
            Vue.set(a, b, {})

            // Accumilate and move onto the next step
            return a[b]
        }

        // If force is enabled and it comes across an undefined path
        if (force && (typeof a[b] === "undefined" || a[b] === null || a[b] === "") && i !== path.length) {
            // Set it as a new object reference!
            Vue.set(a, b, {})

            // Accumilate and move onto the next step
            return a[b]
        }

        // If we are on the last step of reduce the value is set
        if (i === path.length) {
            Vue.set(a, b, value)
            return value;
        } else {
            // Otherwise accumilate and move onto the next step
            return a[b]
        }

    }, obj);
    console.log(obj)
    return obj
}

const getDeep = (obj, path) => {
    path = Array.isArray(path) ? path : path.split('.').filter(path => path)
    console.log('GD', path.reduce((a, b) => a && a[b], obj))
    return path.reduce((a, b) => a && a[b], obj);
}

const getDeepAsync = (obj, path) => {
    return new Promise((res, rej) => {
        path = Array.isArray(path) ? path : path.split('.').filter(path => path)
        let search = path.reduce((a, b) => a && a[b], obj)
        search ? res(search) : rej()
    })
}

export { setDeep, getDeep, getDeepAsync }
