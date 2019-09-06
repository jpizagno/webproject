#!/bin/bash

set -e
set -x

# run Docker image
docker run -d -p 80:3000 jpizagno/react-webapp npm start
echo "Family Website is running at localhost:80"
