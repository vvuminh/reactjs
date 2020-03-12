// import { ADD_ITEM } from '../actions'

const addItem = (state = [], action) => {

  // let newState = [...state]
  // let value = {
  //   key: 1,
  //   name: 'title',
  //   des: 'desss1'
  // }
  // return newState.push(value)
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          key: action.id,
          name: "title",
          des: "desss1",
        }
      ]
    default:
      return state
    }
  // switch (action.type) {
  //   case ADD_ITEM:
  //     return [
  //       {
  //         key: 1,
  //         name: 'title',
  //         des: 'desss1'
  //       }
  //     ]
  //   default:
  //     return state;
  // }
}

export default addItem;