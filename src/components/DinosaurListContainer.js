import React, { Component } from 'react'
import { getDinos } from '../actions'
import { connect } from 'react-redux'
import DinosaurusList from './DinosaurusList'

class DinosaurListContainer extends Component {

  componentDidMount() {
    this.props.getDinos()
  }

  render() {
    return (
      <DinosaurusList 
      dinosaurs={this.props.dinosaurs}
      />
    )
  }
}

const mapStateToProps = state => ({
  dinosaurs: state.dinosaurs,
})

export default connect(mapStateToProps, {getDinos})(DinosaurListContainer)
