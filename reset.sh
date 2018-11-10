for each in `ps -eo pid,command | grep ruby | grep -v grep | awk '{print $1}' `; do kill -9 $each;done
killall −9 ruby
pkill -9 ruby
pidof ruby | xargs kill -9
ps aux | grep sidekiq | awk '{print $2}' | xargs kill
