# Wonderful Todo App - Backend

This repository contains the backend server for the Wonderful Todo app, built with Node.js, Express, and TypeScript.

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X) or yarn (version X.X.X)

### Installation

1. Clone the repository:

   ```sh
   git clone git@github.com:DBThompson713/wonderful-ts.git
   cd wonderful-todo-ts
   ```


2. Install dependencies:

```sh
npm install
# or
yarn install
```

Running the Server
To start the server in development mode:

```sh
Copy code
npm run dev
# or
yarn dev
```

The server will start at http://localhost:8000.


### API Endpoints
- GET /get-todos: Get all todos.
- POST /add-todo: Create a new todo.
- GET /get-todo/:id: Get a single todo by ID.
- PATCH /update-todo/:id: Update a todo by ID.
- DELETE /delete-todo/:id: Delete a todo by ID.
