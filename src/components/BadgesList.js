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

function BadgesList(props) {
  const badges = props.badges
  const [query, setQuery] = React.useState('')
  const filterBadges = badges.filter((badges) => {
    return `${badges.firstName} ${badges.lastName}`.toLowerCase().includes(query.toLowerCase())
  })
  if (filterBadges.length === 0) {
    return (
      <div>
        <div className="formn">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create a new Badge!
        </Link>
      </div>
    )
  }
  return (
    <div className="BadgesList">
      <div className="formn">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filterBadges.map((badge) => {
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

export default BadgesList
