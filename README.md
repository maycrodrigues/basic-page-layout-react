# Basic Page Layout - React

A boilerplate project for creating React applications with TypeScript, Tailwind CSS, ESLint, and Prettier, pre-configured for a productive development workflow.

## Getting Started

### Prerequisites

*   Node.js (v16 or later recommended - find it at [https://nodejs.org/](https://nodejs.org/))
*   npm (comes with Node.js) or Yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/maycrodriguess/basic-page-layout-react.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd basic-page-layout-react
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
    (or `yarn install` if you prefer Yarn)

### Running the Development Server

1.  Start the server:
    ```bash
    npm start
    ```
    (or `yarn start`)
2.  Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will automatically reload if you make edits.

## Available Scripts

In the project directory, you can run (using `npm run <script>` or `yarn <script>`):

*   `start`: Runs the app in development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    The page will reload if you make edits. You will also see any lint errors in the console.

*   `build`: Builds the app for production to the `build` folder.
    It correctly bundles React in production mode and optimizes the build for the best performance.
    The build is minified and the filenames include the hashes. Your app is ready to be deployed!

*   `test`: Launches the test runner in interactive watch mode.
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

*   `lint`: Lints the codebase using ESLint to identify and fix stylistic and code quality issues.
    ```bash
    npm run lint
    ```
    (or `yarn lint`)

*   `eject`: **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
    If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## Key Features

*   **React (v18+):** A JavaScript library for building user interfaces. (Typically uses React 18 with latest Create React App)
*   **TypeScript (v4+):** A typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.
*   **Tailwind CSS (v3):** A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center` and `rotate-90` that can be composed to build any design, directly in your markup. Integrated with PostCSS and Autoprefixer.
*   **ESLint:** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript and TypeScript. Configured with the Airbnb style guide, and plugins for React, TypeScript, Prettier, JSX A11y, and React Hooks for robust linting.
*   **Prettier:** An opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.
*   **React Router DOM (v6):** For declarative routing in React applications, enabling navigation and view management.
*   **Web Vitals:** For measuring crucial performance metrics in your application (e.g., First Contentful Paint (FCP), Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS)).
*   **Jest & React Testing Library:** For writing and running unit and integration tests.
*   **React Scripts (Create React App):** Handles the build process, development server, and other scripts.

## Folder Structure

```
basic-page-layout-react/
├── README.md
├── node_modules/
├── package.json
├── public/
│   ├── index.html        # Main HTML page template
│   └── ...               # Other static assets (favicon, manifest.json, etc.)
├── src/
│   ├── index.tsx         # Main application entry point, renders the root React component
│   ├── index.css         # Global styles / Tailwind CSS base, components, and utilities
│   ├── App.tsx           # Main application component (example)
│   ├── components/       # Reusable UI components (e.g., buttons, cards)
│   ├── pages/            # Components representing distinct pages/views
│   ├── reportWebVitals.ts # Setup for measuring web vitals
│   ├── react-app-env.d.ts # TypeScript definitions for Create React App
│   └── ...               # Other source files (tests, custom hooks, services, etc.)
├── tailwind.config.js    # Tailwind CSS configuration file
├── tsconfig.json         # TypeScript compiler options
└── .eslintrc.json      # ESLint configuration file
```

## Learn More

*   [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
*   [React documentation](https://reactjs.org/)
*   [TypeScript documentation](https://www.typescriptlang.org/docs/)
*   [Tailwind CSS documentation](https://tailwindcss.com/docs/)
*   [ESLint documentation](https://eslint.org/docs/user-guide/)
*   [Prettier documentation](https://prettier.io/docs/en/)
*   [React Router documentation](https://reactrouter.com/docs/en/v6)

---
*Author: Mayc Rodrigues (maycrodriguess@gmail.com)*
*Repository: [https://github.com/maycrodriguess/basic-page-layout-react.git](https://github.com/maycrodriguess/basic-page-layout-react.git)*
