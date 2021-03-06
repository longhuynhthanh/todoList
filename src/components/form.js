import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, Null_SelectedItem, CloseForm } from './../Actions/index';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            imageURL: '',
            name: '',
            level: 0
        };
    }
    componentWillMount() {
        if (this.props.SelectedItem) {
            this.setState({
                id: this.props.SelectedItem.id,
                imageURL: this.props.SelectedItem.imageURL,
                name: this.props.SelectedItem.name,
                level: this.props.SelectedItem.level
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.SelectedItem) {
            this.setState({
                id: nextProps.SelectedItem.id,
                imageURL: nextProps.SelectedItem.imageURL,
                name: nextProps.SelectedItem.name,
                level: nextProps.SelectedItem.level
            });
        }
    }
    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    onClear = () => {
        this.props.Null_SelectedItem();
        this.setState({
            id: '',
            imageURL: '',
            name: '',
            level: 0
        });
    }
    AddTask = () => {
        let level = 0;
        if (this.state.level === '1') {
            level = 1;
        } else if (this.state.level === '2') {
            level = 2;
        } else {
            level = this.state.level;
        }
        const task = {
            id: this.state.id,
            imageURL: this.state.imageURL,
            name: this.state.name,
            level: level
        }
        this.props.onAddTask(task);
        this.onClear();
        this.props.CloseForm();
    }
    render() {
        const { name, level, imageURL } = this.state;
        return (
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <form method="POST">
                        <div className="form-group">
                            <input type="text" name="imageURL" className="form-control" value={imageURL} placeholder="Input ImageURL" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" value={name} placeholder="Input Name" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <select name="level" className="form-control" value={level} required="required" onChange={this.handleChange}>
                                Small
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <div>
                            <button type="button" className="btn btn-outline-success" onClick={this.AddTask}>Submit</button>
                            <button type="button" className="btn btn-outline-danger" onClick={this.onClear}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        SelectedItem: state.SelectedItem
    };
};

const mapDispathToProps = (dispatch, props) => {
    return {
        onAddTask: (task) => {
            dispatch(addTask(task));
        },
        Null_SelectedItem: () => {
            dispatch(Null_SelectedItem());
        },
        CloseForm: () => {
            dispatch(CloseForm());
        }
    };
};

export default connect(mapStateToProps, mapDispathToProps)(Form);