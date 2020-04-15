// https://www.ionos.at/digitalguide/websites/web-entwicklung/graphql/

var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var user = require("../user.json");

// Konstruiere Schema auf Bais des GraphQL-Konzepts
var schema = buildSchema(`
    type Query { 
        hello: String
        user: [User]
    }

    type User {
        id: Int
        firstName: String
        lastName: String
        email: String
        gender: String
        ipAdress: String
    }
    `);

// API-Root stellt eine Resolver-Funktion für jeden zugreifenden Endpunkt zur Verfügung
var root = {
    hello: () => {
        return 'Hello World!';
    },
    user: () => {
        return user;
    }
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000);
console.log('GraphQL-API-Server auf localhost:4000/graphql ausführen');