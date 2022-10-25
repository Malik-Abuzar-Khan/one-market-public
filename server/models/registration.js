const { Schema, model } = require('mongoose');

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const registrationSchema = new Schema({
    primary_id: {
        type: String,
        required: true,
        unique: true,
    },
    
        owner_name: {
            type: String,
            // required: true
        },
        phone_number: {
            type: String,
            // required: true,
            // minLength: 5,
            // maxLength: 50,
        },
        email: {
            type: String,
            // required: true,
            // unique: true
        },
        password: {
            type: String,
            // required: true,
            // minLength: 6
        }
}, schemaOptions);

const registrationModel = model('shops', registrationSchema);

module.exports = {
    registrationModel
}