@FE @app
Feature: Registration and Authentication, Login and Logout

  Scenario: As an unauthenticated user, I can see the login form
    Given I navigate to the login page
    Then I see the login form

  Scenario: As an unauthenticated user, I can see the registration form
    Given I navigate to the login page
    Then I see the login form
    When I click the register button
    Then I navigate to the registration page


