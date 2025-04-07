import React from 'react'
import CourseCard from './index'

describe('<CourseCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CourseCard />)
  })
})