# Define version of node
from node:16

# Create app directory
WORKDIR ~repos/docker-backend

# Both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Bind app to port
EXPOSE 8080

# Define cmd to start app
CMD [ "node", "server.js" ]