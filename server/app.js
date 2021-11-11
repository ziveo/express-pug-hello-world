const express = require('express');
const app = express();
const path = require('path');

const projectRoot = path.resolve(__dirname, '../');
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'pug');
app.set('views', path.join(projectRoot, 'views'));
app.use(express.static(path.join(projectRoot, '/public')));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home 123' });
});

var server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port http://localhost:${server.address().port}`);
});
