import React from 'react'

class BadgeForm extends React.Component {
  //state = {}

  handleClick = (e) => {
    console.log('the button was click')
  }
  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(this.state)
  // }
  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form >
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              id=""
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              id=""
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              type="email"
              className="form-control"
              id=""
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              id=""
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              id=""
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>
          <button
            type="button"
            onClick={this.props.onSubmit}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default BadgeForm
