import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ShowForm, Null_SelectedItem, onSearch} from './../Actions/index';
class Add extends Component {

    ShowForm = () => {
        this.props.onSearch('');
        this.props.Null_SelectedItem();
        this.props.ShowForm();
    }
    render() {
        const {SelectedItem} = this.props;
        let elmButton = <button type="button" className="btn btn-danger btn-block" onClick = {this.ShowForm}>Add Task</button>; 
        if (SelectedItem !== null){
            elmButton = <button type="button" className="btn btn-success btn-block" onClick = {this.ShowForm}>Edit Task: {SelectedItem.name}</button>;
        }
        return (
            <div className="col-6">
                {elmButton}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        SelectedItem: state.SelectedItem
    };
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        ShowForm: () => {
            dispatch(ShowForm());
        },
        Null_SelectedItem: () => {
            dispatch((Null_SelectedItem()));
        },
        onSearch: (value) => {
            dispatch(onSearch(value));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Add);