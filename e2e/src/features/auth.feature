@FE @app
Feature: Registration and Authentication - Login and Logout

  Scenario: As an unauthenticated user, I can see the login form
    Given I navigate to the login page
    Then I see the login form

  Scenario: As an unauthenticated user, I can see the registration form
    Given I navigate to the login page
    Then I see the login form
    When I click the register button
    Then I navigate to the register page

  Scenario: As an unauthenticated user, I can register
    Given I navigate to the register page
    Then I see the register form
    When I complete the register form
    When I click the register button
    Then I see the login form

  Scenario: As an unauthenticated user, I can login
    Given I navigate to the login page
    Then I see the login form
    When I complete the login form
    When I click the login button
    Then I see the dashboard page

  Scenario: As an authenticated user, I can loout
    Given I am an authenticated user
    When I click the logout link
    Then I see the logout page
