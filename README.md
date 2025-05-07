# 🔐 React Auth Routing with TypeScript

This project demonstrates a clean and professional implementation of:

- ✅ Public, Private, and Role-Based Routes
- ✅ Authentication via Context API
- ✅ Route protection using React Router v6+
- ✅ TypeScript support
- ✅ 404 Not Found routing
- ✅ Scalable folder structure

---

## 📦 Tech Stack

- [React 18+](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router v6.4+](https://reactrouter.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [ShadCN / TailwindCSS UI](https://ui.shadcn.com/) (for styling)
- Optional: API-ready for real auth (JWT)

---
## Features

- Interactive UI with React
- Type-safe code with TypeScript
- Fast development with Vite
- ESLint integration for code quality
- Hot Module Replacement (HMR) for a smooth development experience

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/harry-potter-wizard.git
   cd harry-potter-wizard
   ```

2. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

### Running the Project

1. Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to see the application in action.

### Building for Production

To build the project for production, run:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist` directory.

### Linting

To lint the project, run:

```sh
npm run lint
# or
yarn lint
```

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
