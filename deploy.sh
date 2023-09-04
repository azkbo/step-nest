#!/bin/bash
HOST=nestshop
rsync -avzp -e "ssh" ./Internet/ $HOST:/root/app
ssh $HOST "pm2 restart /root/app/http-server.js"
echo 'deploy success'