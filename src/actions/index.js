import ADD_ITEM from './actionType'
let nextTodoId = 0

export const addItem = (name, des) => {
    return {
        type: ADD_ITEM,
        id: nextTodoId++,
        name,
        des
    }
}