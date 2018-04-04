const router = require('koa-router')();

router.prefix('/users');

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
});
router.post('/save', function (ctx, next) {
    console.log(ctx.request.body);
    console.log("1111111111111111111");

});

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
});

module.exports = router;
