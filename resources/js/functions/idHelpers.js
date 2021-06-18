import { v4 as uuidv4 } from "uuid";
export function generateID() {
    return uuidv4()
}

export const recursifyID = (array) => {
    array.uuid = generateID();
    if (!Array.isArray(array.value)) {
        return false
    }
    array.value.forEach((el) => {
        if (el.id || el.id === '') {
            el.id = generateModuleID(el.type);
        }
        if (!Array.isArray(el.value)) {
            return false
        } else {
            recursifyID(el)
        }
    })
}
