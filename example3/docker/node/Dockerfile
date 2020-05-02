FROM node:12-alpine
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
#COPY package.json .
COPY package*.json ./
RUN npm install && npm install -g nodemon

# Bundle app source
COPY . .

# Exports
EXPOSE 3000
#CMD [ "npm", "start"]
CMD ["npm", "run", "dev"]