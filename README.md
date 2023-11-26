# Finance Tracker API Documentation

This documentation provides details on the endpoints for the Finance Tracker API.

## User

### Sign Up

- **Endpoint:** `POST /api/user/signup`
- **Example Request:**
    ```json
    {
        "username": "mohamamd",
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }
    ```
- **Example cURL Request:**
    ```bash
    curl --location 'http://localhost:8080/api/user/signup' \
    --data-raw '{
        "username": "mohamamd",
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }'
    ```

### Login

- **Endpoint:** `POST /api/user/login`
- **Example Request:**
    ```json
    {
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }
    ```
- **Example cURL Request:**
    ```bash
    curl --location 'http://localhost:8080/api/user/login' \
    --data-raw '{
        "email": "moh@mail.com",
        "password": "aA12345678#"
    }'
    ```

## Wallet

### Get Wallet

- **Endpoint:** `GET /api/wallet/`
- **Authorization:** Bearer Token
- **Example Request:**
    ```bash
    curl --location 'http://localhost:8080/api/wallet/' \
    --data ''
    ```

### Get Wallet (Remote)

- **Endpoint:** `GET /api/wallet/`
- **Authorization:** Bearer Token
- **Example Request:**
    ```bash
    curl --location 'https://backendfinancetracker.onrender.com/api/wallet/'
    ```

Feel free to adapt this template further based on your specific requirements. Include any additional information about your API, such as an introduction, prerequisites, and any other details that you think are relevant. Make sure to replace placeholder URLs and tokens with actual values.
