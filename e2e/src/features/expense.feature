@FE @app
Feature: Manage Expenses

Background:
Given I am an authenticated expense user

  Scenario: User clicks on new expense button to navigate to the new expense form
    Given The budget is displayed
      When I click the new expense button
      Then I see the new expense form

  Scenario: User creates a new expense
    Given I navigate to the new expense form
    When I complete the new expense form
    Then I see the new expense in the budget

  Scenario: User edits a expense
    Given I navigate to the edit expense form
    Then I see the edit expense form
    When I complete the edit expense form
    Then I see the updated expense in the budget

  Scenario: User deletes a expense
    Given I navigate to the edit expense form to delete a expense
    When I click the delete expense button
    Then The expense is deleted

