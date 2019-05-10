import React, {Component} from 'react';
class Add extends Component {
    constructor(props){
        super(props);
    }

    showFormToggle = () => {
        this.props.onClickAdd();
    };
    render(){
        let showForm = this.props.showForm;
        let editTask = this.props.editTask;
        let button = <button onClick={this.showFormToggle} type="button" className="btn btn-info btn-block btn-block">Add Task</button>;
        if(showForm){
            button = <button onClick={this.showFormToggle} type="button" className="btn btn-danger btn-block btn-block">Close Task</button>;
        }
        if(editTask){
            button = <button onClick={this.showFormToggle} type="button" className="btn btn-danger btn-block btn-block">Edit Task: {this.props.nameEditTask}</button>;
        }
        return (
            <div className="col-5">
                {button}
            </div>
        );
    }
}
export default Add;