import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badge.css'
class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="logo" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer"> #platziconf </div>
      </div>
    )
  }
}

export default Badge
