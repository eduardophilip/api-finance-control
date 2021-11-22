# REST API Finance Control

This is the REST API to the Front-end of the aplication finance control consume.

# <span style="color: #8b59b7"> Routes to incomes </span>

# <span style="color: #3dc692"> Get All income </span>

## Request

`GET /api/v1/incomes`

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": Boolean,
    "count": Number,
    "data": [
        {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "string",
            "transactionType": "income",
            "amount": Number,
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
        }
    ]
}
```

# <span style="color: #3dc692"> Get single income </span>

## Request

`GET /api/v1/incomes/:id`

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": boolean,
    "data": {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "string",
            "transactionType": "income",
            "amount": number,
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
    }
}
```
## Error Responses
    Status: 404 Not Found
    Content-Type: application/json

Where **"CastError"** can be any of the following:

```json
{
    "success": false,
    "error": "Transaction not found with id of id"
}
```

Where **"Id not found"** can be the following:

```json
{
    "success": false,
    "error": "Income not found with id of id"
}
```

# <span style="color: #3dc692"> Add income </span>

## Request

`POST /api/v1/incomes`

**Form data must have:**
```json
{
    "name": "string", //required
    "amount": number, //required
    "date": {
        "year": "string", //required
        "month": "string", //required
        "day": "string" //required
    },
    "dateValue": "string" //required
}
```

<form>
    <label for="name">name: </label>
    <input id="name" name="name" placeholder="Transaction name"><br>
    <label for="amount">amount: </label>
    <input id="amount" name="amount" placeholder="amount"><br>
    <label for="date">date: </label>
    <input id="date" name="date" type="date"placeholder="amount"><br>
</form>

## Response

    Status: 201 Created
    Content-Type: application/json

```json
{
    "success": boolea,
    "data": {
        "name": "string",
        "transactionType": "income"
        "amount": number,
        "date": {
            "year": "string",
            "month": "string",
            "day": "string"
        },
        "dateValue": "Date",
        "user": {
            "_id": "ObjectId",
            "fullName": "string",
            "username": "string",
            "email": "string",
            "createdAt": "string",
            "__v": 0
        },
        "_id": "ObjectId",
        "slug": "string",
        "__v": 0
    }
}
```
## Error Responses
    Status: 400 Bad Request
    Content-Type: application/json

Where **"ValidationError"** can be any of the following:

```json
{
    "success": false,
    "error": "Please add the transaction name", // name is require
                                ||
    "error": "The transaction name cant not be more than 30 characters", // name until 30 characters
                                ||
    "error": "Please add the value to transaction", // amount is required
                                ||
    "error": "Year can not be more than 4 characters", // date.year is required
                                ||
    "error": "Month can not be more than 2 characters", // date.month is required
                                ||
    "error": "Day can not be more than 2 characters", // date.day is required
                                ||
    "error": "Please add a date", // dateValue is required
}
    
```

# <span style="color: #3dc692"> Edit income </span>

## Request

`PUT /api/v1/incomes/:id`

**Form data must have field names to be edited**

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{
    "success": boolean,
    "data": {
        "date": {
            "year": "string",
            "month": "string",
            "day": "string"
        },
        "_id": "ObjectId",
        "name": "string",
        "transactionType": "income",
        "amount": number,
        "dateValue": "Date",
        "user": "ObjectId",
        "slug": "string",
        "__v": 0
    }
}
```

## Error Responses
    Status: 400 Bad Request
    Content-Type: application/json

Where it is **"ValidationError"** the error responses are the same as the route to add income.

Where it is **"CastError"** the error responses are the same as the route to get single income.

Where it is **"Id not found"** the error responses are the same as the route to get single income.

# <span style="color: #3dc692"> Delete income </span>

## Request

`DELETE /api/v1/incomes/:id`

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{
    "success": true,
    "data": {}
}
```
## Error Responses

    Status: 404 Not Found
    Content-Type: application/json

Where it is **"CastError"** the error responses are the same as the route to get single income.

Where it is **"Id not found"** the error responses are the same as the route to get single income.

# <span style="color: #3dc692"> Get all income per month </span>

## Request

`GET /api/v1/incomes/date/month/:year/:month`

## Response
    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": boolean,
    "count": number,
    "data": [
        {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "string",
            "transactionType": "income",
            "amount": number,
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
        }
    ]
}
```

# <span style="color: #3dc692"> Get all income per year </span>

## Request

`GET /api/v1/incomes/date/year/:year`

## Response
    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": boolean,
    "count": number,
    "data": [
        {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "string",
            "transactionType": "income",
            "amount": number,
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
        }
    ]
}
```

# <span style="color: #8b59b7"> Routes to Expenses </span>

# <span style="color: #3dc692"> Get All expenses </span>

## Request

`GET /api/v1/expenses`

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": boolean,
    "count": number,
    "data": [
        {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "string",
            "transactionType": "expense",
            "amount": number,
            "category": "string",
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
        }
    ]
}
```

# <span style="color: #3dc692"> Get single expense </span>

## Request

`GET /api/v1/expenses/:id`

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": Boolean,
    "data": {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "string",
            "transactionType": "expense",
            "amount": number,
            "category": "string",
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
    }
```
## Error Responses
    Status: 404 Not Found
    Content-Type: application/json

Where **"CastError"** can be any of the following:

```json
{
    "success": false,
    "error": "Transaction not found with id of id"
}
```

Where **"Id not found"** can be the following:

```json
{
    "success": false,
    "error": "Expense not found with id of id"
}
```
# <span style="color: #3dc692"> Add expense </span>

## Request

`POST /api/v1/expenses`

**Form data must have:**
```json
{
    "name": "string", //required
    "amount": number, //required
    "category": "string", //required
    "date": {
        "year": "string", //required
        "month": "string", //required
        "day": "string" //required
    },
    "dateValue": "string" //required
}
```

<form>
    <label for="category">categoty: </label>
    <input id="categoty" name="categoty" placeholder="categoty"><br>
    <label for="name">name: </label>
    <input id="name" name="name" placeholder="Transaction name"><br>
    <label for="amount">amount: </label>
    <input id="amount" name="amount" placeholder="amount"><br>
    <label for="date">date: </label>
    <input id="date" name="date" type="date"placeholder="amount"><br>
</form>

## Response

    Status: 201 Created
    Content-Type: application/json

```json
{
    "success": boolea,
    "data": {
        "name": "string",
        "transactionType": "expense",
        "amount": number,
         "category": "string",
        "date": {
            "year": "string",
            "month": "string",
            "day": "string"
        },
        "dateValue": "Date",
        "user": {
            "_id": "ObjectId",
            "fullName": "string",
            "username": "string",
            "email": "string",
            "createdAt": "string",
            "__v": 0
        },
        "_id": "ObjectId",
        "slug": "string",
        "__v": 0
    }
}
```
## Error Responses
    Status: 400 Bad Request
    Content-Type: application/json

Where **"ValidationError"** can be any of the following:

```json
{
    "success": false,
    "error": "Please add the transaction name", // name is require
                                ||
    "error": "The transaction name cant not be more than 30 characters", // name until 30 characters
                                ||
    "error": "Please add the value to transaction", // amount is required
                                ||
    "error": "Year can not be more than 4 characters", // date.year is required
                                ||
    "error": "Month can not be more than 2 characters", // date.month is required
                                ||
    "error": "Day can not be more than 2 characters", // date.day is required
                                ||
    "error": "Please add a date", // dateValue is required
}
    
```

# <span style="color: #3dc692"> Edit expense </span>

## Request

`PUT /api/v1/expenses/:id`

**Form data must have field names to be edited**

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{
    "success": boolean,
    "data": {
        "date": {
            "year": "string",
            "month": "string",
            "day": "string"
        },
        "_id": "ObjectId",
        "name": "string",
        "transactionType": "expense",
        "amount": number,
        "category": "string",
        "dateValue": "Date",
        "user": "ObjectId",
        "slug": "string",
        "__v": 0
    }
}
```

## Error Responses
    Status: 400 Bad Request
    Content-Type: application/json

Where it is **"ValidationError"** the error responses are the same as the route to add expense.

Where it is **"CastError"** the error responses are the same as the route to get single expense.

Where it is **"Id not found"** the error responses are the same as the route to get single expense.

# <span style="color: #3dc692"> Delete expense </span>

## Request

`DELETE /api/v1/expenses/:id`

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{
    "success": true,
    "data": {}
}
```
## Error Responses

    Status: 404 Not Found
    Content-Type: application/json

Where it is **"CastError"** the error responses are the same as the route to get single expense.

Where it is **"Id not found"** the error responses are the same as the route to get single expense.

# <span style="color: #3dc692"> Get all expenses per month </span>

## Request

`GET /api/v1/expenses/date/month/:year/:month`

## Response
    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": boolean,
    "count": number,
    "data": [
        {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "string",
            "transactionType": "expense",
            "amount": number,
            "category": "string",
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
        }
    ]
}
```

# <span style="color: #3dc692"> Get all expenses per year </span>

## Request

`GET /api/v1/expenses/date/year/:year`

## Response
    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": boolean,
    "count": number,
    "data": [
        {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "string",
            "transactionType": "expense",
            "amount": number,
            "category": "string",
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
        }
    ]
}
```

# <span style="color: #8b59b7"> Routes to Savings </span>

# <span style="color: #3dc692"> Get All Savings </span>

## Request

`GET /api/v1/savings`

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": Boolean,
    "count": Number,
    "data": [
        {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "Savings",
            "transactionType": "Savings",
            "amount": Number,
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
        }
    ]
}
```
# <span style="color: #3dc692"> Get single savings </span>

## Request

`GET /api/v1/savings/:id`

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": Boolean,
    "data": {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "Savings",
            "transactionType": "Savings",
            "amount": Number,
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
    }

```
## Error Responses
    Status: 404 Not Found
    Content-Type: application/json

Where **"CastError"** can be any of the following:

```json
{
    "success": false,
    "error": "Transaction not found with id of id"
}
```

Where **"Id not found"** can be the following:

```json
{
    "success": false,
    "error": "Savings not found with id of id"
}
```

# <span style="color: #3dc692"> Add savings </span>

## Request

`POST /api/v1/savings`

**Form data must have:**
```json
{
    "amount": number, //required
    "date": {
        "year": "string", //required
        "month": "string", //required
        "day": "string" //required
    },
    "dateValue": "string" //required
}
```

<form>
    <label for="amount">amount: </label>
    <input id="amount" name="amount" placeholder="amount"><br>
    <label for="date">date: </label>
    <input id="date" name="date" type="date"placeholder="amount"><br>
</form>

## Response

    Status: 201 Created
    Content-Type: application/json

```json
{
    "success": boolea,
    "data": {
        "name": "Savings",
        "transactionType": "Savings",
        "amount": Number,
        "date": {
            "year": "string",
            "month": "string",
            "day": "string"
        },
        "dateValue": "Date",
        "user": {
            "_id": "ObjectId",
            "fullName": "string",
            "username": "string",
            "email": "string",
            "createdAt": "string",
            "__v": 0
        },
        "_id": "ObjectId",
        "slug": "string",
        "__v": 0
    }
}
```
## Error Responses
    Status: 400 Bad Request
    Content-Type: application/json

Where **"ValidationError"** can be any of the following:

```json
{
    "success": false,
    "error": "Please add the transaction name", // name is require
                                ||
    "error": "The transaction name cant not be more than 30 characters", // name until 30 characters
                                ||
    "error": "Please add the value to transaction", // amount is required
                                ||
    "error": "Year can not be more than 4 characters", // date.year is required
                                ||
    "error": "Month can not be more than 2 characters", // date.month is required
                                ||
    "error": "Day can not be more than 2 characters", // date.day is required
                                ||
    "error": "Please add a date", // dateValue is required
}
    
```

# <span style="color: #3dc692"> Edit savings </span>

## Request

`PUT /api/v1/savings/:id`

**Form data must have names of the field to be edited**

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{
    "success": boolean,
    "data": {
        "date": {
            "year": "string",
            "month": "string",
            "day": "string"
        },
        "_id": "ObjectId",
        "name": "Savings",
        "transactionType": "Savings",
        "amount": number,
        "dateValue": "Date",
        "user": "ObjectId",
        "slug": "string",
        "__v": 0
    }
}
```

## Error Responses
    Status: 400 Bad Request
    Content-Type: application/json

Where it is **"ValidationError"** the error responses are the same as the route to Add savings.

Where it is **"CastError"** the error responses are the same as the route to get single savings.

Where it is **"Id not found"** the error responses are the same as the route to get single savings.

# <span style="color: #3dc692"> Delete savings </span>

## Request

`DELETE /api/v1/savings/:id`

## Response

    Status: 200 OK
    Content-Type: application/json

```json
{
    "success": true,
    "data": {}
}
```
## Error Responses

    Status: 404 Not Found
    Content-Type: application/json

Where it is **"CastError"** the error responses are the same as the route to get single savings.

Where it is **"Id not found"** the error responses are the same as the route to get single savings.

# <span style="color: #3dc692"> Get all savings per month </span>

## Request

`GET /api/v1/savings/date/month/:year/:month`

## Response
    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": boolean,
    "count": number,
    "data": [
        {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "Savings",
            "transactionType": "Savings",
            "amount": number,
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
        }
    ]
}
```

# <span style="color: #3dc692"> Get all savings per year </span>

## Request

`GET /api/v1/savings/date/year/:year`

## Response
    Status: 200 OK
    Content-Type: application/json

```json
{ 
    "success": boolean,
    "count": number,
    "data": [
        {
            "date": {
                "year": "string",
                "month": "string",
                "day": "string"
            },
            "_id": "ObjectId",
            "name": "Savings",
            "transactionType": "Savings",
            "amount": number,
            "dateValue": "date",
            "user": {
                "_id": "ObjecId",
                "username": "string"
            },
            "slug": "string",
            "__v": 0
        }
    ]
}
```