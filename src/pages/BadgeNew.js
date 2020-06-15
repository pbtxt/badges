import React from 'react'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import './styles/BadgeNew.css'
import api from '../api'
import PageLoading from '../components/PageLoading'
class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  }
  
  handleChange = (e) => {
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value

    this.setState({
     form: {
        ... this.state.form,
        [e.target.name]: e.target.value,
     }
    })
  }
  handleSubmit = async e => {
    e.preventDefault()
    try {
      await api.badges.create(this.state.form)
      this.setState({loading: false, error: null})
    }catch (error) {
      this.setState({loading:false, error:error})
    }
  }
  render() {
    if (this.state.loading){
      return <PageLoading/>
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'First Name'}
                lastName={this.state.form.lastName || 'Last Name'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'Job Title'}
                email={this.state.form.email || 'your@email.com'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace39656"
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew
