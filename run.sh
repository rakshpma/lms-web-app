#!/bin/sh

if [ -f .env ];
then
    source .env
fi

echo .
env | grep FINERACT
echo .

envsubst < src/assets/env.template.js > src/assets/env.js

# ng serve
ng serve