#!/bin/bash

curl --include --request GET "https://tic-tac-toe-wdi-production.herokuapp.com/games" \
  --header "Authorization: Token token=${TOKEN}" \

echo
