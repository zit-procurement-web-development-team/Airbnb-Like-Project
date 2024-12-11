import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Properties endpoints
export const propertiesApi = {
  getAll: (filters = {}) => api.get('/properties', { params: filters }),
  getById: (id) => api.get(`/properties/${id}`),
  getFeatured: () => api.get('/properties/featured'),
  getHotTub: () => api.get('/properties/hot-tub'),
  search: (query) => api.get('/properties/search', { params: { query } }),
};

// Amenities endpoints
export const amenitiesApi = {
  getAll: () => api.get('/amenities'),
};

// Vacation styles endpoints
export const vacationStylesApi = {
  getAll: () => api.get('/vacation-styles'),
};

// Authentication endpoints
export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/profile'),
};

// Wishlist endpoints
export const wishlistApi = {
  getAll: () => api.get('/wishlist'),
  add: (propertyId) => api.post('/wishlist', { propertyId }),
  remove: (propertyId) => api.delete(`/wishlist/${propertyId}`),
};

// Bookings endpoints
export const bookingsApi = {
  create: (bookingData) => api.post('/bookings', bookingData),
  getAll: () => api.get('/bookings'),
  getById: (id) => api.get(`/bookings/${id}`),
  cancel: (id) => api.delete(`/bookings/${id}`),
};

// Error interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      // You might want to redirect to login or refresh token
    }
    return Promise.reject(error);
  }
);

export default api;