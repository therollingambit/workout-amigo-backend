## initialise backend folder
- cd into backend folder
- run ```sh npm init -y```
- package.json file will be generated

## packages
- install express with ```sh npm install express```
- install dotenv with ```sh npm install dotenv```
- install nodemon with ```sh npm install -g nodemon```
- run ```sh nodemon server.js``` to start server
- `ctrl + C` to kill server

## create script in package.json
- in scripts, add ```"dev": "nodemon server.js"```
- run ```sh npm run dev``` to start script

## API endpoints
- GET /workouts -> get all workout documents
- POST /workouts -> creates a new workout document
- GET /workouts/:id -> gets a single workout document
- DELETE /workouts/:id -> deletes a single workout
- PATCH /workouts/:id -> updates a single workout

## Mongodb atlas setup
- database > connect > connect your application > copy connection string
- ```sh npm install mongoose```

## Hashing passwords
- install bcrypt package: `npm i bcrypt`

## Email & password validation
- install validator package: `npm i validator`

## JSON Web Tokens (theory)
- header -> contains algorithm used for JWT
- payload -> contains non-sensitive user data (eg. userId)
- signature -> used to verify authenticity of token by the server