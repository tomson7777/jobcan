import { getGreeting } from '../support/app.po';

describe('jobber', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to jobber!');
  });
});
