#### webproject

### to run locally:
npm install react-responsive-modal --save
npm install -g create-react-app
create-react-app photoalbum
npm install bootstrap@4.0.0-alpha.6
npm start

### to run on AWS:
# TODO:  move all this to build.sh
# install git and docker
sudo yum install git
sudo yum install docker -y

# configure aws manutally
aws configure

# install app
git clone https://github.com/jpizagno/webproject.git

# get images from S3
cd webproject/public
aws s3 cp s3://photoalbum/album.zip .
unzip album.zip

# start docker
sudo service docker restart

# build and run app
webproject/
sudo ./build.sh
sudo ./run.sh 

