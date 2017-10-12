
# npm install
sudo yum install npm  -y
npm install react-responsive-modal --save 
npm install -g create-react-app

npm install --save-dev jest babel-jest babel-preset-es2015 babel-preset-react react-test-renderer
npm install --save-dev enzyme
npm i --save-dev react-test-renderer@16
npm i --save-dev enzyme enzyme-adapter-react-16

# create test project
create-react-app my-app-test

# copy software into my-app-test
rm -rf my-app-test/src/*
cp -R * my-app-test/

# run tests
cd my-app-test/
npm install
npm test
