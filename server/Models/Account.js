
const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater'); 
//const mongooseDelete = require('mongoose-delete'); // soft-delete
mongoose.plugin(slug); // Thư viện tạo slug theo name
const Schema = mongoose.Schema;

const Account = new Schema ({
    name: String,
    password: String,
    avatar: String,
    email: String,
    slug: { type: String, slug: 'name', unique: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    requests: Array,
    friends: Array,
    // field quy chuẩn, những field khác nếu được thêm thì cũng bị loại bỏ
})
/*Course.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all',

}); */
module.exports = mongoose.model('Account', Account); // Course đầu tiên là tên collection trong database(courses (tự động viết 
// thường và thêm s)), course thứ 2 là biết course trong Schema 