/**
 * Created by JavaDer on 2018-04-05.
 */
const mysql = require('mysql');
const config = require('../config/config');
var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});
let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                resolve(err)
            } else {
                connection.query(sql, values, (err, rows) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}
let saveuser = function (values) {
    let _sql = "insert into customer_survey(user_id,user_name,user_sex,user_age,user_telphone,user_business_address,user_operation,user_scope_of_business,user_is_intention,user_lease_use,user_move_date,user_whether_school_children,user_children_school_level,user_children_now_school,user_children_way,user_is_stay,user_source,user_remake,ext1,ext2) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    return query(_sql, values)
}
module.exports = {
    query,
    saveuser
}