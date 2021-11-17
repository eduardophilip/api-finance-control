# REST API Finance Control

This is the REST API to the Front-end of the aplication finance control consume.

# Routes to incomes

# Get All income

### Request

`GET /api/v1/incomes`

### Response

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
            "_id": "6194627c48529a2648c86c94",
            "name": "string",
            "transactionType": "string",
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

# Get single income

### Request

`GET /api/v1/incomes/:id`

### Response

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
            "_id": "6194627c48529a2648c86c94",
            "name": "string",
            "transactionType": "string",
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
#### Error Responses
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

# Add income

### Request

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

### Response

    Status: 200 OK
    Content-Type: application/json

```json
{
    "success": boolea,
    "data": {
        "name": "string",
        "transactionType": "string"  //income,
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
#### Error Responses
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
    "error": "Year can not be more than 4 characters", // date.year 
                                ||
    "error": "Month can not be more than 2 characters", // date.month 
                                ||
    "error": "Day can not be more than 2 characters", // date.day 
                                ||
    "error": "Day can not be more than 2 characters", // dateValue is required
}
    
```

# Edit income

### Request

`PUT /api/v1/incomes`

**Form data must have field names to be edited**

### Response

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
        "transactionType": "string",
        "amount": number,
        "dateValue": "Date",
        "user": "ObjectId",
        "slug": "string",
        "__v": 0
    }
}
```

#### Error Responses
    Status: 400 Bad Request
    Content-Type: application/json

Where **"ValidationError"** are equal to add income.

Where **"CastError"** are equal to get single income.

Where **"Id not found"** are equal to get single income.

# Delete income

### Request

`DELETE /api/v1/incomes/:id`

### Response

    Status: 200 OK
    Content-Type: application/json

```json
{
    "success": true,
    "data": {}
}
```
#### Error Responses

    Status: 404 Not Found
    Content-Type: application/json

Where **"CastError"** are equal to get single income.

Where **"Id not found"** are equal to get single income.

# Delete income

### Request

`DELETE /api/v1/incomes/:id`