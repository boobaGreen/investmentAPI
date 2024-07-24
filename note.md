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

---test su getOneOnvestment da finire
-- aggiunegre end point per confermare data investimenti e testare
-- cambiare seed con alcuni confermati altri no
-- rifare tutti i postamane tutti gli insomnia
-- readme
-- grafico db

Formato ISO 8601
La rappresentazione di una data e ora in ISO 8601 è di solito nel formato:

ruby
Copy code
YYYY-MM-DDTHH:MM:SS.sssZ
Dove:

YYYY è l'anno a quattro cifre.
MM è il mese a due cifre.
DD è il giorno del mese a due cifre.
T è il separatore tra la data e l'ora.
HH è l'ora in formato 24 ore a due cifre.
MM è il minuto a due cifre.
SS è il secondo a due cifre.
.sss è la frazione di secondo opzionale (millesimi di secondo).
Z indica che l'orario è in UTC (Tempo Universale Coordinato).
Esempio
Un esempio di data e ora in formato ISO 8601 è:

makefile
Copy code
2024-07-24T15:30:45.123Z
Questo rappresenta il 24 luglio 2024 alle 15:30 e 45 secondi e 123 millisecondi, in UTC.

Formati Alternativi
ISO 8601 supporta anche altri formati, come:

Solo data: 2024-07-24
Solo ora: 15:30:45
Data e ora senza frazione di secondo: 2024-07-24T15:30:45
Data e ora con offset rispetto a UTC: 2024-07-24T15:30:45+02:00
Considerazioni
Fuso Orario: La Z indica che il tempo è in UTC. Se hai un fuso orario diverso, puoi usare un offset come +02:00 o -05:00.
Precisione: Se non hai bisogno di frazione di secondo, puoi ometterla (2024-07-24T15:30:45).
Quando utilizzi date in formato ISO 8601 per le tue API o database, assicurati che il tuo sistema possa gestire e interpretare correttamente questi formati.
