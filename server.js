const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

const app = express();
const port = 4000;

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log('listening to port ' + port);
});