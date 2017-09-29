FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app

# npm install 
RUN npm install -g create-react-app
WORKDIR /usr/src/app/
RUN create-react-app my-app

# clean default installation
WORKDIR /usr/src/app/my-app/
RUN rm -rf /usr/src/app/my-app/src/*

# Install app dependencies
COPY package.json /usr/src/app/my-app/
COPY ./src/index.js /usr/src/app/my-app/src/
MKDIR /usr/src/app/my-app/src/css
COPY ./src/css/index.css /usr/src/app/my-app/src/css/
COPY ./src/css/bootstrap.min.css /usr/src/app/my-app/src/css/

EXPOSE 3000

CMD [ "npm", "start" ]

