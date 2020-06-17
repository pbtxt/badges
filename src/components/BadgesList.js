import React from 'react'
import './styles/BadgesList.css'
import { Link } from 'react-router-dom'
class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl}
          alt="foto"
        />
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <p>
            @{this.props.badge.twitter} <br /> {this.props.badge.jobTitle}
          </p>
        </div>
      </div>
    )
  }
}

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create a new Badge!
          </Link>
        </div>
      )
    }
    console.log(this.props.badges.length)
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <div>
                <li key={badge.id}>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}`}
                  >
                    <BadgesListItem badge={badge} />
                  </Link>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BadgesList
