https://github.com/rocketseat-education/nlw-unite-nodejs

npm init -y (criar package json)
npm i typescript @types/node -D
npx tsc --init

configurar tsconfig: https://github.com/tsconfig/bases

tsconfig include ["src"]

npm i tsx -D

npx tsx watch src/server.ts

banco de dados: driver nativo || ORM

npm i prisma -D
npx prisma init

.env

tsx watch --env-file .env src/server.ts

npx prisma init --datasource-provider SQlite

npx prisma migrate dev

npx prisma studio

npm i zod para validação dos dados da api

"build": "tsup src --format esm"