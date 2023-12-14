# Node.js Template with TypeScript

![banner](https://github.com/TobiasGleiter/nodejs-ts-babel-express-nodemon-template/blob/main/docs/images/banner.png)

## Overview

This project serves as a template for building robust and scalable applications using Node.js and TypeScript. It is designed to streamline the development process by providing a ready-to-use setup that includes essential tools and configurations such as Babel, Nodemon, Jest, ESLint, and Husky.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

```sh
git clone https://github.com/TobiasGleiter/nodejs-ts-babel-express-nodemon-template
cd nodejs-ts-babel-express-nodemon-template
```

2. **Install dependencies:**

```sh
npm install
```

## Usage

### Development

Start the development server with hot-reloading enabled:

```sh
npm run dev
```

### Testing

Run tests using Jest:

```sh
npm test
```

### Linting

Analyze your code with ESLint to catch and fix potential issues:

```sh
npm run lint
```

## Features

### TypeScript

Leverage the power of static types with TypeScript to write more predictable and maintainable code.

### Babel

Utilize Babel to transpile your TypeScript code to ensure compatibility across different Node.js versions.

### Nodemon

Nodemon monitors changes in your source files and automatically restarts the server, providing a seamless development experience.

### Jest

Implement unit testing with Jest to ensure the reliability and stability of your application.

### ESLint

Ensure your code adheres to consistent style and best practices by using ESLint for static code analysis.

### Husky

Husky is integrated for Continuous Integration (CI), ensuring that all commits and pushes adhere to the quality standards set by your test suites, linters, and code formatters.

## Continuous Integration

This template uses Husky to ensure that all changes meet the project's standards before being committed or pushed. Husky automatically runs your tests, linters, and code formatters to catch any errors early in the development cycle.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
