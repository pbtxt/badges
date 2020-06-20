import React from 'react'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
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

  handleDeleteBadge = async (e) => {
    this.setState({ loading: true }, { error: null })
    try {
      await api.badges.remove(this.props.match.params.badgeId)
      this.setState({ loading: false })
      this.props.history.push('/badges');
    } catch (e) {
      this.setState({ loading: false }, { error: e })
    }
  }
  handleCloseModal = (e) => {
    this.setState({ modalIsOpen: false })
  }

  handleOpenModal = (e) => {
    this.setState({ modalIsOpen: true })
  }
  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    if (this.state.error) {
      return <PageError />
    }

    console.log('data: ' + this.state.data.lastName)
    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        badge={this.state.data}
        onDeleteBadge={this.handleDeleteBadge}
      />
    )
  }
}

export default BadgeDetailsContainer
