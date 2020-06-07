import React from 'react'
import NavBar from '../components/NavBar'
import confLogo from '../images/logo.svg'

class Badges extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="Badges">
          <div className="Badge__hero">
            <div className="Badges__container">
              <img className="" src={confLogo} alt="conf-logo" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Badges;