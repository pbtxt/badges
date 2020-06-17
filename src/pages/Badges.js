import React from 'react'
import confLogo from '../images/logo.svg'
import './styles/Badges.css'
import BadgesList from '../components/BadgesList'
import { Link } from 'react-router-dom'
import api from '../api'
import PageLoading from '../components/PageLoading.js'
import PageError from '../components/PageError'

class Badges extends React.Component {
  state = {
    loading: true, 
    error: null,
    data: undefined,
  };

  componentDidMount () {
    this.fetchData()
    this.intervalId =  setInterval((this.fetchData, 5000));
  }

  //para apagar lo que se estaba haciendo arriba que es recargar siempre para actualizar los datos 
  
  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})
    try {
      const data = await api.badges.list()
      this.setState({loading: false, data: data})
    } catch (error) {
      this.setState({loading:false, error: error})
    }
  }

  render() {
    // !this.state.data === this.state.data===undefined
    if(this.state.loading === true && !this.state.data){
      return <PageLoading />
    }
    
    if(this.state.error) {
      return <PageError error={this.state.error} />
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badge__hero">
            <div className="Badges__container">
              <img className="" src={confLogo} alt="conf-logo" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badge_buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges
