#!/bin/bash
REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY

sudo docker build -t <이미지 이름>

sudo docker run -d -p 3000:3000 <이미지 이름>
