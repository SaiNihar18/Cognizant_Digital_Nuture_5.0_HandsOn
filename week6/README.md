# Week 6: React Unit Testing & Isolation

This directory contains the hands-on implementation of React unit testing exercises using Vitest and React Testing Library.

## Features & Topics Covered

* **CohortDetails Component (`src/CohortDetails.jsx`)**: Renders cohort code in `h3` and description tags based on parameters.
* **GitClient Helper (`src/GitClient.js`)**: Module invoking Axios calls to retrieve user repository arrays.
* **Component Testing (`src/CohortDetails.test.jsx`)**:
  - Validates component initialization and mounting.
  - Verifies prop binding details.
  - Confirms heading code queries search matchers.
  - Snapshot test verification.
* **Mock Testing (`src/GitClient.test.jsx`)**:
  - Uses Vitest mocks to isolate axios fetch requests.
  - Asserts that target repositories are correctly mapped.

---

## Local Setup

Install local packages:
```bash
npm install
```

### Run Tests
```bash
npm run test
```

### Start Development Server
```bash
npm run dev
```
