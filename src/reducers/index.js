import AddItem from './add-reducer';
import {combineReducers} from 'redux';     // ket noi cac reducer

const allReducers = combineReducers({
    data: AddItem,
});

export default allReducers;
