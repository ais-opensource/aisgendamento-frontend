import React from 'react'
import { connect } from 'react-redux'
import { removeExperiencia } from './actions/experiencia-actions'
import './Experiencia.css'

export class Experiencia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }
  removeExperiencia() {
     const { dispatch, updateList, experiencia } = this.props;

    dispatch(removeExperiencia(experiencia, dispatch))
    updateList(experiencia, 'remove')
  }

  editExperiencia() {
    this.setState({ editing: true })
  }

  render() {
    const { experiencia } = this.props
    const { editing } = this.state
    if (editing) {
      return ('Editandoo')
    }
    return (
      <div className="row experiencia-container">
        <div>
          <div className="experiencia-nome">
            <i className="fa fa-user place-icon"></i> {experiencia.nome}
          </div>
          <div className="preco-container">
            <span className="preco"><i className="fa fa-clock-o place-icon"></i> {experiencia.tempoDuracao}</span>
          </div>
          <div>
            {experiencia.preco}
          </div>
          <div>
            <span>Nível adrenalina </span> { experiencia.nivelAdrenalina  }
          </div>
          <div>
            { experiencia.isInterativo ? <span>É INTERATIVO</span> : <span>NÃO É INTERATIVO </span>}
          </div>
          <div>
            <span>Descricao</span>{ experiencia.descricao }
          </div>
          <br />
          <button className="btn btn-default" onClick={this.removeExperiencia.bind(this)}>Remover</button>
          <button className="btn btn-default" onClick={this.editExperiencia.bind(this)} disabled>Editar</button>
        </div>
      </div>
    )
  }
}

export default connect()(Experiencia)
