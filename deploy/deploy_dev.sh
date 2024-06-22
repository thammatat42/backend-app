#!/bin/bash

REMOTE_HOST="103.114.200.25"
REMOTE_USER="root"
REMOTE_PASS="0Pl7l!\$\$He6c"
REMOTE_PORT="22"

# ================= down container =================
REMOTE_COMMANDS=$(cat << EOF
    # docker rmi $(docker images --filter "dangling=true" -q --no-trunc)

    cd money-story-backend
    docker compose -f docker-compose.dev.yml down 
    cd ..
    rm -rf money-story-backend
EOF
)
sshpass -p $REMOTE_PASS ssh -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST "$REMOTE_COMMANDS"


# ================= transfer file =================
rm -rf node_modules
rm -rf dist
sshpass -p $REMOTE_PASS scp -r . $REMOTE_USER@$REMOTE_HOST:/root/money-story-backend


# ================= up container =================
REMOTE_COMMANDS=$(cat << EOF
    cd money-story-backend
    docker compose -f docker-compose.dev.yml up  --build -d
EOF
)
sshpass -p $REMOTE_PASS ssh -p $REMOTE_PORT $REMOTE_USER@$REMOTE_HOST "$REMOTE_COMMANDS"
