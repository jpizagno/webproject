# webproject

## to run locally:
```bash
npm install react-responsive-modal --save
npm install -g create-react-app
create-react-app photoalbum
npm install bootstrap@4.0.0-alpha.6
npm start
rm -rf ./photoalbum/src/*
cp -R src/ ./photoalbum/src/
mkdir ./photoalbum/src/css
cp -R src/css/* ./photoalbum/rsc/css/
```

## to run on AWS:

### build app
```bash
webproject/
sudo ./build.sh
```

### run app
```bash
sudo ./run.sh 
```

## to test
```bash
sh ./run.sh 
```
