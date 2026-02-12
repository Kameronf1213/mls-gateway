const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    mlsId: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    propertyDetails: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, required: true },
    listingInformation: { type: String, required: true },
    description: { type: String },
    images: { type: [String] },
    metadata: {
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    }
});

listingSchema.pre('save', function(next) {
    this.metadata.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Listing', listingSchema);