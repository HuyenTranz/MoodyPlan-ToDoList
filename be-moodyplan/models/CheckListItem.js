const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CheckListItemSchema = new Schema({
    item_id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true,
    },
    task_id: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    is_done: {
        type: Boolean,
        default: false,
    },
    sort_order: {
        type: Number,
        default: 0,
    },
}, { timestamps: true, _id: false });

module.exports = mongoose.model('CheckListItem', CheckListItemSchema);