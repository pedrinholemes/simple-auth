document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault()
  console.log(this.checkValidity())
})

document.querySelectorAll('input').forEach((e) => {
  e.addEventListener('change', () => {
    if (e.value.length > 0) e.classList.add('filled')
    else e.classList.remove('filled')
  })
  e.addEventListener('beforeinput', () => {
    if (e.checkValidity()) {
      e.classList.add('valid')
      e.classList.remove('invalid')
    } else {
      e.classList.remove('valid')
      e.classList.add('invalid')
    }
  })
})
document.querySelectorAll('select').forEach((e) => {
  e.addEventListener('change', () => {
    if (e.value.length > 0) e.classList.add('filled')
    else e.classList.remove('filled')
  })
  e.addEventListener('beforeinput', () => {
    if (e.checkValidity()) {
      e.classList.add('valid')
      e.classList.remove('invalid')
    } else {
      e.classList.remove('valid')
      e.classList.add('invalid')
    }
  })
})
document.querySelectorAll('textarea').forEach((e) => {
  e.addEventListener('change', () => {
    if (e.value.length > 0) e.classList.add('filled')
    else e.classList.remove('filled')
  })
  e.addEventListener('beforeinput', () => {
    if (e.checkValidity()) {
      e.classList.add('valid')
      e.classList.remove('invalid')
    } else {
      e.classList.remove('valid')
      e.classList.add('invalid')
    }
  })
})
