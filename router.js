const Express = require('express');

const router = Express.Router();
const verifyRegister = require('./controllers/jwtRegisterController');
const verifySignIn = require('./controllers/jwtLoginContoller');
const authAdmin = require('./controllers/LocalAuthController');
const restrict = require('./middleware/restrict');
const joinCtrl = require('./controllers/game/join');
const submitCtrl = require('./controllers/game/submit');
const statusCtrl = require('./controllers/game/status');
const authUser = require('./middleware/jwtAuth');

const dashboardController = require('./controllers/adminDashboardController');

router.get('/register-admin', (req, res) => res.render('register'));
router.post('/register-admin', authAdmin.register);

router.get('/register-user', (req, res) => res.render('registerUser'));
router.post('/register-user', verifyRegister.signup);

router.get('/login-admin', (req, res) => {
  res.render('login');
});
router.post('/login', authAdmin.login);

router.get('/login-user', (req, res) => {
  res.render('loginUser');
});
router.post('/login-user', verifySignIn.login);

router.get('/index', authUser, (req, res) => {
  res.render('index');
});

router.get(`/game-page`, authUser, (req, res) => {
  res.render('game-page');
});

router.post('/game-page/join', joinCtrl);

router.post('/game-page/submit', submitCtrl);

router.get('/game-page/status/:roomCode', statusCtrl);

router.get('/dashboard', restrict, dashboardController.mainPage);

router.get('/user-details/:id', restrict, dashboardController.userDetail);

router.get('/create', restrict, async (req, res) => {
  res.render('create');
});

router.get('/save', restrict, dashboardController.saveData);

router.get('/edit-user/:id', restrict, dashboardController.editData);

router.get('/update/:id', restrict, dashboardController.updateData);

router.get('/delete', restrict, dashboardController.deleteData);

module.exports = router;
