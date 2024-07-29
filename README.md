In this README.md, I will explain everything about this Node.js project for managing products and categories in an e-commerce application.

### The github Link

https://github.com/LucasDeLil/Backend_Web_NodeJS

### Don't forget this 

add this in headers Key: content-type Value: application/json

### Create New Categories

Use: POST http://localhost:3000/categories

Body -> raw (JSON):
```json
{
  "name": "Test Product", //Required
  "description": "This is a test product.", //Not required
}
```
### See all the created Categories

Use: GET http://localhost:3000/categories

### See a specific the created Categories

Use: GET http://localhost:3000/categories/id REPLACE id with a real category id

### Update a Product

Use: PUT http://localhost:3000/categories/id REPLACE id with a real category id

Body -> raw (JSON):
```json
{
  "name": "Updated Test Product", //Required
  "description": "This is a test product.", //Not required
}
```
You can update what you want you don't need to update everything

### Delete a Product

Use: DELETE http://localhost:3000/categories/id REPLACE id with a real product id



### Create New Products

Use: POST http://localhost:3000/products

Body -> raw (JSON):
```json
{
  "name": "Test Product", //Required
  "price": 49.99, //Required + can't be negative
  "category": "<category_id>", //Required + needs to be a real category id
  "description": "This is a test product.", //Not required
  "stock": 100 //Required + can't be negative
}
```
### See all the created products

Use: GET http://localhost:3000/products

### See a specific the created products

Use: GET http://localhost:3000/products/id REPLACE id with a real product id

### Update a Product

Use: PUT http://localhost:3000/products/id REPLACE id with a real product id

Body -> raw (JSON):
```json
{
  "name": "Updated Test Product", //Required
  "price": 39.99, //Required + can't be negative
  "category": "<category_id>", //Required + needs to be a real category id
  "description": "This is a test product.", //Not required
  "stock": 100 //Required + can't be negative
}
```
You can update what you want you don't need to update everything

### Delete a Product

Use: DELETE http://localhost:3000/products?id REPLACE id with a real product id

