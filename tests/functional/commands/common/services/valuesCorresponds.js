function valuesCorresponds (data) {
  const correspond = ({ ref, value, isEmpty }) => {
    isEmpty
      ? cy.get(`[ref-cy="${ref}"]`).should('have.value', '')
      : cy.get(`[ref-cy="${ref}"]`).contains(value)
  }

  data.forEach(correspond)
}

export default valuesCorresponds