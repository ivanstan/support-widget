#!/usr/bin/env bash
set -e

USER=glutenfr
HOST=ivanstanojevic.me
POST=2233
PATH=/home/glutenfr/projects/cdn.ivanstanojevic.me/support

# yarn build
echo scp -P $POST ./build/static/js/main.js $USER@$HOST:$PATH/main.js
