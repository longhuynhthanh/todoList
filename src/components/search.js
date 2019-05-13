import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            Search: ''
        };
    }
    HandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
        this.props.onSearch(value);
    }
    render() {
        let {Search} = this.state;
        return (
            <div className="col-3">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." name="Search" value = {Search} onChange = {this.HandleChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-info" type="button">Go!</button>
                    </span>
                </div>
            </div>
        );
    }
}
export default Search;