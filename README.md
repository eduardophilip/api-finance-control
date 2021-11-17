# REST API Finance Control

This is the REST API to the Front-end of the aplication finance control consume.

## Get All income

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

## Get single income

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
    Status: 404 Not Found
    Content-Type: application/json
```json
{
    "success": false,
    "error": "Transaction not found with id of id",
                                ||
    "error": "Income not found with id of id"
}
```

## Add income

### Request

`POST /api/v1/incomes`

### Response

    Status: 200 OK
    Content-Type: application/json

```json
{
    "success": boolea,
    "data": {
        "name": "string",
        "transactionType": "string",
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