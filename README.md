# Budgetr

## Description

Budgetr is an expense tracker for the modern age. Track your spending by category, and by currency, in one convenient and easy-to-use application.

The production website is deployed [here](https://financeflow-budgetr.netlify.app/).

![Screenshot of deployed webpage](./deployed-app.png)

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [How to use](#how-to-use)
- [Technologies](#technologies)
- [Team](#team)
- [Mark Scheme Compliance](#mark-scheme-compliance)
  - [Technical Acceptance Criteria](#technical-acceptance-criteria)
  - [Concept](#concept)
  - [Deployment](#deployment)
  - [Repository Quality](#repository-quality)
  - [Application Quality](#application-quality)
- [License](#license)

## How to use

- To add an expense, go to the Add Expense screen, input the data and submit the form. The expense will be added to the list of expenses on the Dashboard.
- To view the details of an expense, click on the expense item in the list on the Dashboard.
- You can view graphs of your expenses by category and by month on the Dashboard.

## Technologies

- React
- Vite
- Tailwind CSS
- Node
- Vitest
- React Testing Library
- Graph.js
- Faker.js
- React Router
- React Icons
- React Hot Toast
- Currency.js
- localForage
- Day.js

Exchange rates are provided by [ExchangeRate-API](https://www.exchangerate-api.com/).

## Team

The team that built Budgetr is:

- [Stefan (Stefan4D)](https://github.com/Stefan4D)
- [Syed (Syeduix)](https://github.com/Syeduix)
- [Neneng (N Amelya)](https://github.com/noeamelya/)
- [Shiva (AshivaA)](https://github.com/AshivaA)

## Mark Scheme Compliance

### Technical Acceptance Criteria

| Item                                                                                                                                                                                                                                                      | Evidence                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Satisfies the following code requirements: Application uses React. <br/> Application uses Node. <br/> Application uses at least two libraries, packages, or technologies that we haven't discussed.<br/>Application has GET route(s) for retrieving data. | <br/>Application uses React. <br/>Application uses Node.<br/>Application uses Tailwind CSS, Currency.js, localForage, Day.js, Faker.js, React Hot Toast, and Graph.js. <br/>Application has a GET route for retrieving currency exchange rate data.<br/>Application is interactive (accepts and responds to user input). |

### Concept

| Item                                                                                                                       | Evidence                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application should be a unique and novel idea. <br/> Your group should clearly and concisely articulate your project idea. | The single page brief articulates the core concept of the project and is available read-only [here](https://docs.google.com/document/d/1MC0y5PKDFoR-GZwCd4qMGuBGgXzgv3n2V7F29H-fhOY/edit?usp=sharing) |

### Deployment

| Item                                                                     | Evidence                                                                                                               |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| Application deployed at live URL using Netlify and loads with no errors. | Live application deployed at: https://financeflow-budgetr.netlify.app/ <br/>No visual defects <br /> No console errors |
| Application GitHub URL submitted.                                        | URL submitted                                                                                                          |

### Repository Quality

| Item                                                                                                    | Evidence                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository has a unique name.                                                                           | Unique name used                                                                                                                                                                                                          |
| Repository follows best practices for file structure and naming conventions.                            | Standard file naming conventions used                                                                                                                                                                                     |
| Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.  | All multi-word variables in JavaScript use camelCase<br /><br /> Indentation within code follows best practice <br /><br /> Comments have been included within the files to describe behaviour and/or intent of the code. |
| Repository contains multiple descriptive commit messages.                                               | Multiple commits included demonstrating incremental build of final submission. Each has a clear description of changes made.                                                                                              |
| Repository contains quality README file with description, screenshot, and link to deployed application. | This README document.                                                                                                                                                                                                     |

### Application Quality

| Item                                                           | Evidence                                                                                                                                                           |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Application user experience is intuitive and easy to navigate. | Application user interface matches the wireframe from the original design and uses intuitive elements e.g. click on a transaction/expense item to view the detail. |
| Application user interface style is clean and polished.        | As above                                                                                                                                                           |
| Application is responsive.                                     | Application uses Tailwind CSS to display content in a responsive way using standard breakpoints.                                                                   |

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Released under the MIT license. Full details in [LICENSE](./LICENSE).
