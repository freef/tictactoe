# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-wdi-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

echo

{"id":null,
"cells":["x"," "," "," "," "," "," "," "," "],
"over":false,
"player_x":{"id":27,"email":"mat@cat.com"},
"player_o":null}
