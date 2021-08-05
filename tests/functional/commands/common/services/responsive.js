function responsive (type) {
  const viewports = {
    desktop: [ 1200, 1000 ],
    tablet: [],
    mobile: [ 360, 640 ]
  }

  const [ w, h ] = viewports[type]

  cy.viewport(w, h)
}

export default responsive