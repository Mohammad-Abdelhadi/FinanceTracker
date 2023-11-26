# Finance Tracker API Documentation
Introducing our Personal Finance Tracker app – your key to financial success! 
With a user-friendly registration form that includes validation, managing your finances becomes easy. Register securely, track income and expenses with a friendly interface. Protected routes ensure only logged-in users access main pages using tokens shared via Context API. Visualize top three expenses in descending order with charts. Explore your profile page to view and edit your data, and log out anytime. Take control of your financial journey effortlessly, all in one place.

## This documentation provides details on the endpoints for the Finance Tracker API.


## Screenshots

### Splash Screen
![SplashScreen](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/576ab5fa-9e2f-4059-9038-9fb9078c2962)

### Onboarding
![Onboarding](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/5667881f-d88c-40c5-8cd8-2d5e98d6b72a)

### Sign up
![Signup](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/92fa29a5-5703-4493-b77b-9a340cbeb458)

### Login
![Signin](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/f0ae9383-e00b-4f83-810b-5a56498b2a71)

### Home
![Home](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/747ad49c-a22c-472b-9e8e-0429e842e26c)

### Add Transaction
![Add Expense](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/cf1ec478-cd7b-45e3-bf9e-8d333e6a5ef5)

### Charts
![Charts](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/53eb211c-0dcf-40c4-8dfe-e32a6bbbbb3b)

### Transfer To Information
![Send Wallet Validation](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/bf99af38-d36d-46e2-a8c9-718484fe3602)

### Confirm Transfer Money
![Send Wallet Confirmation](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/78d0e112-aa26-4200-8815-f90ba60fe4c9)

### Send Money Successfully
![Send Wallet Successfully](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/1973dffe-fbe5-4796-9a8d-9f3c00bf74fa)

### Profile
![Profile](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/84f60bc1-a58a-40d9-8efa-2d6ec02c7709)

## User

### Sign up
![Signup](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/92fa29a5-5703-4493-b77b-9a340cbeb458)

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
    --data-raw '{
    "username":"mohamamd",
    "email":"moh@mail.com",
    "password":"aA12345678#"
    }'
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
![Signin](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/f0ae9383-e00b-4f83-810b-5a56498b2a71)

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
![Home](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/747ad49c-a22c-472b-9e8e-0429e842e26c)

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
![Add Expense](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/cf1ec478-cd7b-45e3-bf9e-8d333e6a5ef5)

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

### Charts
![Charts](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/53eb211c-0dcf-40c4-8dfe-e32a6bbbbb3b)

### Transfer To Information
![Send Wallet Validation](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/bf99af38-d36d-46e2-a8c9-718484fe3602)

- **Endpoint:** `POST /api/wallet/tranferToInformation`
- **Authorization:** Bearer Token
- **Request:**
    ```json
    {
        "emailTo": "m@mail.com",
        "value": 100
    }
    ```
- **cURL Example:**
    ```bash
    curl --location 'http://localhost:8080/api/wallet/tranferToInformation' \
    --data-raw '{"emailTo": "m@mail.com", "value": 100}'
    ```
- **Response:**
    - Success:
      ```json
      {
          "toId": "recipient_user_id",
          "username": "recipient_username",
          "email": "m@mail.com",
          "value": 100
      }
      ```
    - Failure:
      ```json
      {
          "error": "Error message here"
      }
      ```

### Confirm Transfer Money
![Send Wallet Confirmation](https://github.com/Mohammad-Abdelhadi/FinanceTracker/assets/125509690/78d0e112-aa26-4200-8815-f90ba60fe4c9)

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

