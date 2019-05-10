import React, {Component} from 'react';
import Search from './search';
import Sort from './sort';
import Add from './add';
class Controls extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search Search = {this.props.Search}/>
                {/* SEARCH : END */}
                {/* SORT : START */}
                <Sort />
                {/* SORT : END */}
                {/* ADD : START */}
                <Add onClickAdd = {this.props.onClickAdd}
                     showForm = {this.props.showForm}
                     editTask = {this.props.editTask}
                     nameEditTask = {this.props.nameEditTask}/>
                {/* ADD : END */}
            </div>
        );
    }
}
export default Controls;