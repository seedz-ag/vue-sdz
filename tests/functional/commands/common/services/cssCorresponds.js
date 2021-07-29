function cssCorresponds (data) {
  const correspond = ({ ref, value, has = true }) => {
    has
      ? cy.get(`[ref-cy="${ref}"]`).should('have.class', value)
      : cy.get(`[ref-cy="${ref}"]`).should('not.have.class', value)
  }

  data.forEach(correspond)
}

export default cssCorresponds