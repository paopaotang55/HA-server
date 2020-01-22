const router = require('express').Router();
const controller = require('./controller');

router.get('/users', controller.user.getUsers);

router.get('/users/:id', controller.user.getUserInfo);

router.get('/todos/:id', controller.user.getUserTodos);

router.get('/posts', controller.user.getPosts);

router.get('/getComments/:id', controller.user.getComments);

router.get('/test', (req, res) => res.status(200).send('pass!'));

router.get('/*', (req, res) => res.status(200).send('404 not found'));

module.exports = router;
