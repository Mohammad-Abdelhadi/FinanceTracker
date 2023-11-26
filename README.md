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
    - Success:
      ```json
      {
          "username": "mohamamd",
          "email": "moh@mail.com",
          "token": "<your_generated_token>"
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

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
    - Success:
      ```json
      {
          "username": "mohamamd",
          "email": "moh@mail.com",
          "token": "<your_generated_token>"
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

## Wallet

### Get Wallet

- **Endpoint:** `GET /api/wallet/`
- **Authorization:** Bearer Token
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:8080/api/wallet/' --data ''
    ```
- **Response:**
    - Success:
      ```json
      {
          "balance": 1000,
          "income": 1500,
          "expense": 500,
          "transactions": [
              // array of transactions
          ]
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

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
    - Success:
      ```json
      {
          "balance": 1500,
          "income": 2000,
          "expense": 500,
          "transactions": [
              // updated array of transactions
          ]
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

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
    - Success:
      ```json
      {
          "fromWallet": {
              // details of sender's wallet after the transaction
          },
          "toWallet": {
              // details of recipient's wallet after the transaction
          }
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```
Please replace `<your_generated_token>` with the actual token value. Adjust the success and failure responses based on your actual implementation.
```bash
    ```
