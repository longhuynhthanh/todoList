import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            strSearch: ''
        };
    }
    handleChange = event => {
        this.setState({
            strSearch: event.target.value
        });
        this.props.Search(event.target.value);
    }
    handleClick = () => {
        this.props.Search(this.state.strSearch);
    }
    render() {
        return (
            <div className="col-3">
                <div className="input-group">
                    <input type="text" className="form-control" value = {this.state.strSearch} onChange = {this.handleChange} placeholder="Search for..." />
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button" onClick = {this.handleClick}>Go!</button>
                    </span>
                </div>
            </div>
        );
    }
}
export default Search;