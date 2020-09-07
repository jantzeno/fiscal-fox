# FiscalFox

## Learning Project

The project is for learning web development using the MEAN stack, specifically Angular and Node.js.

## Abstract

The Budge and Expense Tracker, codename Fiscal Fox, is intended to aide communication between the Financial Managers and Program Managers within an organization to accomplish the enterprise’s goals. The web-based single page application (SPA) is intended to replace the distribution and coordination of the enterprise budget execution via copies of a spreadsheet. Managing the budget via copies of a master spreadsheet is inefficient and changing one spreadsheet among dozens of copies invalids the others and requires manual reconciliation before the budget status can be determined. The proposed SPA will allow Financial Managers to create budget items and view the status of the budget and allow Program Managers to record expenses against the budget items and view the status of a programs allotted budget. The SPA will be developed using Angular with TypeScript, Node.js, and SQLite. The application will utilize behavior-driven development using Jasmine and Karma, as well as Protractor for end-to-end (E2E) testing.

## Design Methods

The Budget and Expense Tracker, Fiscal Fox, will be a web-based SPA using HTML5, SCSS, and Angular and Node.js with TypeScript. Information from the application will be stored in an SQLite database on the server-side. The application will be developed using behavior-driven development.

## Use Cases

### Manage Budget

#### Financial Manager

- Manages budget items for a program
- Approves or disapproves unplanned budget item submitted by Program Manager
- Can see status of overall budget

### Manage Expenses

#### Program Manager

- Manages expenses against a budget item
- Submits unplanned expenses to Financial Manager for review
- Can see status of budget for a program

## Angular Design

The main components for each use case are as follows:

### Reporting

- dashboard - for reporting on budget status

### Budget

- budget-details - List of expenses against the budget
- budget-add - Add new budget, with name and amount
- budget-edit - Change name and amount, option to delete, which also deletes all expenses

### Expenses

- expense-details - Likely not needed
- expense-add - Add new expense against the detailed budget, with name and amount
- expense-edit - Change the name and abount, option to delete

Possible, expense options: Date of expense, Method of expense (Transfer, CC. Check)

### Models

- Budget
- Expense
