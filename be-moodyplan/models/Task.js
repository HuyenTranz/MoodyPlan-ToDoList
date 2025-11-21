const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    task_id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true,
    },
    section_id: {
        type: Schema.Types.ObjectId,
        ref: 'Section',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: null,
    },
    due_date: {
        type: Date,
        default: null,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
    },
    is_completed: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true, _id: false });

module.exports = mongoose.model('Task', TaskSchema);