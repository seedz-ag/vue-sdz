function visible (ref) {
  cy
    .get(`[ref-cy="${ref}"]`)
    .should('be.visible')
}

export default visible