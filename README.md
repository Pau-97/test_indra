
## SRC FILE
You can find the code in the src file. 

In the service folder you can see the business logic, in the repository layer you can see the connections with the database about a little CRUD using SERVERLESS FRAMEWORK. 

***
## ENDPOINTS
You have to know this concepts
1. __BASE_URL:__ _https://2dqp1ou7v4.execute-api.us-east-1.amazonaws.com/_
2. __SWAGGER_URL__ _https://2dqp1ou7v4.execute-api.us-east-1.amazonaws.com/api-docs_
2. __ID_SWAPI:__ _this is the person's id from SWAPI API_
3. __UID:__ _this is a unique id of a user in DynamoDB_

To request information about a person using SWAPI API, the route is: __BASE_URL/swapi/ID_SWAPI__ the method for this route is GET

## SWAGGER
Documentacion SWAGGER OPEN API:
  
To review the documentation you must enter the following link: __https://2dqp1ou7v4.execute-api.us-east-1.amazonaws.com/api-docs__


## UNIT TEST
The test folder has the unit tests with jest : __TEST/SWAPPI.TEST__ AND __TEST/USER.TEST__

## DOCUMENTATION
To create a User and save this information in DynamoDB, the route is: __BASE_URL/user__ the method for this route is POST and you have to send a body, similar like this:
```
{
  "name": "name_value",
  "lastName": "lastName_value",
  "dni": "dni_value"
}
```

To get all users from DynamoDB, the route is: ___BASE_URL/user/all__ the method for this route is GET

To get a user by id from DynamoDB, the route is: __BASE_URL/user/get/UID___ the method for this route is GET

To update user's information by id from DynamoDB, the route is: ___BASE_URL/update/UID__ the method for this route is PUT

To delete user's information by id from DynamoDB, the route is: ___BASE_URL/delete/UID___ the method for this route is DELETE


