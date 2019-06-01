import React, { Component } from 'react'

export default class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  textInput = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Create new item: ${this.textInput.current.value}`);
  }

  render() {
    return (
      <form className="input-group my-3" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Add new toto-Item"
          ref={this.textInput}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            <i className="fas fa-ülus">&nbsp;Add item</i></button></div>
      </form>
    )
  }
}
