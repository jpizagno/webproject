FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app

# npm install
RUN npm install react-responsive-modal --save 
RUN npm install -g create-react-app
WORKDIR /usr/src/app/
RUN create-react-app my-app

# clean default installation
WORKDIR /usr/src/app/my-app/
RUN rm -rf /usr/src/app/my-app/src/*

# Install app dependencies
COPY package.json /usr/src/app/my-app/
COPY ./src/index.js /usr/src/app/my-app/src/
CMD ["mkdir","/usr/src/app/my-app/src/css"]
COPY ./src/css/index.css /usr/src/app/my-app/src/css/
COPY ./src/css/bootstrap.min.css /usr/src/app/my-app/src/css/
COPY ./src/css/custom.css /usr/src/app/my-app/src/css/
COPY ./public/*.jpg /usr/src/app/my-app/public/

EXPOSE 3000


