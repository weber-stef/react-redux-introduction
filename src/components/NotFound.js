import React, { Component } from 'react';
import Header from "./Header";

export default class NotFound extends Component {
  componentDidMount() {
    document.title = "Error 404, baby - what will you do now?"
  }
  render() {
    return (
      <div className="container">
        <Header tagline="404 -  Page not found!" />
        <div className="alert alert-warning">
          <strong>
            Who can it be now? ..<br />
          </strong>
          The requested page could not be found.
      </div>
      </div>
    )
  }
}
