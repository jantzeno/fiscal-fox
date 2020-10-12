# FiscalFox

## Learning Project

The project is for learning web development using the MEAN stack, mostly Angular and Node.js.

## Tested Using

- Node.js, v14.8.0
- npm, v6.14.7

## Setup

1. Clone this repo and the [fiscal-fox-server repo](https://github.com/jantzeno/fiscal-fox-server)

2. Install the npm packages

```bash
npm install
```

3. Run the fiscal-fox-server and fiscal-fox Angular server

- Fiscal-Fox

```bash
npm run start
```

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/), Cucumber, and Chai.

## [Fiscal-Fox-Server](https://github.com/jantzeno/fiscal-fox-server)

Required backend

```bash
npm install
npm run mock-db
npm start
```

## Abstract

The Budge and Expense Tracker, codename Fiscal Fox, is intended to aide communication between the Financial Managers and Program Managers within an organization to accomplish the enterprise’s goals. The web-based single page application (SPA) is intended to replace the distribution and coordination of the enterprise budget execution via copies of a spreadsheet. Managing the budget via copies of a master spreadsheet is inefficient and changing one spreadsheet among dozens of copies invalids the others and requires manual reconciliation before the budget status can be determined. The proposed SPA allows Financial Managers to create budget items and view the status of the budget and allow Program Managers to record expenses against the budget items and view the status of a programs allotted budget. The SPA will be developed using Angular with TypeScript, Node.js, and SQLite. The application will utilize behavior-driven development using Jasmine and Karma, as well as Protractor for end-to-end (E2E) testing.

## Design Methods

The Budget and Expense Tracker, Fiscal Fox, is a web-based SPA using HTML5, SCSS, and Angular, NgRx, and Node.js with TypeScript. Information from the application will be stored in an SQLite database on the server.

## Use Cases

### Manage Budget

#### Financial Manager

- Manages budget items for a program
- Can see status of overall budget

### Manage Expenses

#### Program Manager

- Manages expenses against a budget item
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

- expense-add - Add new expense against the detailed budget, with name and amount
- expense-edit - Change the name and abount, option to delete
- expense-details - Not used, but reserved for future use. Could show additional information such as user and datetime information

Possible, expense options: Date of expense, Method of expense (Transfer, CC. Check), User who logged the expense

### Auth

- login
- logout
- register

### User

- details - Not yet used

### Models

- Budget
- Expense
- User
