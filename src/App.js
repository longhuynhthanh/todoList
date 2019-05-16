import React, { Component } from 'react';
import Title from './components/title';
import Controls from './components/controls';
import Form from './components/form';
import List from './components/list';
import {connect} from 'react-redux';

class App extends Component {
  constructor(drops) {
    super(drops);
    this.state = {
      editTask: null
    };
  }

  render() {
    let { isShowForm } = this.props;
    let ShowForm = isShowForm ? <Form/> : '';
    return (
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        {/* CONTROL (SEARCH + SORT + ADD) : START */}
        <Controls
          ShowForm={this.ShowForm}
        />
        {/* CONTROL (SEARCH + SORT + ADD) : END */}
        {/* FORM : START */}
        {ShowForm}
        {/* FORM : END */}
        {/* LIST : START */}
        <List/>
        {/* LIST: END */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isShowForm: state.isShowForm
  };
};

export default connect(mapStateToProps, null)(App);
