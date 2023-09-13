# Project Documentation
This document provides detailed information on how to use the REST API for the "Person" resource. Please refer to this documentation for setup instructions, request/response formats, sample API usage, and any known limitations or assumptions made during development.

> Render is use to host the API [render]https://render.com/
> live API  https://personaip-kliuvert.onrender.com/api
> And mongodb atlas for the database 

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Request/Response Formats](#requestresponse-formats)
- [Sample API Usage](#sample-api-usage)
- [Known Limitations and Assumptions](#known-limitations-and-assumptions)

---

## Setup Instructions

Follow these steps to set up and run the API locally:

1. **Clone the Repository:**
 
# Replace with your repository URL
   repository_url = "https://github.com/prmpsmart/hgnx_backend.git"
   repository_directory = "hgnx_backend"

2. **Install Dependencies:**
   ```javascript
   # Install javascript dependencies
   npm intstall
   ```
3. **Run the API:**
   ```javascript
   # Run the API using nodemon
   nodemon index.js
   ```

## API Endpoints
- **Create a Person**:
  - **POST https://personaip-kliuvert.onrender.com/api**
  - Add a new person to the database.

- **Read a Person**:
  - **GET https://personaip-kliuvert.onrender.com/api/user_id**
  - Retrieve details of all persons in the database.

  - **Update a Person**:
  - **PUT https://personaip-kliuvert.onrender.com/api/user_id/{id}**
  - Modify details of an existing person by a specific id.

  - **Delete a Person**:
  - **DELETE https://personaip-kliuvert.onrender.com/api/user_id/{id}**
  - Remove a person from the database by a specific id.

  ---

## Request/Response Formats

### Create a Person (POST /api/)
**Request Format:**
```javascript
      api_url = 'https://personaip-kliuvert.onrender.com/api'

      data = {
         "name" : "kliuvert"
      }
```

**Response Format (Success - 200):**
```json
{
    "name": "kliuvert"
}
```
**Response fromat (special-charaters - 400)**
```json
{
    "errors": [
        {
            "type": "field",
            "value": "kliuvert!",
            "msg": "Invalid value",
            "path": "name",
            "location": "body"
        }
    ]
}
```

### Read a Person (GET /api/user_id)

**Resquest format:**
api_url = "https://personaip-kliuvert.onrender.com/api/user_id"

**Response Format (Success- 200):**
```json
{
    "name": "kliuvert",
}
```
### Update a Person (PUT /api/user_id/id)

**Request Format:**
```javascript

      api_url = "https://personaip-kliuvert.onrender.com/api/user_id/{id}"

      data = {
         "name": "Ayuk"
      }
```

**Response Format (Success - 200):**
```json
      {
       "msg": "person updated successfully",
         "Personmodule": {
            "_id": "650121610950a1c4d9c1a403",
            "name": "deborah",
            "__v": 0
         }
      }
```

---

### Delete a Person (DELETE /api/user_id)

api_url = 'https://personaip-kliuvert.onrender.com/api/user_id/id'
---
## Sample API Usage

Here are some sample API usage scenarios with javascript code examples:

1. **Create a Person:**
   ```javascript


   api_url = "https://personaip-kliuvert.onrender.com/api"

   data = {
       "name": "nicci",
      
   }
```

2. **Read a Person:**
   ```javascript

   api_url = "https://personaip-kliuvert.onrender.com/api/user_id"
   ```

3. **Update a Person:**
   ```javascript

   api_url = "https://personaip-kliuvert.onrender.com/api/user_id/650121610950a1c4d9c1a403"

   data = {
       "name":"martin"
   }
   ```

4. **Delete a Person:**
   ```javascript
   api_url = "https://personaip-kliuvert.onrender.com/api/user_id/650121610950a1c4d9c1a403"

   
   ```

**Response Format (Success - 200):**
```json
      {
         "msg": "person deleted successfully",
         "Personmodule": {
            "_id": "650121610950a1c4d9c1a403",
            "name": "Ayuk",
            "__v": 0
         }
      }
```

---

## Known Limitations and Assumptions

- This API uses a nodejs and mongodb database 
- Input validation is handled by express validator in this task. Implement more robust validation and error handling in a production-ready application.
- Authentication and authorization mechanisms are not implemented here. Ensure secure access to your API in a real-world scenario.
- This documentation assumes that you have successfully set up the API locally.