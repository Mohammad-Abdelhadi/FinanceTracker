

    <h1>Finance Tracker API Documentation</h1>

    <h2>Add Transaction</h2>
    <p><strong>Endpoint:</strong> POST /api/wallet/add</p>
    <p><strong>Authorization:</strong> Bearer Token</p>
    <p><strong>Example Request:</strong></p>
    <pre><code class="json">
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
    </code></pre>
    <p><strong>Example cURL Request:</strong></p>
    <pre><code class="curl">
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
    </code></pre>

    <h2>Transfer to Information</h2>
    <p><strong>Endpoint:</strong> POST /api/wallet/tranferToInformation</p>
    <p><strong>Authorization:</strong> Bearer Token</p>
    <p><strong>Example Request:</strong></p>
    <pre><code class="json">
        {
          "emailTo": "m@mail.com",
          "value": 100
        }
    </code></pre>
    <p><strong>Example cURL Request:</strong></p>
    <pre><code class="curl">
        curl --location 'https://backendfinancetracker.onrender.com/api/wallet/tranferToInformation' \
        --data-raw '{
          "emailTo": "m@mail.com",
          "value": 100
        }'
    </code></pre>

    <h2>Confirm Transfer Money</h2>
    <p><strong>Endpoint:</strong> POST /api/wallet/confirmTrasferMoney</p>
    <p><strong>Example Request:</strong></p>
    <pre><code class="json">
        {
          "_id": "sender_user_id",
          "toId": "recipient_user_id",
          "username": "recipient_username",
          "email": "recipient_email@example.com",
          "value": 100
        }
    </code></pre>
    <p><strong>Example cURL Request:</strong></p>
    <pre><code class="curl">
        curl --location 'https://backendfinancetracker.onrender.com/api/wallet/confirmTrasferMoney' \
        --data-raw '{
          "_id": "sender_user_id",
          "toId": "recipient_user_id",
          "username": "recipient_username",
          "email": "recipient_email@example.com",
          "value": 100
        }'
    </code></pre>

