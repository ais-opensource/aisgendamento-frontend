import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addAgendamento } from './actions/agendamento-actions'
import './AgendamentoForm.css'

export class AgendamentoForm extends Component {

  insertAgendamento(event) {
    const { dispatch } = this.props;
    event.preventDefault();
    var cliente = {
      id: event.target.id.value,
      nome: event.target.nome.value,
      telefone: event.target.telefone.value,
      horario: event.target.horario.value,
      experiencia: event.target.experiencia.value,
    }
    dispatch(addAgendamento(cliente, dispatch))
    /*Clean fields*/
    event.target.nome.value = '';
    event.target.telefone.value = '';
    event.target.horario.value = '';
    event.target.experiencia = '';
    event.target.preco = '';

  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 shopping-form-container">
          <form onSubmit={this.insertAgendamento.bind(this)}>
            <div className="form-group">
              <label>Nome</label>
              <input type="text" name="nome" className="form-control" />
            </div>
            <div className="form-group">
              <label >Telefone</label>
              <input type="text" name="telefone" className="form-control" />
            </div>
            <div className="form-group">
              <label >Experiência</label>
              <input type="text" name="experiencia" className="form-control" />
            </div>
            <div className="form-group">
              <label >Horario</label>
              <input type="text" name="horario" className="form-control" />
            </div>
            <div className="form-group">
              <input type="submit" value="Salvar" className="form-control submit-input" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(store => {
  return {
    agendamentos: store.agendamentoReducer,
  }
})(AgendamentoForm)
