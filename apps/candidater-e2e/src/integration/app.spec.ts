import { getGreeting } from '../support/app.po';

describe('apps-candidater', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to apps-candidater!');
  });
});
