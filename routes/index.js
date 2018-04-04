const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '金沙物流园客户追踪系统'
  })
});
router.get('/chart', async (ctx, next) => {
  await ctx.render('chart', {
    title: '金沙物流园客户追踪系统'
  })
});
router.get('/adduser', async (ctx, next) => {
  await ctx.render('form-line', {
    title: '金沙物流园客户追踪系统'
  })
});
router.get('/table-font-list', async (ctx, next) => {
  await ctx.render('table-font-list', {
    title: '金沙物流园客户追踪系统'
  })
});
router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
});

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
});

module.exports = router;
