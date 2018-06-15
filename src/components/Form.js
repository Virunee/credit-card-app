import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from './DatePicker'

let InputForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="title">Title</label>
    <Field name="title" component="select">
        <option />
        <option value="mr">Mr</option>
        <option value="mrs">Mrs</option>
        <option value="miss">Miss</option>
        <option value="ms">Ms</option>
    </Field>
  </div>
  <div>
    <label htmlFor="firstName">First Name</label>
    <Field name="firstName" component="input" type="text" />
  </div>
  <div>
    <label htmlFor="lastName">Last Name</label>
    <Field name="lastName" component="input" type="text" />
  </div>
    <DatePicker/>
  <button type="submit">Submit</button>
</form>
}

InputForm = reduxForm({
  // a unique name for the form
  form: 'input'
})(InputForm)

export default InputForm