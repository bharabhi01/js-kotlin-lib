# JS-Kotlin Library

JS-Kotlin Library is a project that bridges the gap between JavaScript and Kotlin, allowing developers to leverage the strengths of both languages in a unified development environment. This library provides utilities and functions that enable seamless interoperation between JavaScript and Kotlin.

## Features

- **Kotlin Integration**: Write Kotlin code and compile it to JavaScript.
- **Cross-Language Utilities**: A set of tools to enhance interoperability between JavaScript and Kotlin.
- **Type Safety**: Take advantage of Kotlin's type system while working in a JavaScript environment.
- **Modular Design**: Build and include only the components you need in your project.

## Technology Stack

- **Languages**: Kotlin, JavaScript
- **Build Tools**: Gradle, Kotlin/JS
- **Testing**: Jest (or other testing frameworks used)
- **Deployment**: Publish to npm (or other package managers if applicable)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Kotlin](https://kotlinlang.org/) (v1.5.x or later)
- [Node.js](https://nodejs.org/) (v14.x or later)
- [Gradle](https://gradle.org/) (if building with Gradle)
- [npm](https://www.npmjs.com/) (v6.x or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/bharabhi01/js-kotlin-lib.git
    cd js-kotlin-lib
    ```

2. Install dependencies:

    If using Gradle, run:

    ```bash
    ./gradlew build
    ```

    If using npm, run:

    ```bash
    npm install
    ```

3. Build the project:

    If using Gradle:

    ```bash
    ./gradlew compileKotlin2Js
    ```

    If using npm:

    ```bash
    npm run build
    ```

4. Run the tests (optional):

    ```bash
    npm test
    ```

5. Publish the library:

    ```bash
    npm publish
    ```

### Usage

To use the JS-Kotlin Library in your project, install it via npm:

```bash
npm install js-kotlin-lib
```

Then, import and use the library in your JavaScript or Kotlin/JS project:

```javascript
import { YourFunction } from 'js-kotlin-lib';
```



