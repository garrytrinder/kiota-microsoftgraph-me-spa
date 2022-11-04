#!/usr/bin/env bash

# login
echo "Sign in to Microsoft 365..."
npx -p @pnp/cli-microsoft365 -- m365 login --authType browser

# create AAD app
echo "Creating AAD app..."
appId=$(npx -p @pnp/cli-microsoft365 -- m365 aad app add --name "kiota-dev" --multitenant --redirectUris "http://localhost,http://localhost/index.html" --apisDelegated "https://graph.microsoft.com/User.Read" --platform spa --query "appId" -o text)

# write app to .env
echo "Writing appId to .env ..."
echo "CLIENT_ID=$appId" > .env

echo "DONE"
