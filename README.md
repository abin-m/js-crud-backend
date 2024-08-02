
# CRUD API Documentation

## Introduction

This project is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express.js, and MongoDB.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:

```sh
git clone <repository-url>
```

2. Navigate to the project directory:

```sh
cd <project-directory>
```

3. Create a `.env` file in the root directory of the project and add the following environment variables:

```env
PORT=8000
MONGO_URL="YOUR URL"
```

4. Install the dependencies:

```sh
npm install
```

5. Start the server:

```sh
npm start
```

## API Endpoints

### Fetch All Users

- **URL:** `http://127.0.0.1:8000/api/user/getallusers`
- **Method:** GET
- **Description:** Retrieves a list of all users.

### Create User

- **URL:** `http://127.0.0.1:8000/api/user/create/66ac8bd3968a1abea2ab59cb`
- **Method:** POST
- **Description:** Creates a new user.
- **Body:**

```json
{
  "name": "John Kumar",
  "email": "johnkumar@gmail.com",
  "address": "Canada"
}
```

### Update User

- **URL:** `http://127.0.0.1:8000/api/user/update/66ac8b8c968a1abea2ab59c6`
- **Method:** PUT
- **Description:** Updates an existing user.
- **Body:**

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "address": "Canada",
  "__v": 0
}
```

### Delete User

- **URL:** `http://127.0.0.1:8000/api/user/delete/66ac8b8c968a1abea2ab59c6`
- **Method:** DELETE
- **Description:** Deletes a user.
- **Body:**

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "address": "Canada",
  "__v": 0
}
```

## Conclusion

This documentation provides an overview of the CRUD API and the steps to get started with the project. For any further assistance, please refer to the source code or contact the developer.
