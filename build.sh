set -e
set -x

if [ $# -eq 0 ]
  then
    printf "No arguments supplied. usage:  \n shell$ sudo ./build {aws-access-key} {aws-secret-key}\n"
	exit;
fi

if [ -z "$1" ]
  then
    echo "No 1st argument suppled: aws-access-key "
	exit;
fi

if [ -z "$2" ]
  then
    echo echo "No 2nd argument suppled: aws-secret-key "
	exit;
fi

export AWS_ACCESS_KEY_ID="$1"
export AWS_SECRET_ACCESS_KEY="$2"
export AWS_DEFAULT_REGION=eu-central-1

# install git and docker
sudo yum install git -y
sudo yum install docker -y

# install app (should already be installed)
# git clone https://github.com/jpizagno/webproject.git

# get images from S3
cd public/
aws s3 cp s3://photoalbumeu/album.zip .
unzip -o album.zip
cd /home/ec2-user/webproject/

# start docker
sudo service docker restart

# build image
docker build -t jpizagno/react-webapp .