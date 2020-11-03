#!/bin/bash
set -e
set -x
echo "Building rocc client"

currentDir=$(pwd)

echo "processing in directory : {$currentDir}"
cd ../client

echo "===================================="
echo "Download tool kit dependencies"
echo "===================================="

npm install -g npm-cli-login

npm-cli-login -u 320059087 -p "#NbxROCC19" -e suryakant.soni@philips.com -r https://artifactory.pic.philips.com:8443/artifactory/api/npm/pdv-rocc-npm-release-local/ --scope=@dls --config-path "./.npmrc"


echo "====================================="
echo "building client"
echo "====================================="
echo "ROCC_DEV=$ROCC_DEV" > .env
npm install
npm run build

echo "====================================="
echo "copying required content to docker folder"
echo "====================================="

cp -r dist ../docker
cp -r node_modules ../docker
cp package.json ../docker
cp client-start.sh ../docker

if [[ $1 == local_deploy ]]; then
    echo "====================================="
    echo "Building rocc docker image"
    echo "====================================="

    cd ../docker
    docker build --build-arg http_proxy=$http_proxy --build-arg https_proxy=$https_proxy -t docker.na1.hsdp.io/client-radiologysolutions-performancebridge_rocc-demo/philips/rocc-self-learning-app .

    echo "Removing content from docker folder"
    
    rm -rf dist
    rm -rf node_modules
    rm package.json
    rm client-start.sh

    echo "Staring docker container"
    docker-compose up -d
    echo "You can access app at: https://localhost/"
    echo "====================================="
fi
