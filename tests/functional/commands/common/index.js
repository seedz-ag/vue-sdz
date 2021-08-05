import * as services from './services/index.js'

Cypress.Commands.add('common', (fn, ...args) => {
  const options = {
    'element.visible': services.visible,
    'element.click': services.clickElement,
    'element.first.click': services.clickFirstElement,
    'element.last.click': services.clickLastElement,
    'values.corresponds': services.valuesCorresponds,
    'css.corresponds': services.cssCorresponds,
    'app.responsive': services.responsive
  }

  if (!options[fn]) throw new Error(`Invalid function: ${fn}`)

  return options[fn](...args)
})
