const mongoos = require("mongoose");

const categorySchema = mongoos.Schema({
    _id: mongoos.Schema.Types.ObjectId,
    title: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: String, require: true},
    Photos:{type: String, require: true}
})

module.exports = mongoos.model('Category',categorySchema)