const router = require('koa-router')();
const userModel = require('../lib/mysql');
router.prefix('/users');
//参考 https://blog.csdn.net/wclimb/article/details/77890793
router.get('/', function (ctx, next) {
    ctx.body = 'this is a users response!'
});
router.post('/save', function (ctx, next) {
    console.log(ctx.request.body);
    const user_name = ctx.request.body.user_name;
    const user_sex = ctx.request.body.user_sex;
    const user_age = ctx.request.body.user_age;
    const user_telphone = ctx.request.body.user_telphone;
    const user_operation = ctx.request.body.user_operation;
    const user_scope_of_business = ctx.request.body.user_scope_of_business;
    const user_is_intention = ctx.request.body.user_is_intention;
    const user_lease_use = ctx.request.body.user_lease_use;
    const user_business_address = ctx.request.body.user_business_address;
    const user_move_date = ctx.request.body.user_move_date;
    const user_whether_children = ctx.request.body.user_whether_children;
    const user_children_level = ctx.request.body.user_children_level;
    const user_children_now_school = ctx.request.body.user_children_now_school;
    const user_children_way = ctx.request.body.user_children_way;
    const user_is_stay = ctx.request.body.user_is_stay;
    const user_source = ctx.request.body.user_source;
    const user_remake = ctx.request.body.user_remake;
    console.log(user_name, user_sex, user_scope_of_business);
    userModel.saveuser([null, user_name, user_sex, user_age, user_telphone, user_business_address, user_operation, user_scope_of_business, user_is_intention, user_lease_use, user_move_date, user_whether_children, user_children_level, user_children_now_school, user_children_way, user_is_stay, user_source, user_remake, null, null])
});

router.get('/bar', function (ctx, next) {
    ctx.body = 'this is a users/bar response'
});

module.exports = router;
