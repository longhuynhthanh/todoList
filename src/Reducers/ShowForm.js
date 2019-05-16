import * as Type from './../Const/Type';
const isShowForm = false;
const ReducerShowForm = (state = isShowForm, action) => {
    switch (action.type) {
        case Type.ISSHOWFORM:{
            return !state;
        }
        case Type.OPENFORM: {
            return true;
        }
        case Type.CLOSEFORM: {
            return false
        }
        default: return state;
    }
};

export default ReducerShowForm;