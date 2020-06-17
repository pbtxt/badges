import React from 'react'
import badgeHeader from '../../src/images/badge-header.svg'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'

class BadgeDetails extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })
    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    if (this.state.error) {
      return <PageError />
    }

    const badge = this.state.data
    console.log('data: ' + this.state.data.lastName)
    return (
      <div>
        <div className="BadgeNew__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={badgeHeader} alt="" />
              </div>
              <div className="col-6">
                <h1>
                  {' '}
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>

                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeDetails
