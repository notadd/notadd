#!/usr/bin/env bash

set -ex

echo "Preparing Postgres 10"

sudo service postgresql stop || true

sudo docker run -d --name postgres10 -p 5432:5432 -e POSTGRES_DB=test_ci -e POSTGRES_PASSWORD=postgres postgres:10
sudo docker exec -i postgres11 bash <<< 'until pg_isready -U postgres > /dev/null 2>&1 ; do sleep 1; done'

echo "Postgres 10 ready"

# set -ex

# echo "Installing Postgres 10"
# sudo service postgresql stop
# sudo apt-get remove -q 'postgresql-*'
# sudo apt-get update -q
# sudo apt-get install -q postgresql-10 postgresql-client-10
# sudo cp /etc/postgresql/{9.6,10}/main/pg_hba.conf

# echo "Restarting Postgres 10"
# sudo service postgresql restart
