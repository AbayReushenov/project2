fix it!!!
 
cd indecision-app
npm init

npm i
yarn install


npm install babel-cli --save
npm install babel-cli babel-core --save-dev
npm install babel-preset-es2015 --save-dev
npm run babel

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch



npm install http-server --save-dev
live-server -v
live-server public