import React, { Component } from 'react'
import { getDinos } from '../actions'
import { connect } from 'react-redux'
import DinosaursList from './DinosaursList'

class DinosaurListContainer extends Component {

  componentDidMount() {
    this.props.getDinos()
  }

  render() {
    return (
      <DinosaursList 
      dinosaurs={this.props.dinosaurs}
      />
    )
  }
}

const mapStateToProps = state => ({
  dinosaurs: state.dinosaurs,
})

export default connect(mapStateToProps, {getDinos})(DinosaurListContainer)
