import React, {Component} from 'react';
import Search from './search';
import Sort from './sort';
import Add from './add';
class Controls extends Component {
    render() {
        return (
            <div className="row">
                {/* SEARCH : START */}
                <Search />
                {/* SEARCH : END */}
                {/* SORT : START */}
                <Sort />
                {/* SORT : END */}
                {/* ADD : START */}
                <Add />
                {/* ADD : END */}
            </div>
        );
    }
}
export default Controls;