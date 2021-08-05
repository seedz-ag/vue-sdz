function clickLastElement (ref) {
  cy
    .get(`[ref-cy="${ref}"]`)
    .last()
    .click()
}

export default clickLastElement
