import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [{
    type: String,
    required: true,
  }],
  amenities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Amenity',
  }],
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
  maxGuests: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  features: {
    hasHotTub: {
      type: Boolean,
      default: false,
    },
    hasPool: {
      type: Boolean,
      default: false,
    },
    hasWifi: {
      type: Boolean,
      default: true,
    },
  },
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  availability: [{
    startDate: Date,
    endDate: Date,
  }],
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Add indexes for better query performance
propertySchema.index({ location: 'text', title: 'text', description: 'text' });
propertySchema.index({ price: 1 });
propertySchema.index({ rating: -1 });
propertySchema.index({ isFeatured: 1 });
propertySchema.index({ 'features.hasHotTub': 1 });

const Property = mongoose.model('Property', propertySchema);

export default Property;
