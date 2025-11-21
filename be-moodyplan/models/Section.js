const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
    section_id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true,
    },
    project_id: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    sort_order: {
        type: Number,
        default: 0,
    },
}, { timestamps: true, _id: false });

module.exports = mongoose.model('Section', SectionSchema);