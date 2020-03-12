const addItem = (state = [], action) => {

  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,action.text
      ]
    default:
      return state
    }
}

export default addItem;