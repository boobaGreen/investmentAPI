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

---da testare stats granularita e risposte , aggiunegre in risposta start ed end date , e la garnularity
-- mettere su env la durata del jwt in ore e il numero di tentatici (in questo caso cambiare anche codice da pensarci)
-- da aggiunegre test
-- da insomia a postman
-- struttura data grafico
-- sciluppo anche su render.com
-- documentazione presaentazione canvas
-- readme
