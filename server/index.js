const express = require( 'express' );
const massive = require( 'massive' );
const axios = require( 'axios' );
const session = require( 'express-session' );
const bodyParser = require( 'body-parser' );
const app = express()
const PORT = 3028;
const authController = require( './controllers/authController' );

require( 'dotenv' ).config()

app.use( bodyParser.json() )
app.use( session ({
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14,
    },
    secret: process.env.SESSION_SECRET
}))
app.listen( PORT, () => console.log( `${PORT} people dancing in the moonlight` ))

massive( process.env.CONNECTION_STRING ).then( db => {
    app.set( 'db', db )
})

//auth0 set up
app.get('/callback', authController.login);
app.get('/api/user', authController.getUser);
app.post('/api/logout', authController.logout);
