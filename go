#!/usr/bin/env bash

set -e
TASK=$1
ARGS=${@:2}

help__deploy="deploy [dev, prod]"
task_deploy() {
  if [[ $1 == "prod" ]]; then
    ./deploy/deploy_prod.sh
  else
    ./deploy/deploy_dev.sh
  fi
}

## main
list_all_helps() {
  compgen -v | egrep "^help__.*"
}

NEW_LINE=$'\n'
if type -t "task_$TASK" &>/dev/null; then
  task_${TASK} ${ARGS}
else
  echo "usage: $0 <task> [<..args>]"
  echo "task:"

  HELPS=""
  for help in $(list_all_helps); do

    HELPS="$HELPS    ${help/help__/} |-- ${!help}$NEW_LINE"
  done

  echo "$HELPS" | column -t -s "|"
  exit 1
fi
