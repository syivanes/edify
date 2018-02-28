import React from 'react';

class ClassnotesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const handleSubmit = (event) => {
  //   // const data = new FormData(event.target);
  //   // const title = data.title;
  //   // const content = data.content;
  // }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">enter classnote title</label>
        <input id="title" name="title" type="text" />

        <label htmlFor="content">enter classnote content</label>
        <input id="content" name="content" type="content" />

        <button>Submit</button>
      </form>
    )
  }

}

export default ClassnotesForm;