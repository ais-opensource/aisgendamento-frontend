import React from 'react'
import  ExperienciaForm  from './ExperienciaForm'
import Experiencia from './Experiencia'
import './Experiencias.css'

export class Experiencias extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      experiencias: []
    }
    this.updateList = this.updateList.bind(this)
  }

  updateList(experiencia, method) {
    if (method === 'insert') {
      this.setState({
        experiencias: [ experiencia, ...this.state.experiencias]
      })
    } else if (method === 'remove') {
      let experienciasUpdated = this.state.experiencias
      experienciasUpdated.splice(experiencia, 1)
      this.setState({
        experienciasUpdated
      })
    }
  }

  componentDidMount() {
    const apiURL = 'https://ciikdzax85.execute-api.us-east-1.amazonaws.com/dev/ais/agendamentos/experiencias'
    fetch(apiURL, {
    }).then((response) => response.json())
      .then((result) => {
        console.log(result)
        this.setState({ experiencias: result.experiencias})
      })
      .catch((error) => {
        console.log(error)
      })
  }
  _renderExperiencias() {
    return this.state.experiencias.map((experiencia) =>
      <Experiencia experiencia={experiencia} updateList={this.updateList} key={experiencia.id} />
    )
  }

  render() {
    return (
      <div>
        <ExperienciaForm updateList={this.updateList}/>
        {this._renderExperiencias()}
      </div>
    )
  }
}
