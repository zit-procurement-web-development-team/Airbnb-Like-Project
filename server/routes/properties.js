import express from 'express';
import Property from '../models/Property.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all properties with filters
router.get('/', async (req, res) => {
  try {
    const {
      minPrice,
      maxPrice,
      location,
      guests,
      bedrooms,
      bathrooms,
      amenities,
      hasHotTub,
    } = req.query;

    const filter = {};

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    if (guests) {
      filter.maxGuests = { $gte: Number(guests) };
    }

    if (bedrooms) {
      filter.bedrooms = { $gte: Number(bedrooms) };
    }

    if (bathrooms) {
      filter.bathrooms = { $gte: Number(bathrooms) };
    }

    if (hasHotTub) {
      filter['features.hasHotTub'] = true;
    }

    if (amenities) {
      filter.amenities = { $all: amenities.split(',') };
    }

    const properties = await Property.find(filter)
      .populate('amenities')
      .populate('host', 'name email')
      .sort({ createdAt: -1 });

    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get featured properties
router.get('/featured', async (req, res) => {
  try {
    const properties = await Property.find({ isFeatured: true })
      .populate('amenities')
      .populate('host', 'name email')
      .limit(10);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get properties with hot tub
router.get('/hot-tub', async (req, res) => {
  try {
    const properties = await Property.find({ 'features.hasHotTub': true })
      .populate('amenities')
      .populate('host', 'name email')
      .limit(16);
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single property
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id)
      .populate('amenities')
      .populate('host', 'name email')
      .populate('reviews');
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create property (protected route)
router.post('/', auth, async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      host: req.user.id,
    });
    const newProperty = await property.save();
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update property (protected route)
router.patch('/:id', auth, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    
    if (property.host.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    Object.assign(property, req.body);
    property.updatedAt = Date.now();
    
    const updatedProperty = await property.save();
    res.json(updatedProperty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete property (protected route)
router.delete('/:id', auth, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    
    if (property.host.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    await property.remove();
    res.json({ message: 'Property deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search properties
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const properties = await Property.find(
      { $text: { $search: query } },
      { score: { $meta: 'textScore' } }
    )
      .sort({ score: { $meta: 'textScore' } })
      .populate('amenities')
      .populate('host', 'name email');
    
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
