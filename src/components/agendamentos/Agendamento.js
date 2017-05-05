import React from 'react'
import { connect } from 'react-redux'
import { deleteAgendamento } from './actions/agendamento-actions'
import './Agendamento.css'

export class Agendamento extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }
  removeAgendamento() {
    // const { dispatch, agendamento } = this.props;
    // const { removeAgendamento } = this.props;
    // dispatch(deleteAgendamento(agendamento, dispatch))
    // removeAgendamento(agendamento)
  }

  editAgendamento() {
    this.setState({ editing: true })
  }

  render() {
    const { agendamento } = this.props
    const { editing } = this.state
    if (editing) {
      return ('Editandoo')
    }
    return (
      <div className="row shopping-container">
        <div>
          <div className="store-name">
            <i className="fa fa-user place-icon"></i> {agendamento.nome}
          </div>
          <div className="place">
            <span className="city"><i className="fa fa-clock-o place-icon"></i> {agendamento.horario}</span>
          </div>
          <br />
          <button className="btn btn-default" onClick={this.removeAgendamento.bind(this)}>Remover</button>
          <button className="btn btn-default" onClick={this.editAgendamento.bind(this)} disabled>Editar</button>
        </div>
      </div>
    )
  }
}

 export default connect()(Agendamento)
