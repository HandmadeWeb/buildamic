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
const setDeep = (obj, path, value) => {
    const force = true,
        overwrite = false;
    // If it's already an array, good game. Otherwise make it one from the .
    !Array.isArray(path) ? path = path.split('.').filter(path => path) : path
    return path.reduce((a, b, i) => {

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

            return a[b];
        } else {
            // Otherwise accumilate and move onto the next step
            return a[b]
        }

    }, obj);
}

const getDeep = (obj, path, defaultVal) => {
    path = Array.isArray(path) ? path : path.split('.').filter(path => path)
    const data = path.reduce((a, b) => a && a[b], obj)
    if (!data) {
        return
    }
    return data;
}

/**
* Performs a deep merge of objects and returns new object. Does not modify
* objects (immutable) and merges arrays via concatenation.
*
* @param {...object} objects - Objects to merge
* @returns {object} New object with merged key/values
*/
const mergeDeep = (...objects) => {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach(key => {
            const pVal = prev[key];
            const oVal = obj[key];

            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat(...oVal);
            }
            else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = mergeDeep(pVal, oVal);
            }
            else {
                prev[key] = oVal;
            }
        });

        return prev;
    }, {});
}

const sameKeysDeep = (...objects) => {
    let union = new Set();
    union = objects.reduce((keys, object) => keys.add(Object.keys(object)), union);
    if (union.size === 0) return true
    if (!objects.every((object) => union.size === Object.keys(object).length)) return false

    for (let key of union.keys()) {
        let res = objects.map((o) => (typeof o[key] === 'object' ? o[key] : {}))
        if (!objectsHaveSameKeys(...res)) return false
    }

    return true
}

export { setDeep, getDeep, mergeDeep, sameKeysDeep }
