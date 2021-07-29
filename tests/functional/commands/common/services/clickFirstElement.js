function clickFirstElement (ref) {
  cy
    .get(`[ref-cy="${ref}"]`)
    .first()
    .click()
}

export default clickFirstElement
