
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();
let config = require('../config/index');
let ControllerMap = require('./controllers');
const port = config.dev.mockServerPort;

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb'
}));

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  next();
});

router.get('/api/test', (req, res) => {
  res.status(200).send('ok, come on!');
});

router.get('/api/profile/detail', (req, res) => {
  res.status(200).send(ControllerMap.profile.getCurrentUser());
});

router.get('/api/profile/menus', (req, res) => {
  res.status(200).send(ControllerMap.profile.getValidMenus());
});

router.get('/api/profile', (req, res) => {
  res.status(200).send(ControllerMap.profile.getApiList());
});

app.use(router);
app.listen(port, () => {
  console.info(`mock server start success! please visit: http://localhost:${port}/***`);
});
module.exports = app;
