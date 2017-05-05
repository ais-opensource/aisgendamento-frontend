import React from 'react';
import Agendamento from './Agendamento'
import  AgendamentoForm  from './AgendamentoForm'
import './Agendamentos.css'

class Agendamentos extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      agendamentos: [],
    }
    this.removeAgendamento = this.removeAgendamento.bind(this)
    this.insertAgendamento = this.insertAgendamento.bind(this)
  }


  componentWillMount() {
    const apiURL = 'https://1xti7og4i8.execute-api.us-east-1.amazonaws.com/dev/ais/agendamentos'
    fetch(apiURL, {
    }).then((response) => response.json())
      .then((result) => {
        console.log(result)
        this.setState({ agendamentos: result.agenda})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  removeAgendamento(agendamento) {
    let { agendamentos } = this.state;
    agendamentos.splice(agendamento, 1);
    this.setState({
      agendamentos: agendamentos,
    })
  }

  insertAgendamento(agendamento) {
    this.setState({
      agendamentos: [agendamento, ...this.state.agendamentos]
    })
  }

  renderAgendamentos() {
    const { agendamentos } = this.state;
    console.log('agendamentos', agendamentos)
    if (agendamentos) {
      return agendamentos.map((agendamento, index) => {
        return (
            <Agendamento agendamento={agendamento} key={index} removeAgendamento={this.removeAgendamento} />
        )
      })
    }
  }
  render() {
    return (
      <div className="row">
        <AgendamentoForm insertAgendamento={this.insertAgendamento} />
        <div className="col-md-12">
          {this.renderAgendamentos()}
        </div>
      </div>
    )
  }
}

export default Agendamentos
