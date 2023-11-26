# Finance Tracker API Documentation

This documentation provides details on the endpoints for the Finance Tracker API.

## User

### Sign Up

- **Endpoint:** `POST /api/user/signup`
- **Authorization:** None
- **Request:**
    ```json
    {
        "username": "mohamamd",
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:8080/api/user/signup' \
    --data-raw '{"username":"mohamamd","email":"moh@mail.com","password":"aA12345678#"}'
    ```
- **Response:**
    - No response body (This request doesn't return any response body)

### Login

- **Endpoint:** `POST /api/user/login`
- **Authorization:** None
- **Request:**
    ```json
    {
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:8080/api/user/login' \
    --data-raw '{"email":"moh@mail.com","password":"aA12345678#"}'
    ```
- **Response:**
    - No response body (This request doesn't return any response body)

## Wallet

### Get Wallet

- **Endpoint:** `GET /api/wallet/`
- **Authorization:** Bearer Token
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:8080/api/wallet/' --data ''
    ```
- **Response:**
    - No response body (This request doesn't return any response body)

### Add Transaction

- **Endpoint:** `POST /api/wallet/add`
- **Authorization:** Bearer Token
- **Request:**
    ```json
    /*
    {
        "type": "expense",
        "category": "education",
        "value": 500,
        "date": "2023-11-26"
        And Remember The Barer token.
    }
    */
    {
        "type": "income",
        "category": "salary",
        "value": 500,
        "date": "2023-11-26"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:8080/api/wallet/add' \
    --data '/*
    {
        "type": "expense",
        "category": "education",
        "value": 500,
        "date": "2023-11-26"
        And Remember The Barer token.
    }
    */
    {
        "type": "income",
        "category": "salary",
        "value": 500,
        "date": "2023-11-26"
    }'
    ```
- **Response:**
    - No response body (This request doesn't return any response body)

### Confirm Transfer Money

- **Endpoint:** `POST /api/wallet/confirmTrasferMoney`
- **Authorization:** Bearer Token
- **Request:**
    ```json
    {
        "_id": "sender_user_id",
        "toId": "recipient_user_id",
        "username": "recipient_username",
        "email": "recipient_email@example.com",
        "value": 100
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:8080/api/wallet/confirmTrasferMoney' \
    --data-raw '{"_id": "sender_user_id","toId": "recipient_user_id","username": "recipient_username","email": "recipient_email@example.com","value": 100}'
    ```
- **Response:**
    - No response body (This request doesn't return any response body)

---

## Remote Server Endpoints

### User Sign Up

- **Endpoint:** `POST https://backendfinancetracker.onrender.com/api/user/signup`
- **Authorization:** None
- **Request:**
    ```json
    {
        "username": "mohamamd",
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'https://backendfinancetracker.onrender.com/api/user/signup' \
    --data-raw '{"username":"mohamamd","email":"moh@mail.com","password":"aA12345678#"}'
    ```
- **Response:**
    - No response body (This request doesn't return any response body)

### User Login

- **Endpoint:** `POST https://backendfinancetracker.onrender.com/api/user/login`
- **Authorization:** None
- **Request:**
    ```json
    {
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'https
