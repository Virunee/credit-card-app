import React from 'react'
import InputForm from '../components/Form'

class InputPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return <InputForm onSubmit={this.submit} />
  }
}

export default InputPage;