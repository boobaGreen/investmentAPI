SETUP

npm install -g ts-node
tsnode lo tengo globale

npm i express dotenv cors express-validator @prisma/client

npm i -D typescript @types/node @types/express @types/dotenv @types/cors

npm i --save-dev prisma esbuild-register nodemon

npx prisma init --datasource-provider sqlite

npx prisma db push

-- migrazione

1. npx prisma migrate dev --name rename_firstName_to_firstname
2. npx prisma generate

https://www.youtube.com/watch?v=PM58NEMJgMw

-- test stat da finire , ma ok ! poi postmani test e readme con bottone postman e disegno db
-- struttura data grafico
-- sviluppo anche su render.com
-- readme
