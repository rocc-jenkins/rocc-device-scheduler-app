# rocc-micro-frontend-app

# Micro Frontend Typescript App Template

This app is a basic app/remote application template with TypeScript.

# Configure App Dependencies

See package.json to add any app dependencies: redux, etc

# Configure Webpack Module Federation

See webpack.config.js and set the ModuleFederationPlugin to the appropriate configuration per the application:

1. Host
2. Remote
3. Bi-directional

# Installing App

Run `yarn`

# Running App

Run `yarn start`. This will build and serve `rocc-micro-frontend-app` on ports 3001.

Add more MFE apps to git repos by executing this template.  Then in the Host repo, set another git repo pointer in the Host to build and serve this and other MFE apps.

