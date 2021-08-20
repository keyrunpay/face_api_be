# overwrite files in the service directory
cd /home/ubuntu
source ~/.bashrc
pm2 delete momentous
yes | cp -Rvv /home/ubuntu/momentous-cd/* /home/ubuntu/momentous/
cd /home/ubuntu/momentous/
pm2 start /home/ubuntu/momentous/build/index.js --name momentous --update-env --max-memory-restart 1G
pm2 update