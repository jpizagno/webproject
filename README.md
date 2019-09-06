# Family Album

A ReactJS app that runs a family album in Docker.  There must be a S3 bucket with album.zip in it.  

## Run locally:
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

## Run on AWS:

Create a EC2 instance.  To run the App, the EC2 instance must have port 80/HTML open.  For testing, all ports need to be open. Need to GIT clone webproject to EC2 instance.  

### Build app

The AWS keys are needed to access the album.zip file on S3.

```bash
sudo yum install git -y
git clone https://github.com/jpizagno/webproject.git
cd webproject/
sudo ./build.sh {AWS_ACCESS_KEY_ID} {AWS_SECRET_ACCESS_KEY}
```

### Run app
```bash
sudo ./run.sh 
```

### Test app
```bash
sh ./test.sh 
```
