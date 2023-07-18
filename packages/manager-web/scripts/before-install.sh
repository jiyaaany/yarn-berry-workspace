#!/bin/bash

# I want to make sure that the directory is clean and has nothing left over from
# previous deployments. The servers auto scale so the directory may or may not
# exist.
REPOSITORY=/home/ubuntu/deploy
if [ -d $REPOSITORY ]; then
    rm -rf $REPOSITORY
fi
mkdir -vp $REPOSITORY
