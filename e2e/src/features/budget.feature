@FE @app
Feature: Manage Budgets

Background:
Given I am an authenticated budget user

  Scenario: User clicks on new budget button to navigate to the new budget form
    Given The dashboard is displayed
    When I click the new budget button
    Then I see the new budget form

  Scenario: User creates a new budget
    Given I navigate to the new budget form
    When I complete the new budget form
    Then I see the new budget on the dashboard

  Scenario: User edits a budget
    Given I navigate to the edit budget form
    Then I see the edit budget form
    When I complete the edit budget form
    Then I see the updated budget on the dashboard

  Scenario: User deletes a budget
    Given I navigate to the edit budget form to delete a budget
    When I click the delete budget button
    Then The budget is deleted
