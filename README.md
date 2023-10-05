# Web3 ERC20

## Frameworks and Libraries

### Core
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

### State Management
- [Zustand](https://github.com/pmndrs/zustand)

### Web3
- [Ethers](https://docs.ethers.io/v5/)

### Testing
- [Jest](https://jestjs.io/)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- [@testing-library/react-hooks](https://www.npmjs.com/package/@testing-library/react-hooks)
- [Synpress](https://github.com/Synthetixio/synpress)

### Linting and Formatting
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### CSS
- [TailwindCSS](https://tailwindcss.com/)

## Scripts

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Preview**: `npm run preview`

## Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server

## Features
- Display notifications across tabs
- Checks balance before sending transaction
- Persisted state when closing/reopening the browser

## Testing

### Component Testing using React Testing Library and Snapshot Testing
- [BalanceView.test.ts](https://github.com/Zexuz/web3-erc20/blob/main/src/components/Balance/BalanceView.test.tsx)
- [BalanceContainer.test.ts](https://github.com/Zexuz/web3-erc20/blob/main/src/components/Balance/BalanceContainer.test.tsx)
- [SnackbarContainer.test.ts](https://github.com/Zexuz/web3-erc20/blob/main/src/components/Snackbar/SnackbarContainer.test.tsx)
- [SnackbarView.test.ts](https://github.com/Zexuz/web3-erc20/blob/main/src/components/Snackbar/SnackbarView.test.tsx)
- [Button.test.ts](https://github.com/Zexuz/web3-erc20/blob/main/src/components/Button/Button.test.tsx)

### Hook Testing using React Testing Library
- [useValidatedInput.test.tsx](https://github.com/Zexuz/web3-erc20/blob/main/src/hooks/useValidatedInput/useValidatedInput.test.tsx)

### Unit Testing using Jest
- [broadcastChannelFactory.test.ts](https://github.com/Zexuz/web3-erc20/blob/main/src/lib/broadcastChannelFactory.test.ts)
- [validation.test.ts](https://github.com/Zexuz/web3-erc20/blob/main/src/lib/validation.test.ts)

### E2E Testing using Synpress
- [happy.test.ts](https://github.com/Zexuz/web3-erc20/blob/main/e2e/happy.test.ts)

