import customMessages from './customMessages.js'

function sameAs (form, field, value) {
  return form[field.name] === form[value] ? '' : customMessages.sameAs
}

function notSameAs (form, field, value) {
  return form[field.name] !== form[value] ? '' : customMessages.notSameAs
}

function isEqual (form, field, value) {
  return form[field.name] === value ? '' : 'cuuuuuuuuu'
}

export default {
  sameAs,
  notSameAs,
  isEqual
}
