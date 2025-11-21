const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    project_id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true,
    },
    owner_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#FFFFFF',
    },
    is_favorite: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true, _id: false });

module.exports = mongoose.model('Project', ProjectSchema);