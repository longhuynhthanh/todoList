import React, { Component } from 'react';
class Sort extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                        <li className="dropdown-item">Name ASC</li>
                        <li className="dropdown-item">Name DESC</li>
                        <li className="dropdown-item">Level ASC</li>
                        <li className="dropdown-item">Level DESC</li>
                    </ul>
                    <span className="badge badge-success">NAME - DESC</span>
                </div>
            </div>
        );
    }
}
export default Sort;