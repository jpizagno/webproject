# Family Album

A ReactJS app that runs a family album in Docker.  There must be a S3 bucket with album.zip in it.  

## to run locally:
```bash
npm install react-responsive-modal --save
npm install -g create-react-app
create-react-app photoalbum
npm install bootstrap@4.0.0-alpha.6
rm -rf ./photoalbum/src/*
cp -R src/ ./photoalbum/src/
mkdir ./photoalbum/src/css
cp -R src/css/* ./photoalbum/rsc/css/
npm statt
```

## to run on AWS:

Create a EC2 instance.  To run the App, the EC2 instance must have port 80/HTML open.  For testing, all ports need to be open. Need to GIT clone webproject to EC2 instance.  

### build app

The AWS keys are needed to access the album.zip file on S3.

```bash
cd webproject/
sudo ./build.sh {AWS_ACCESS_KEY_ID} {AWS_SECRET_ACCESS_KEY}
```

### run app
```bash
sudo ./run.sh 
```

### test app
```bash
sh ./test.sh 
```
