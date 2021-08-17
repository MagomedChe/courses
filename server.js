const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const users = router.db.get('users')

server.use(middlewares);
server.use(jsonServer.bodyParser)


server.post('/auth', (req, res) => {
  const { login, pass } = req.body;
  const authUser = users
    .toJSON()
    .find((user) => user.login === login && user.pass === pass);
  if (authUser) {
    const { id, login, token } = authUser;
    res.json({ id, login, token, pass: null });
  } else {
    res.status(401).json({ message: 'Ошибка авторизации' });
  }
});



server.use(router);
server.listen(process.env.PORT || 3010, () => {
  console.log(`JSON Server is running on 3001`);
});