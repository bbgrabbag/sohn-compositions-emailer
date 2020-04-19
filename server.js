const express = require('express');
const { emailerRoute } = require('./routes/emailer');
const { handleError } = require('./middleware/error');
const { sources } = require('./config');

const app = express();

app.use(express.json());
app.use(express.static(sources.CLIENT_PATH));
app.use('/api/emailer', emailerRoute);
app.get('*', (req, res) => res.sendFile(sources.CLIENT_HTML))
app.use(handleError);

module.exports.app = app;