# Finance Tracker API Documentation

This documentation provides details on the endpoints for the Finance Tracker API.

## Add Transaction

- **Endpoint:** `POST /api/wallet/add`
- **Authorization:** Bearer Token
- **Example Request:**
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
- **Example cURL Request:**
    ```bash
    curl --location 'https://backendfinancetracker.onrender.com/api/wallet/add' \
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

## Transfer to Information

- **Endpoint:** `POST /api/wallet/tranferToInformation`
- **Authorization:** Bearer Token
- **Example Request:**
    ```json
    {
      "emailTo": "m@mail.com",
      "value": 100
    }
    ```
- **Example cURL Request:**
    ```bash
    curl --location 'https://backendfinancetracker.onrender.com/api/wallet/tranferToInformation' \
    --data-raw '{
      "emailTo": "m@mail.com",
      "value": 100
    }'
    ```

## Confirm Transfer Money

- **Endpoint:** `POST /api/wallet/confirmTrasferMoney`
- **Example Request:**
    ```json
    {
      "_id": "sender_user_id",
      "toId": "recipient_user_id",
      "username": "recipient_username",
      "email": "recipient_email@example.com",
      "value": 100
    }
    ```
- **Example cURL Request:**
    ```bash
    curl --location 'https://backendfinancetracker.onrender.com/api/wallet/confirmTrasferMoney' \
    --data-raw '{
      "_id": "sender_user_id",
      "toId": "recipient_user_id",
      "username": "recipient_username",
      "email": "recipient_email@example.com",
      "value": 100
    }'
    ```

Feel free to customize this template further by adding more information about your API, such as an introduction, prerequisites, and any additional details you think are relevant. Make sure to replace placeholder URLs and tokens with actual values.
