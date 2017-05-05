export function addExperiencia(experiencia, dispatch) {
  fetch('https://ciikdzax85.execute-api.us-east-1.amazonaws.com/dev/ais/agendamentos/experiencias', {
    method: 'post',
    body: JSON.stringify(experiencia),
  }).then((response) => {
    dispatch(addExperienciaDone('adicionado com sucesso'))
  }).catch((error) => {
    dispatch(addExperienciaError(error))
  })
  return {
    type: 'ADD_EXPERIENCIA_PENDING',
  }
}

function addExperienciaDone(message) {
  return {
    type: 'ADD_EXPERIENCIA_FULLFILED',
    payload: message
  }
}

function addExperienciaError(error) {
  return {
    type: 'ADD_EXPERIENCIA_ERROR',
    payload: error
  }
}

/*remover*/

export function removeExperiencia(experiencia, dispatch) {
  const deleteURL = `https://ciikdzax85.execute-api.us-east-1.amazonaws.com/dev/ais/agendamentos/experiencias?id=${experiencia.id}`
  fetch(deleteURL, {
    method: 'delete',
    headers: { "Content-Type" : "application/x-www-form-urlencoded" }
    })
    .then((response) => {
      dispatch(removeExperienciaDone('removido com sucesso'))
    })
    .catch((error) => {
      dispatch(removeExperienciaError(error))
  })
  return {
    type: 'REMOVE_EXPERIENCIA_PENDING',
  }
}

function removeExperienciaDone(message) {
  return {
    type: 'REMOVE_EXPERIENCIA_FULFILLED',
    payload: message,
  }
}

function removeExperienciaError(error) {
  return {
    type: 'REMOVE_EXPERIENCIA_ERROR',
    payload: error,
  }
}
