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
-- mettere sveglia su render .com

npx prisma generate
npx prisma db push
npx prisam db seed
-cosi abbiamo caricato e creato dev.db
ora passiamo a test.db

npm install -g dotenv-cli // per cambiare file variabili d'ambiente

dotenv -e .env.test -- npx prisma db push
dotenv -e .env.test -- npx prisma db seed
oppure preparo script
npm run dbtest:push
npm run dbtest:seed
