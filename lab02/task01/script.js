const validateAndSubmit = () => {
  const form = document.getElementById('form')
  const inputs = form.querySelectorAll('input')

  let isValid = true

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.classList.add('invalid')
      isValid = false
    } else {
      input.classList.remove('invalid')
    }
  })

  if (isValid) {
    openNewWindow()
  }
}

const openNewWindow = () => {
  const name = document.getElementById('name').value
  const group = document.getElementById('group').value
  const phone = document.getElementById('phone').value
  const idCard = document.getElementById('idCard').value
  const faculty = document.getElementById('faculty').value

  const info =
    'Прізвище та ініціали: ' +
    name +
    '\n' +
    'Група: ' +
    group +
    '\n' +
    'Телефон: ' +
    phone +
    '\n' +
    'ID-картка: ' +
    idCard +
    '\n' +
    'Факультет: ' +
    faculty

  window.open('', '_blank').document.write('<pre>' + info + '</pre>')
}
