import * as Type from './../Const/Type';

const SelectedItem = null;

const ReducerSelectedItem = (state = SelectedItem, action) => {
    switch (action.type) {
        case Type.SELECTEDITEM: {
            state = action.task;
            return {...state};
        }
        case Type.NULL_SELECTEDITEM: {
            return null;
        }
        default: return null;
    }
};

export default ReducerSelectedItem;