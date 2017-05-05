export function addAgendamento(agendamento, dispatch) {
  fetch('https://1xti7og4i8.execute-api.us-east-1.amazonaws.com/dev/ais/agendamentos', {
    method: 'post',
    body: JSON.stringify(agendamento),
  }).then((response) => {
    dispatch(addAgendamentoDone(response.body))
  }).catch((error) => {
    dispatch(addAgendamentoError(error))
  })
  return {
    type: 'ADD_AGENDAMENTO_PENDING',
  }
}

export function deleteAgendamento(agendamento, dispatch) {
  const deleteURL = `https://1xti7og4i8.execute-api.us-east-1.amazonaws.com/dev/ais/agendamentos?id=${agendamento.id}`
  fetch(deleteURL, {
    method: 'delete',
    headers: { "Content-Type" : "application/x-www-form-urlencoded" }
    })
    .then((response) => {
      dispatch(removeAgendamentoDone(response))
    })
    .catch((error) => {
      dispatch(removeAgendamentoError(error))
  })
  return {
    type: 'REMOVE_AGENDAMENTO_PENDING',
  }
}

function addAgendamentoDone(message) {
  return {
    type: 'ADD_AGENDAMENTO_FULFILLED',
    payload: message,
  }
}

function addAgendamentoError(message) {
  return {
    type: 'ADD_AGENDAMENTO_ERROR',
    payload: message,
  }
}


function removeAgendamentoDone(message) {
  return {
    type: 'REMOVE_AGENDAMENTO_FULFILLED',
    payload: message,
  }
}

function removeAgendamentoError(error) {
  return {
    type: 'REMOVE_AGENDAMENTO_ERROR',
    payload: error,
  }
}
