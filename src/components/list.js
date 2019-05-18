import React, { Component } from 'react';
import Item from './item';
import {connect} from 'react-redux';
class List extends Component {
    render() {
        let {tasks} = this.props;
        let showTasks = tasks.map((task, index) => {
            return <Item
                        key = {task.id}
                        index = {index}
                        task= {task}
                    />
        });
        return (
            <div className="panel panel-success mx-auto">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th style={{ width: '10%' }} className="text-center">#</th>
                            <th>Hình Ảnh</th>
                            <th>ID</th>
                            <th>Task</th>
                            <th style={{ width: '20%' }} className="text-center">Level</th>
                            <th style={{ width: '20%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showTasks}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tasks: state.Tasks
    };
};
export default connect(mapStateToProps, null)(List);