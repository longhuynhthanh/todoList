import {combineReducers} from 'redux';
import Tasks from './Tasks';
import isShowForm from './ShowForm';
import SelectedItem from './SelectedItem';
export default combineReducers({
    Tasks,
    isShowForm,
    SelectedItem
});