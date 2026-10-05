# bun-react-template

A minimal React + Tailwind starter running on [Bun](https://bun.com).

## Requirements

- [Bun](https://bun.com) (created with `bun init` in v1.3.11)

## Getting started

```bash
# 1. Install dependencies
bun install

# 2. Start the development server (hot reload)
bun dev
```

## Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `bun dev`           | Start the dev server with hot reload         |
| `bun start`         | Run the app in production mode               |
| `bun run build`     | Build the project                            |
| `bun test`          | Run the unit tests in `tests/`               |
| `bun run test:e2e`  | Run the end-to-end smoke test in `e2e/`      |

## Project structure

```
.
├── src/          # Application source (entry point: src/index.ts)
├── tests/        # Unit tests
├── e2e/          # End-to-end tests
├── build.ts      # Build script
└── package.json
```
