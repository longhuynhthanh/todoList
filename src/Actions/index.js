import * as Type from './../Const/Type';

export const getListAll = () => {
    return {
        type: Type.LIST_ALL
    };
};

export const addTask = (task) => {
    return {
        type: Type.ADD_TASK,
        task
    };
};


export const DeleteTask = (id) => {
    return {
        type: Type.DELETE_TASK,
        id: id
    };
};

// export const EditTask = (task) => {
//     return {
//         type: Type.EDIT_TASK,
//         task
//     };
// };

// Form
export const ShowForm = () => {
    return {
        type: Type.ISSHOWFORM
    };
};
export const CloseForm = () => {
    return {
        type: Type.CLOSEFORM
    };
};

export const OpenForm = () => {
    return {
        type: Type.OPENFORM
    };
};

// Search
export const onSearch = (string) => {
    return {
        type: Type.SEARCH,
        string: string
    };
};

// Selected Item
export const SelectedItem = (task) => {
    return {
        type: Type.SELECTEDITEM,
        task
    };
};

export const Null_SelectedItem = () => {
    return {
        type: Type.NULL_SELECTEDITEM
    };
};