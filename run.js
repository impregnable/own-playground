/**
 * Created by artem on 14.06.17.
 */

const express = require('express');
const path = require('path');

const app = express();

// define the port to run your app on
app.set('port', 7000);

// handle all your static files like css or images
app.use(express.static(path.join(__dirname, 'public')));

// make sure you can use jade, man
app.set('view engine', 'jade');

// change path for views
app.set('views', path.join(__dirname, '/public'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'helloPage'
    })
});

const server = app.listen(app.get('port'), () => {
   const port = server.address().port;
   console.log(`let's create something on ${port}`);
});