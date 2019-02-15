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

"BAhJIiViZmZkOGYxMzYwYjUyZTc2YTkxM2Q2YWUyNWM5YWVmOAY6BkVG--62a77aa644a90c5d9889531197c46a35a9ed7f02"
