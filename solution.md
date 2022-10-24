## Prerequisites
* Download, then install NodeJS (https://nodejs.org/en/download/)
* Have Docker Engine installed: https://docs.docker.com/engine/install/

## Steps to build/run the image 
> [Documentation followed](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
1. Navigate terminal to root of this project folder
2. To build: <br> `docker build . -t docker-backend`
3. To run: <br> `docker run -p 49160:3000 -d docker-backend`
4. To test: <br> `curl -i localhost:49160/items`

## Future updates 
* Implement dynamic ports
* Add the CRUD functionality for specific items by ID
* Add additional safety, and error messages
* Refactor into Typescript
* Create a UI wrapper in React/Angular
* Build out an actual backend to store transactions and state
* Refine the TTL of the in-memory database based on client requirements vs internal capacity
* Add an automated test suite 
* Add CI/CD pipeline to automate image testing