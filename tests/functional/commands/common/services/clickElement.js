function clickElement (ref) {
  cy
    .get(`[ref-cy="${ref}"]`)
    .click()
}

export default clickElement
