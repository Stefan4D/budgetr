<h1 align="center">
  Budgetr
</h1>

<h4 align="center">
  MVP expense tracker application with React + Vite
</h4>


## Description
Budgetr is an expense tracker for the modern age.  Track your spending by category, and by currency, in one convenient and easy-to-use application.

The production website is deployed [here](https://github.com/Stefan4D/budgetr/).

![Screenshot of deployed webpage](./src/assets/Logo.png)


## Example

[Simple Electron application](example) yet capable of handling pretty much any available video. Run:

```Terminal
git clone https://github.com/Stefan4D/budgetr/ 
npm install
npm run dev
```

Package includes prebuilt binaries for all major platforms so no need to setup compilers.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



## Applications using 

* [API/jQuery](https://api.jquery.com/)
* [React](https://legacy.reactjs.org/)
* [Vite](https://vitejs.dev/guide/)
* [Tailwind CSS](tailwindcomponents.com)
* [Node](https://nodejs.org/en)

Feel free to PR your own.

## Team

The team that built Budgetr is:

- [Stefan (Stefan4D)](https://github.com/Stefan4D)
- [Syed (Syeduix)](https://github.com/Syeduix)
- [Neneng (N Amelya)](https://github.com/noeamelya/)
- [Shiva (AshivaA)](https://github.com/AshivaA)


### Technical Acceptance Criteria

| Item                                                                                                                                                                                                                                                                                                                                                           | Evidence                                                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Satisfies the following code requirements: <br/>Application uses React. <br/>Application uses Node.<br/>Application uses at least two libraries, packages, or technologies. <br/>Application has both GET and POST routes for retrieving and adding new data.<br/>Application is interactive (accepts and responds to user input). <br/>Application uses Tailwind CSS <br/>Application accepts user input data currently. |

### Concept

| Item                                                                  | Evidence                                                                                                                                                                                              |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application should be a unique and novel idea.                        |  Your group should clearly and concisely articulate your project idea. | The single page brief articulates the core concept of the project and is available read-only [here](https://docs.google.com/document/d/1MC0y5PKDFoR-GZwCd4qMGuBGgXzgv3n2V7F29H-fhOY/edit?usp=sharing) |


### Deployment

| Item                              | Evidence                                                             |
| --------------------------------- | -------------------------------------------------------------------- |
| Application deployed at live URL using Netlify | Live application deployed at: https://github.com/Stefan4D/budgetr |
| Application loads with no errors. | No visual defects <br /> No console errors                           |
| Application GitHub URL submitted. | URL submitted                                                        |

### Repository Quality

| Item                                                                                                    | Evidence                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository has a unique name.                                                                           | Unique name used                                                                                                                                                                                                          |
| Repository follows best practices for file structure and naming conventions.                            | Standard file naming conventions used                                                                                                                                                                                     |
| Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.  | All multi-word variables in JavaScript use Taailwind<br /><br /> Indentation within code follows best practice <br /><br /> Comments have been included within the files to describe behaviour and/or intent of the code. |
| Repository contains multiple descriptive commit messages.                                               | Multiple commits included demonstrating incremental build of final submission. Each has a clear description of changes made.                                                                                              |
| Repository contains quality README file with description, screenshot, and link to deployed application. | This README document.                                                                                                                                                                                                     |

### Application Quality

| Item                                                           | Evidence                                                                                                                                            |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Application user experience is intuitive and easy to navigate. | Application user interface matches the wireframe from the original design and uses intuitive elements e.g. click on a history item to search again. |
| Application user interface style is clean and polished.        | As above                                                                                                                                            |
| Application is responsive.                                     | Application uses the Tailwind CSS to display content in a responsive way.                                                                  |

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Released under the MIT license. Full details in [LICENSE](./LICENSE).