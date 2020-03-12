import ADD_ITEM from './actionType'
let nextTodoId = 0
 
const addItem = (text) => {
    return {
        type: ADD_ITEM,
        id: nextTodoId++,
        text
    }
}

export default addItem