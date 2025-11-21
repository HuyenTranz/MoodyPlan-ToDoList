const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    google_id: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    auth_type: {
        type: String,
        enum: ['email', 'google'],
        default: 'email',
    },
    avatar_url: {
        type: String,
        default: null,
    },
    is_verified: {
        type: Boolean,
        default: false,
    },
    is_active: {
        type: Boolean,
        default: true,
    }
}, { timestamps: true, _id: false });

module.exports = mongoose.model('User', UserSchema);