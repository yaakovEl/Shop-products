const mongoos = require("mongoose");

const cakeSchema = mongoos.Schema({
    _id: mongoos.Schema.Types.ObjectId,
    title: { type: String, require: true },
    description: { type: String, require: true },
    content: { type: String, require: true },
    categoryId: { type: mongoos.Schema.Types.ObjectId, require: true, ref: 'Category' }
})

module.exports = mongoos.model('cske', cakeSchema)