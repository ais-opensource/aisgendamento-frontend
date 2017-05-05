import React from 'react'
import { connect } from 'react-redux'
import  SimpleCurrencyInput  from 'react-simple-currency'
import StarRatingComponent from 'react-star-rating-component';
import { addExperiencia } from './actions/experiencia-actions'
import '../agendamentos/AgendamentoForm.css'


export class ExperienciaForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      time: null,
      preco: '',
      adrenalina: 0,
    }
  }

  onStarClick(next, prev, name) {
    this.setState({ adrenalina: next })
  }
  _renderHoras() {
    let horas = [];
    for (let i = 0; i <= 24; i++) {
      if (i < 10) {
        horas.push('0' + i);
      } else {
        horas.push(i);
      }
    }
    return horas.map((hora, index) => {
      return <option key={index} value={hora}>{hora}</option>
    })
  }

  setInteracao() {
    this.setState({})
  }

  _renderMinutos() {
    let minutos = []
    for (let i = 0; i <= 60; i++) {
      if (i < 10) {
        minutos.push('0' + i)
      } else {
        minutos.push(i)
      }
    }
    return minutos.map((minuto, index) => {
      return <option key={index} value={minuto}>{minuto}</option>
    })
  }

  _renderSegundos() {
    let segundos = []
    for (let i = 0; i <= 60; i++) {
      if (i < 10){
        segundos.push('0' + i)
      } else {
        segundos.push(i)
      }
    }
    return segundos.map((segundo, index) => {
      return <option key={index} value={segundo}>{segundo}</option>
    })
  }

  _renderGeneros() {
    const generos = ['fps', 'aventura', 'terror',
    'puzzle', 'arcade', 'ação', 'horror', 'turismo']
    return generos.map((genero, index) => {
      return ( <option value={genero} key={index}>{genero}</option>)
    })
  }

  insertExperiencia(event) {
    const { dispatch, updateList } = this.props
    event.preventDefault()
    const tempoDuracao = `${event.target.horas.value}:${event.target.minutos.value}:${event.target.segundos.value}`
    const experiencia = {
      nome: event.target.nome.value,
      genero: event.target.genero.value,
      tempoDuracao: tempoDuracao,
      preco: this.state.preco.value,
      isInterativo: event.target.interacao.checked,
      nivelAdrenalina: this.state.adrenalina,
      descricao: event.target.descricao.value,
    }
    //TODO: add some cleanup functions to all the forms (vr. 1.01)
    event.target.nome.value = ''
    event.target.genero.value = ''
    event.target.preco.value = ''
    event.target.interacao.checked = false
    event.target.descricao.value = ''
    this.state.adrenalina = 0

    dispatch(addExperiencia(experiencia, dispatch))
    updateList(experiencia, 'insert')
  }

  setPrice(raw, value) {
    this.setState({
      preco: {
        value: value,
        raw: raw
      }
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 shopping-form-container">
          <h1> Insira uma nova experiência </h1>
          <form onSubmit={this.insertExperiencia.bind(this)}>
            <div className="form-group">
              <label>Nome</label>
              <input type="text" name="nome" className="form-control" />
            </div>
            <div className="form-group">
              <label >Gênero</label>
              <select name="genero" className="form-control">
                {this._renderGeneros()}
              </select>
            </div>
            <label>Tempo de duração</label>
            <div className="time-picker">
              <div >
                <label >Horas</label>
                <select className="form-control" name="horas">
                  {this._renderHoras()}
                </select >
              </div>
              <div >
                <label >Minutos</label>
                <select className="form-control" name="minutos">
                  {this._renderMinutos()}
                </select >
              </div>
              <div >
                <label >Segundos</label>
                <select className="form-control" name="segundos">
                  {this._renderSegundos()}
                </select >
              </div>
            </div>
            <div className="form-group">
              <label >Preço</label>
              <SimpleCurrencyInput
                value={this.state.preco.raw}
                className='form-control'
                precision={2}
                separator=','
                delimiter='.'
                unit='R$'
                onInputChange={this.setPrice.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>Marque essa caixa se houver interação</label>
              <input type="checkbox" name="interacao" onChange={this.setInteracao.bind(this)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Nível de Adrenalina</label>
            </div>
            <div className="rating-component">
              <StarRatingComponent
                    name="adrenalina"
                    starCount={5}
                    onStarClick={this.onStarClick.bind(this)}
                    className="star"
              />
            </div>
            <div className="form-group">
              <label>Descrição</label>
              <textarea className="form-control" name="descricao"></textarea>
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

export default connect()(ExperienciaForm)
