import React, {Component} from 'react';
import Search from './search';
import Sort from './sort';
import Add from './add';
class Controls extends Component {
    render() {
        const {ShowForm, nameEditTask, onSearch} = this.props;
        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search 
                    onSearch = {onSearch}
                />
                {/* SEARCH : END */}
                {/* SORT : START */}
                <Sort />
                {/* SORT : END */}
                {/* ADD : START */}
                <Add 
                    ShowForm        = {ShowForm}
                    nameEditTask    = {nameEditTask}
                />
                {/* ADD : END */}
            </div>
        );
    }
}
export default Controls;