import React, { Component } from "react";
import { render } from "react-dom";

import { samples } from "./samples";
import Form from "../src";

class App extends Component {
  constructor(props) {
    super(props);
    // initialize state with Simple data sample

    this.state = {
      forms: {},
      activeFormId: undefined
    };

    this.loadForms = this.loadForms.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.switchForm = this.switchForm.bind(this);
  }

  componentDidMount() {
    this.loadForms();
  }

  loadForms() {

    // const {schema, uiSchema, formData, validate} = samples.Simple;

    this.setState({
      forms: {
        simple: samples.Simple,
        large: samples.Large
      },
      activeFormId: "simple"
    });

  }

  submitForm(data) {
    console.log(data);
  }

  switchForm(formId) {
    this.setState({
      activeFormId: formId
    });
  }

  render() {
    const {
      forms,
      activeFormId
    } = this.state;

    const form = activeFormId !== undefined ? forms[activeFormId] : null;

    return (
      <div className="container-fluid">
        <a href="#" onClick={ this.switchForm.bind(this, "large") }>Large</a>
        <a href="#" onClick={ this.switchForm.bind(this, "simple") }>Simple</a>
        <div className="col-sm-5">
          {!form ? null :
            <Form
              schema={form.schema}
              uiSchema={form.uiSchema}
              formData={form.formData}
              onSubmit={ this.submitForm }
            />
          }
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
