# PERN Stack - Ecommerce
### Ecommerce website built with the PERN stack

#### Install dependencies : `npm install`

#### Install dependencies for server 
`cd server`
`npm install`

#### Install dependencies for client
`cd client`
`npm install`

#### Connect to your postgresdb and add info in .env file
Postgres database local connection

>PGUSER = 
>PGPASSWORD = 
>PGDATABASE = 
>PGDATABASE_TEST = 
>PGHOST = 
>PGPORT = 

Application Port - express server listens on this port (default 9000).
>PORT=9000 

JWT access secret
>SECRET= 

JWT refresh secret
>REFRESH_SECRET= 

Mail server settings
>SMTP_FROM= 
>SMTP_PASSWORD= 
>SMTP_USER= 
>SMTP_PORT= 
>SMTP_HOST= 

[Stripe](https://stripe.com/docs/keys) secret key
>STRIPE_SECRET_KEY = 

#### Run the client & server with concurrently
`npm run dev`

### Server runs on http://localhost:9000 and client on http://localhost:3000
